import styles from "@/styles/card.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface CardProps {
    heading: string;
    subheading?: string;
    description?: string;
    imgSrc: StaticImageData;
    href?: string;
}

export function Card({
    heading,
    subheading,
    description,
    imgSrc,
    href,
}: CardProps) {
    const card = (
        <div className={styles.card}>
            <div className={styles.cardImage} style={{ position: "relative" }}>
                <Image src={imgSrc} fill alt={heading} />
            </div>
            <div className={styles.cardInfo}>
                {subheading && (
                    <div className={styles.cardSubheading}>{subheading}</div>
                )}
                <div className={styles.cardHeading}>{heading}</div>
                {description && (
                    <div className={styles.cardDescription}>{description}</div>
                )}
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className={styles.link}>
                {card}
            </Link>
        );
    }

    return card;
}
