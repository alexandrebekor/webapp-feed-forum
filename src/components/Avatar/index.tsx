import styles from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

type Avatar = {
  hasBorder?: boolean
} & ImgHTMLAttributes<HTMLImageElement>

export const Avatar = ({ hasBorder = false, ...props }: Avatar) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
