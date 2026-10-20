/** Desktop Agent occupants for the generic browser-brand slots. */
import type { Context as ClientContext } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {} from '@deepseek-ai/dsh-client-ui-renderer/client'
import type {} from '@deepseek-ai/dsh-client-ui-sidebar/client'
import type {} from '@deepseek-ai/dsh-client-ui-slots'
import { DesktopAgentBrandMark, DesktopAgentBrandName } from './Brand.tsx'
import { en, NS, type DesktopAgentBrandKey, zh } from './locales.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Desktop Agent prototype brand copy. */
    desktopAgentBrand: DesktopAgentBrandKey
  }
}

/** Required services: the UI slot registry and locale dictionary registry. */
export const inject = ['slots', 'locale']

/**
 * Fill every browser-brand slot as one declaration-aware registration set.
 * @param ctx - Client root context.
 */
export function apply(ctx: ClientContext): void {
  if (process.env.DSH_CLIENT_BUILD_PROFILE !== 'prototype') return
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'ui-brand-desktop-agent: dictionaries')
  ctx.slots.inject('sidebar.brand.mark', () =>
    ctx.slots.inject('sidebar.brand.name', () =>
      ctx.slots.inject('conversation.hero.brand.mark', function* () {
        yield ctx.slots.register({ name: 'sidebar.brand.mark', locale: NS }, DesktopAgentBrandMark)
        yield ctx.slots.register({ name: 'sidebar.brand.name', locale: NS }, DesktopAgentBrandName)
        yield ctx.slots.register({ name: 'conversation.hero.brand.mark', locale: NS }, DesktopAgentBrandMark)
      })))
}
