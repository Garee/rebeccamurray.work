import styles from "@/styles/footer.module.css";
import Link from "next/link";
import { useCallback } from "react";
import { CtaButton } from "./cta-button";

export default function Footer() {
    const onEmailMeBtnClick = useCallback(() => {
        const subject = "Hello!";
        document.location.href =
            "mailto:rebecca@rebeccamurray.work?subject=" +
            encodeURIComponent(subject);
    }, []);

    return (
        <footer className={styles.contact} id="contact">
            <h3>Get In Touch</h3>
            <div className={styles.info}>Rebecca Murray</div>
            <div className={styles.info}>UI/UX Designer</div>
            <div className={styles.email}>
                <a href="mailto:rebecca@rebeccamurray.work">
                    rebecca@rebeccamurray.work
                </a>
            </div>
            <CtaButton
                label="Email Me"
                className={styles.emailBtn}
                onClick={onEmailMeBtnClick}
            />
            <ul className={styles.links}>
                <li>
                    <Link href="https://www.instagram.com/streetpawdography/">
                        <i className="fa-brands fa-square-instagram"></i>
                    </Link>
                </li>

                <li>
                    <Link href="https://www.behance.net/rebeccamurraydesign">
                        <i className="fa-brands fa-square-behance"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/rebeccamurraydesign/">
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                </li>
                <li>
                    <Link href="https://dribbble.com/RebeccaMurrayDesign">
                        <i className="fa-brands fa-square-dribbble"></i>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
