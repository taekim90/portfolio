import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className='footer'>
            {/* <div className="center">
                <a className="center spacer" href="mailto:taehk15@gmail.com" target="_blank">
                    <Image 
                        src="https://img.icons8.com/doodle/48/000000/newsletter.png"
                        alt="email logo"
                        width={50}
                        height={50}
                    />
                </a>

                <a className="center spacer" href='https://www.linkedin.com/in/taekim90/' target="_blank">
                    <Image 
                        src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-linkedin-social-media-justicon-lineal-color-justicon.png"
                        alt="linkedin logo"
                        width={40}
                        height={40}
                    />
                </a>

                <a className="center small-spacer" href='https://github.com/taekim90' target="_blank">
                    <Image 
                        src="https://img.icons8.com/plasticine/100/000000/github.png"
                        alt="github logo"
                        width={50}
                        height={50}
                    />
                </a>
            </div> */}

            <h4 className='center'>© Tae Kim {new Date().getFullYear()}</h4>
        </div>
    )
}