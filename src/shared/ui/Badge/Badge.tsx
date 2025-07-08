import { FC, PropsWithChildren } from 'react'
import classes from './Badge.module.scss'
type BadgeProps = {
  variant?: 'sky' | 'blue'
}
export const Badge: FC<PropsWithChildren<BadgeProps>> = ({ children, variant = 'blue' }) => {
  return <div className={`${classes.badge} ${classes[variant]}`}>{children}</div>
}
