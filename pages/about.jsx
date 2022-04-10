// import SSR caching image tag
import Image from "next/image"
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <h1 >About Me</h1>
            <h4>
                Hello! My name is Tae. 
                I am a former speech language pathologist turned software engineer. 
                I incorporate my passion for helping people by developing functional applications that 
                can positively impact the lives of those around us.
            </h4>

            <div className='center'>
                <Image 
                    src="/pic6.png"             
                    alt="profile pic"
                    width={250}
                    height={320}
                />
            </div>
        </div>
    )
}