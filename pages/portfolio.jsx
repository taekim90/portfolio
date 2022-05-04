// import SSR caching image tag
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
    return (
        <div>
            <h2 className="center">Portfolio</h2>
            <div className="flex-wrap">

            <div className="div-space">
                <a href="https://taekim90.github.io/Color-Pipes/" target="_blank" rel="noopener" className="center underline" >Colored Pipes</a>
                <Link href="https://taekim90.github.io/Color-Pipes/">
                    <a className="center" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/pipes.png"             
                            alt="pipes"
                            width={500}
                            height={400}
                            />
                    </a>
                </Link>
            </div>
      
            <div className="div-space">
                <a href="https://the-travel-buddy-v1.herokuapp.com/" target="_blank" rel="noopener" className="center underline">The Travel Buddy</a>
                <Link href="https://the-travel-buddy-v1.herokuapp.com/">
                    <a className="center" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/airplane.png"             
                            alt="airplane"
                            width={500}
                            height={400}
                            />
                    </a>
                </Link>
            </div>
            
            <div className="div-space">
                <a href="https://kat-inventory-management.netlify.app/login" target="_blank" rel="noopener" className="center underline">KAT Inventory Management - Group Project</a>
                <Link href="https://kat-inventory-management.netlify.app/login">
                    <a className="center" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/inventory.png"             
                            alt="inventory"
                            width={500}
                            height={400}
                            />
                    </a>
                </Link>
            </div>

            <div className="div-space">
                <a href="https://bloggit-v1.herokuapp.com/" target="_blank" rel="noopener" className="center underline">BloggIt</a>
                <Link href="https://bloggit-v1.herokuapp.com/">
                    <a className="center" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="/bloggit.png"             
                            alt="blog"
                            width={500}
                            height={400}
                            />
                    </a>
                </Link>
            </div>
            </div>
        </div>
    )
}