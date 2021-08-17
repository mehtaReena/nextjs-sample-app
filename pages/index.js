
import styles from '../styles/Home.module.css'
import App from '../pages/App'
import NavBar from '../pages/NavBar'

export default function Home() {
  return (
    <div className={styles.container}>
   <NavBar/>
  <App/>
    </div>
  )
}
