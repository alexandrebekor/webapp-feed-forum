import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import { Post, PostProps } from './components/Post'
import './globals.css'

const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alexandrebekor.png',
      name: 'Alexandre Bekor',
      role: 'Founder',
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone! 🤚' },
      {
        type: 'paragraph',
        content:
          'Sou desenvolvedor full-stack, imerso na criação de soluções em software desde 2012 e apaixonado pelo impacto positivo da programação nos negócios, e na sociedade!',
      },
      {
        type: 'paragraph',
        content:
          'Esse projeto foi desenvolvido com as tecnologias: React.JS, CSS, Vite.JS',
      },
      {
        type: 'paragraph',
        content: 'Para mais informações, dá uma olhada no meu blog:',
      },
      { type: 'link', content: 'https://alexandrebekor.com' },
    ],
    publishedAt: new Date('2022-12-19'),
  },
]

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
