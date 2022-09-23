import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.brandContainer}>
            <Image src={"/brand/logo.png"} alt={"logo"} width={50} height={50}/>
            <h2>DevClusters</h2>
        </div>
        <h1 className={styles.title}>Next-typescript-template! </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
