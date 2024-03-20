"use client"
import Image from "next/image"
import styles from "./Footer.module.css"
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.description}>
                        <h1>DMSolving product studio</h1>
                        <p>Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
                    </div>
                    <div className={styles.link}>
                        <h4>info@dmsolving.com</h4>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.projects}>
                        <h5>Our projects</h5>
                    </div>

                    <div className={styles.follow}>
                        <h5>Follow us</h5>

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
        </footer>
    )
}

export default Footer