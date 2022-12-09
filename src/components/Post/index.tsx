import styles from './Post.module.css'

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/alexandrebekor.png"
          />
          <div>
            <strong>Alexandre Bekor</strong>
            <span>Full-stack Developer</span>
          </div>
        </div>
        <time title="09 de Dezembro às 16h47" dateTime="2022-12-09 16:47:13">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello World! 🤚</p>
        <p>This is my first post here!</p>
        <p>
          <a href="#">clickhere</a>
        </p>
      </div>

      <form action="#" className={styles.comment}>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder="Escreva um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
