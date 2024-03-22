"use client"
import Image from "next/image"
import styles from "./Footer.module.css"
import { motion } from "framer-motion"
import Link from "next/link"
const projects = [
    {
        label: "WingRiders",
        href: "/contact-us"
    },
    {
        label: "Trackee",
        href: "/contact-us"
    },
    {
        label: "Worldcoin",
        href: "/contact-us"
    },
    {
        label: "Audience+",
        href: "/contact-us"
    },
]

const follow = [
    {
        label: "Facebook",
        href: "/contact-us"
    },
    {
        label: "Instagram",
        href: "/contact-us"
    },
    {
        label: "Dribbble",
        href: "/contact-us"
    },
    {
        label: "Linkedin",
        href: "/contact-us"
    },
]
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.content} layout`}>
                <div className={styles.left}>
                    <div className={styles.description}>
                        <h1>DMSolving product studio</h1>
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
                        <h5>Our projects</h5>
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