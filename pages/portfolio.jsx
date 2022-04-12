// import SSR caching image tag
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
    return (
        <div>
            <h2 className="center">Portfolio</h2>

            <div className="div-space">
                <a href="https://taekim90.github.io/First-Project-Color-Pipes/" target="_blank" rel="noopener noreferrer" className="center underline" >Colored Pipes</a>
                <Link href="https://taekim90.github.io/First-Project-Color-Pipes/" target="_blank" rel="noopener noreferrer">
                    <a className='center'>
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
                <a href="https://the-travel-buddy-v1.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="center underline">The Travel Buddy</a>
                <Link href="https://the-travel-buddy-v1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <a className='center'>
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
                <a href="https://kat-inventory-management.netlify.app/login" target="_blank" rel="noopener noreferrer" className="center underline">KAT Inventory Management - Group Project</a>
                <Link href="https://kat-inventory-management.netlify.app/login" target="_blank" rel="noopener noreferrer">
                    <a className='center'>
                        <Image 
                            src="/inventory.png"             
                            alt="inventory"
                            width={500}
                            height={400}
                        />
                    </a>
                </Link>
            </div>
        </div>
    )
}