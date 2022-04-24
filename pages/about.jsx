// import SSR caching image tag
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function About() {
    return (
        <div className={styles.container}>
            <h2 className="center">About Me</h2>
            <div>
                <div className='center'>
                    <Image 
                        src="/pic7.png"             
                        alt="profile pic"
                        width={300}
                        height={400}
                        />
                </div>
                <div>
                    <h3 className="center squeeze-center"> 
                        I&apos;m a former speech language pathologist turned software engineer.
                        I incorporate my passion for helping people by developing functional applications that 
                        can positively impact the lives of those around us. I enjoy taking on new challenges
                        that can stretch my mind and help result in both personal and professional progress
                    </h3>
                </div>
            </div>

   
        </div>
    )
}