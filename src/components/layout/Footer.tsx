"use client"
import Image from "next/image"
import styles from "./Footer.module.css"
import { motion } from "framer-motion"
import Link from "next/link"
const projects = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "Portfolio",
        href: "/portfolio"
    },
    {
        label: "About",
        href: "/about-us"
    },
    {
        label: "Pricing",
        href: "/pricing"
    },
    {
        label: "Request a portfolio",
        href: "/contact-us"
    },
]

const follow = [
    {
        label: <Image src={"/images/footer/facebook.png"} alt={"facebook"} height={30} width={30}/>,        
        href: "https://www.facebook.com/people/DM-Solving/61552580015958/"
    },
    {
        label: <Image src={"/images/footer/instgram.png"} alt={"instgram"} height={30} width={30}/>,
        href: "https://www.instagram.com/dmsolving/"
    },
    {
        label: <Image src={"/images/footer/twiter.png"} alt={"twiter"} height={30} width={30}/>,
        href: "https://twitter.com/DMsolving?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    },
]
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.content} layout`}>
                <div className={styles.left}>
                    <div className={styles.description}>
                        <h1>DMSolving Studio</h1>
                        <p>Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
                    </div>
                    <div>
                        <Link href={"mailto:info@dmsolving.com"} className={styles.link}>
                            <h4>info@dmsolving.com</h4>
                            <Image src={"/images/footer/right-arrow.png"}
                                alt={"right-arrow.png"}
                                height={161}
                                width={157}
                                className={styles.rightArrow}
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.projects}>
                        <h5>Navigation</h5>
                        <ul>
                            {
                                projects && projects.map(({ label, href }) => (
                                    <li key={href}>
                                        <Link href={href}
                                            className={styles.item}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className={styles.follow}>
                        <h5>Follow us</h5>
                        <ul>
                            {
                                follow && follow.map(({ label, href }) => (
                                    <li key={href}>
                                        <Link href={href}
                                            className={styles.item}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>


            <motion.div
                className={styles.footerBackground}
                animate={{
                    opacity: [0.8, 0.3, 0.8],
                    transition: {
                        duration: 5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }
                }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    src={"/images/footer/footer-background.png"}
                    alt={"footer-background.png"}
                    width={690}
                    height={499}
                />
            </motion.div>

            <div className={styles.backToTop}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}
            >
                <Image
                    src={"/images/footer/top-arrow.png"}
                    alt={"top-arrow"}
                    height={157}
                    width={160}
                    className={styles.topArrow}
                />
                <p>Back to top</p>
            </div>
        </footer>
    )
}

export default Footer