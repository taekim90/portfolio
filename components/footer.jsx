import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="footer">
            <div className="center">
                {/* <button>Download Resume</button> */}
                <a href="https://docs.google.com/document/d/1_qkIe_8ku7_a8hvbinQsab8Ouipq9re6jDkVOT2IHGs/export?format=pdf" download>
                    <button>Download Resume</button>
                </a>
            </div>

            <h4 className="center">© Tae Kim {new Date().getFullYear()}</h4>
        </div>
    )
}