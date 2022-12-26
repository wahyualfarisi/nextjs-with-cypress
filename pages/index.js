import Link from 'next/link';
import Header from './../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Cypress with next.js" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Link href="/login" className={styles.card}>
            <h2>Login</h2>
          </Link>
          OR
          <Link href="/register" className={styles.card}>
            <h2>Register</h2>
          </Link>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
