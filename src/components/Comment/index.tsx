import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'

export const Comment = () => {
  return (
    <article className={styles.wrapper}>
      <Avatar />
      <section className={styles.commentZone}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorInfo}>
              <strong>Alexandre Bekor</strong>
              <time>Cerca de 2h</time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Galera! Parabéns! ✋</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>30</span>
          </button>
        </footer>
      </section>
    </article>
  )
}
