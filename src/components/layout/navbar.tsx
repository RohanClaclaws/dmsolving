import Image from "next/image"
import styles from "./Navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    const links = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Services",
            href: "/services",
        },
        {
            label: "Portfolio",
            href: "/portfolio",
        },
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
        {
            label: "Request a Proposal",
            href: "/proposal",
        },
    ].map(({ label, href }) => (
        <li
            key={href}
            className={styles.link}
        >
            <Link
                href={href}
            >
                {label}
            </Link>
        </li>
    ))
    return (
        <header className={styles.headerArea}>
            <div className="layout">
                <div className={styles.navbar}>
                    <div className={styles.logoArea}>
                        <Link
                            href="/"
                            className={styles.logo}
                        >
                            <Image src={"/images/navbar/logo-with-name.png"} alt={"logo with name"} height={212} width={764} />
                        </Link>
                        <p className={styles.phoneNumber}>
                            (+1)647-856-3919
                        </p>
                    </div>
                    <div className={styles.linksArea}>
                        <ul className={styles.links}>
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className={styles.contactArea}>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar