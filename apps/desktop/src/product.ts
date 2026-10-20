/** Build-profile-owned identity displayed by the unpackaged Desktop shell. */

/** Official shell name retained by every build except the explicit prototype profile. */
export const OFFICIAL_DESKTOP_PRODUCT_NAME = 'DeepSeek Harness'

/**
 * Resolve the shell display name from public client build values.
 * @param environment - Build environment embedded into the Desktop bundle.
 * @returns The prototype title for the prototype profile, otherwise the official name.
 */
export function resolveDesktopProductName(
  environment: Readonly<Record<string, string | undefined>>,
): string {
  if (environment.DSH_CLIENT_BUILD_PROFILE !== 'prototype') return OFFICIAL_DESKTOP_PRODUCT_NAME
  const title = environment.DSH_CLIENT_TITLE
  if (title === undefined || title.trim() === '') {
    throw new Error('desktop product: prototype builds require DSH_CLIENT_TITLE')
  }
  return title
}

/** Product name embedded into the current Desktop shell bundle. */
export const DESKTOP_PRODUCT_NAME = resolveDesktopProductName({
  DSH_CLIENT_BUILD_PROFILE: process.env.DSH_CLIENT_BUILD_PROFILE,
  DSH_CLIENT_TITLE: process.env.DSH_CLIENT_TITLE,
})
