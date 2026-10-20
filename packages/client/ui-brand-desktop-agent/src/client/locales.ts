/** `desktopAgentBrand` namespace dictionaries. */

/** Dictionary namespace owned by this plugin. */
export const NS = 'desktopAgentBrand'

/** Simplified Chinese dictionary (the key-set source of truth). */
export const zh = {
  mark: 'DA',
  name: 'Desktop Agent',
} satisfies Record<string, string>

/** The Desktop Agent brand namespace key union. */
export type DesktopAgentBrandKey = keyof typeof zh

/** English dictionary, checked complete against the zh key set. */
export const en = {
  mark: 'DA',
  name: 'Desktop Agent',
} satisfies Record<DesktopAgentBrandKey, string>
