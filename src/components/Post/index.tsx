import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type Author = {
  avatarUrl: string
  name: string
  role: string
}

type Content = {
  type: 'paragraph' | 'link'
  content: string
}

export type PostProps = {
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}

export const Post = ({ id, author, content, publishedAt }: PostProps) => {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState<string>('')

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = (event: FormEvent) => {
    event?.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')
  }

  const handleChangeNewComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = event?.target.value
    event?.target.setCustomValidity('')
    setNewComment(comment)
  }

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeleteOne = comments.filter(
      comment => comment !== commentToDelete
    )

    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/alexandrebekor.png" hasBorder />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href={line.content}>{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comment}>
        <strong>Deixe o seu feedback</strong>
        <textarea
          name="comment"
          onChange={handleChangeNewComment}
          value={newComment}
          placeholder="Escreva um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      {comments.map(comment => (
        <Comment
          key={comment}
          content={comment}
          onDeleteComment={deleteComment}
        />
      ))}
    </article>
  )
}
