import { Header } from "./components/Header"
import { Sidebar } from './components/Sidebar'
import './globals.css'
import styles from './App.module.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Post 1 2 3</p>
        </main>
      </div>
    </div>
  )
}

export default App
