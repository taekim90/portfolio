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

      <div>
        {/* <img src='/coding.png' alt="computer pic" /> */}
        <h1 className='img'>Hello, I'm Tae<br/>I'm a full stack web developer and software engineer</h1>
      </div>

{/* 
      <h1>Hello, I'm Tae</h1>
      <h1>I'm a full stack web developer and software engineer</h1> */}

      {/* <div className='portfolio'>
        <h2>Portfolio</h2>
      </div> */}

      {/* <div className='skills'>
        <h2>Skills</h2>
      </div> */}

      <div className='center'>
        <button>Download Resume</button>
        <a href='https://docs.google.com/document/d/1_qkIe_8ku7_a8hvbinQsab8Ouipq9re6jDkVOT2IHGs/edit?usp=sharing' download></a>
      </div>
    </div>
  )
}
