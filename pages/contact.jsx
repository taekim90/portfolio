// import SSR caching image tag
import Image from "next/image"
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
        <div className={styles.container}>
            <h1 className='center'>Contact Information</h1>
            <h3 className='center'>
                Please don't hesitate to reach out through email or LinkedIn. Would love to connect!
            </h3>

            <div className='start'>
                <h2 className=''>Email</h2>
                <h2 className='start'>taehk15@gmail.com</h2>               
                <a className='center spacer' href="mailto:taehk15@gmail.com" target="_blank">
                    <Image 
                        src="https://img.icons8.com/doodle/48/000000/newsletter.png"
                        alt="email logo"
                        width={50}
                        height={50}
                    />
                </a>
            </div>

            <div className='start'>
                <h2 className=''>LinkedIn</h2>
                <h2 className='start'>linkedin.com/in/taekim90</h2>               
                <a className='center spacer' href='https://www.linkedin.com/in/taekim90/' target="_blank">
                    <Image 
                        src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png"
                        alt="linkedin logo"
                        width={40}
                        height={40}
                    />
                </a>
            </div>

            <div className='start'>
                <h2 className=''>GitHub</h2>
                <h2 className='start'>github.com/taekim90</h2>               
                <a className="center small-spacer" href='https://github.com/taekim90' target="_blank">
                    <Image 
                        src="https://img.icons8.com/plasticine/100/000000/github.png"
                        alt="github logo"
                        width={50}
                        height={50}
                    />
                </a>
            </div>

            <div className='blank-space'>

            </div>
        </div>
    )
}