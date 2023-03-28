import styles from "@/styles/nav.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeToggle } from "./theme-toggle";

export default function Nav() {
    const { asPath } = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink}>
                    <div className={styles.r}>R.</div> MURRAY
                </Link>
            </div>
            <div className={styles.links}>
                <ul>
                    <li>
                        <Link
                            href="/"
                            className={
                                asPath === "/" ? styles.active : undefined
                            }
                        >
                            Home
                        </Link>
                    </li>
                    <li>|</li>
                    <li>
                        <Link
                            href="/work"
                            className={
                                asPath === "/work" ? styles.active : undefined
                            }
                        >
                            Work
                        </Link>
                    </li>
                    <li>|</li>
                    <li>
                        <Link
                            href="/about"
                            className={
                                asPath === "/about" ? styles.active : undefined
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li>|</li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
                <ThemeToggle />
            </div>
        </nav>
    );
}
