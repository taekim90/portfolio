import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Porfolio</title>
        <meta name="description" content="Tae Kim Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <div className='center'>
        <Image 
          src='/coding.png'
          alt='resume logo'
          width={1400}
          height={740}
        />
      </div> */}

      <div className='center'>
        {/* <img src='/coding.png' alt="computer pic" /> */}
        <h1 className='img'>Hello! I'm Tae,<br/>a full stack web developer<br/> and software engineer</h1>
      </div>


    </div>
  )
}
