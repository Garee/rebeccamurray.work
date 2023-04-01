import Nav from "@/components/nav";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "@/styles/layout.module.css";
import Head from "next/head";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { slide as Menu } from "react-burger-menu";

interface LayoutProps extends PropsWithChildren {
    title: string;
}

export function Layout({ title, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <>
                <Menu right>
                    <ul
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <li className={styles.menuItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="/work">Work</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link
                                href="#contact"
                                onClick={() => {
                                    document
                                        .getElementById(
                                            "react-burger-cross-btn"
                                        )
                                        ?.click();
                                }}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ThemeToggle />
                </Menu>
                <Nav />
                <main className={styles.main}>{children}</main>
            </>
        </>
    );
}
