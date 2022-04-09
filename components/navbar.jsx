// built in lin for SSR optimization and SEO from next
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            {/* we can use anchor tag. that works but next provides another option */}
            <Link href='/'>
                {/* <a>Home</a> */}
                Home
            </Link>

            <Link href='/about'>
                About Me
            </Link>
        </nav>
    )
}