import styles from "@/styles/panel.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Animation } from "./animation";

interface PanelProps {
    imgSrc?: StaticImageData;
    type: string;
    heading: string;
    description: string;
    rtl?: boolean;
    href?: string;
    animation?: boolean;
}

export default function Panel({
    imgSrc,
    type,
    heading,
    description,
    rtl,
    href,
    animation,
}: PanelProps) {
    return (
        <li className={styles.panelContainer}>
            <div
                className={styles.panelImage}
                style={{
                    position: "relative",
                    minHeight: "400px",
                    maxHeight: "400px",
                }}
            >
                {!animation && imgSrc && <Image src={imgSrc} fill alt="" />}
                {animation && <Animation />}
            </div>
            <div className={rtl ? styles.panelInfoRtl : styles.panelInfo}>
                <div className={styles.panelType}>{type}</div>
                <div className={styles.panelHeading}>{heading}</div>
                <div className={styles.panelDescription}>
                    {description}
                    <br />
                    <br />
                    {href && (
                        <div className={styles.panelLink}>
                            Check it out{" "}
                            <Link href={href} target="_blank">
                                here.
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
}
