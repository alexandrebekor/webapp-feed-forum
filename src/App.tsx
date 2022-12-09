import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './globals.css'
import styles from './App.module.css'
import { Post } from './components/Post'

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
