import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { parseDesktopDevelopmentArguments } from '../scripts/dev.ts'
import { OFFICIAL_DESKTOP_PRODUCT_NAME, resolveDesktopProductName } from '../src/product.ts'

describe('desktop product profile', () => {
  it('keeps the official identity unless the prototype profile is explicit', () => {
    expect(resolveDesktopProductName({})).toBe(OFFICIAL_DESKTOP_PRODUCT_NAME)
    expect(resolveDesktopProductName({
      DSH_CLIENT_BUILD_PROFILE: 'official',
      DSH_CLIENT_TITLE: 'Unexpected',
    })).toBe(OFFICIAL_DESKTOP_PRODUCT_NAME)
  })

  it('uses the selected prototype title and rejects an incomplete profile', () => {
    expect(resolveDesktopProductName({
      DSH_CLIENT_BUILD_PROFILE: 'prototype',
      DSH_CLIENT_TITLE: 'Desktop Agent',
    })).toBe('Desktop Agent')
    expect(() => resolveDesktopProductName({
      DSH_CLIENT_BUILD_PROFILE: 'prototype',
    })).toThrow(/DSH_CLIENT_TITLE/u)
  })

  it('exposes build and start commands that select the prototype profile', () => {
    expect(parseDesktopDevelopmentArguments(['--profile', 'prototype'])).toEqual({
      skipBuild: false,
      profile: 'prototype',
    })
    expect(parseDesktopDevelopmentArguments(['--skip-build', '--profile', 'prototype'])).toEqual({
      skipBuild: true,
      profile: 'prototype',
    })
    const manifest = JSON.parse(readFileSync(resolve(import.meta.dirname, '../../../package.json'), 'utf8')) as {
      scripts: Record<string, string>
    }
    expect(manifest.scripts['dev:desktop:prototype']).toContain('--profile prototype')
    expect(manifest.scripts['start:desktop:prototype']).toContain('--profile prototype')
  })
})
