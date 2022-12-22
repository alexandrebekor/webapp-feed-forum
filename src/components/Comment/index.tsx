import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'

type Comment = {
  content: string
  onDeleteComment: (comment: string) => void
}

export const Comment = ({ content, onDeleteComment }: Comment) => {
  const [likesCount, setLikesCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikesCount(likes => {
      return likes + 1
    })
  }

  return (
    <article className={styles.wrapper}>
      <Avatar src="https://github.com/alexandrebekor.png" />
      <section className={styles.commentZone}>
        <div className={styles.commentBox}>
          <header>
            <div className={styles.authorInfo}>
              <strong>Alexandre Bekor</strong>
              <time>Cerca de 2h</time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likesCount}</span>
          </button>
        </footer>
      </section>
    </article>
  )
}
