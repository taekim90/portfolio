// import SSR caching image tag
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Contact() {
    return (
        <div className={styles.container}>
            <h2 className="center">Contact Information</h2>
            <h3 className="center large-space">
                Please don&apos;t hesitate to reach out through email or LinkedIn. Would love to connect!
            </h3>

            <div className="start">
                <h3>Email</h3>
                <h3 className="start">taehk15@gmail.com</h3>               
                <a className="center spacer" href="mailto:taehk15@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="https://img.icons8.com/external-nawicon-outline-color-nawicon/50/000000/external-email-communication-nawicon-outline-color-nawicon-2.png"
                        alt="email logo"
                        width={50}
                        height={50}
                    />
                </a>
            </div>

            <div className="start">
                <h3>LinkedIn</h3>
                <h3 className="start">linkedin.com/in/taekim90</h3>               
                <a className="center spacer" href="https://www.linkedin.com/in/taekim90/" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png"
                        alt="linkedin logo"
                        width={40}
                        height={40}
                    />
                </a>
            </div>

            <div className="start">
                <h3>GitHub</h3>
                <h3 className="start">github.com/taekim90</h3>               
                <a className="center small-spacer" href="https://github.com/taekim90" target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="https://img.icons8.com/fluency/50/000000/github.png"
                        alt="github logo"
                        width={50}
                        height={50}
                    />
                </a>
            </div>

            <div className="blank-space">

            </div>
        </div>
    )
}