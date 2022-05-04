// built in lin for SSR optimization and SEO from next
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="center nav">
            {/* we can use anchor tag. that works but next provides another option */}
            <div className="spacer underline">
                <Link href="/" className='underline'>
                    Home
                </Link>
            </div>

            <div className="spacer underline">
                <Link href="/portfolio" className='underline'>
                    Portfolio
                </Link>
            </div>

            <div className="spacer underline">
                <Link href="/about" className='underline'>
                    About
                </Link>
            </div>

            <div className="spacer underline">
                <Link href="/contact" className='underline'>
                    Contact
                </Link>
            </div>
            
        </nav>
    )
}