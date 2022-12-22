import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './globals.css'
import styles from './App.module.css'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alexandrebekor.png',
      name: 'Alexandre Bekor',
      role: 'Founder',
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone! 🤚' },
      { type: 'paragraph', content: 'My name is Alexandre Bekor.' },
      { type: 'link', content: 'https://alexandrebekor.com' },
    ],
    publishedAt: new Date('2022-12-19'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/alexandrebekor.png',
      name: 'João Vitor',
      role: 'full-stack developer',
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone, come on! 🤚' },
      { type: 'paragraph', content: 'My name is João Vitor.' },
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
