// built in lin for SSR optimization and SEO from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='center'>
            {/* we can use anchor tag. that works but next provides another option */}
            <div className='spacer'>
                <Link href='/'>
                    <h3>Home</h3>
                </Link>
            </div>

            <div className='spacer'>
                <Link href='/portfolio'>
                    <h3>Portfolio</h3>
                </Link>
            </div>

            <div className='spacer'>
                <Link href='/about'>
                    <h3>About</h3>
                </Link>
            </div>

            <div className='spacer'>
                <Link href='/contact'>
                    <h3>Contact</h3>
                </Link>
            </div>
            
        </nav>
    )
}