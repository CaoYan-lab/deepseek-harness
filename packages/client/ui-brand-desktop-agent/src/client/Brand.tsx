import type { CSSProperties } from 'react'
import type { HeroBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-conversation/client'
import type { PropsLocale } from '@deepseek-ai/dsh-client-ui-slots'
import css from './Brand.module.css'

type BrandMarkStyle = CSSProperties & {
  '--desktop-agent-mark-size': string
}

type DesktopAgentBrandMarkProps = HeroBrandMarkOwnerProps & PropsLocale<'desktopAgentBrand'>

/**
 * Render the Desktop Agent monogram at the size requested by its host.
 * @param props - Host-supplied mark presentation.
 * @returns the Desktop Agent mark.
 */
export function DesktopAgentBrandMark({ size, className, t }: DesktopAgentBrandMarkProps) {
  const style: BrandMarkStyle = { '--desktop-agent-mark-size': `${size}px` }
  const classes = className === undefined ? css.mark : `${css.mark} ${className}`
  return (
    <span className={classes} style={style} data-desktop-agent-mark="">
      <span className={css.monogram}>{t('mark')}</span>
    </span>
  )
}

/**
 * Render the Desktop Agent product name beside the sidebar mark.
 * @returns the Desktop Agent wordmark.
 */
export function DesktopAgentBrandName({ t }: PropsLocale<'desktopAgentBrand'>) {
  return <span className={css.name}>{t('name')}</span>
}
