import styles from "@/styles/case-study.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CaseStudyProps {
    imgSrc: StaticImageData;
    heading: string;
    description: string;
}

export default function CaseStudy({
    imgSrc,
    heading,
    description,
}: CaseStudyProps) {
    return (
        <Link href="#" className={styles.link}>
            <li className={styles.caseStudy}>
                <div
                    className={styles.caseStudyImage}
                    style={{ position: "relative" }}
                >
                    <Image src={imgSrc} fill alt={heading} />
                </div>
                <div className={styles.caseStudyInfo}>
                    <div className={styles.caseStudyDescription}>
                        {description}
                    </div>
                    <div className={styles.caseStudyHeading}>{heading}</div>
                </div>
            </li>
        </Link>
    );
}
