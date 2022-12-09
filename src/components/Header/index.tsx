import styles from './Header.module.css'

export const Header = () => {
  console.log(styles)
  return (
    <header className={styles.header}>Agência Bekor</header>
  )
}