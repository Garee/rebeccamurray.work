import styles from "@/styles/project.module.css";
import Image from "next/image";
import Link from "next/link";

export interface ProjectProps {
    name: string;
    tagline: string;
    description: string;
    imgSrc: string;
    href?: string;
    steps?: Array<{
        heading: string;
        subheading?: string;
        description: string;
        imgSrc?: string;
        videoSrc?: string;
    }>;
}

export function Project({
    name,
    tagline,
    description,
    imgSrc,
    href,
    steps,
}: ProjectProps) {
    return (
        <>
            <div className={styles.projectContainer}>
                <div className={styles.projectGrid}>
                    <div className={styles.projectInfoContainer}>
                        <h1>{name}</h1>
                        <h3>{tagline}</h3>
                        <p className={styles.projectInfo}>{description}</p>
                        {href && (
                            <Link
                                href={href}
                                target="_blank"
                                className={styles.behance}
                            >
                                <i className="fa-brands fa-square-behance"></i>
                            </Link>
                        )}
                    </div>
                    <div className={styles.projectImage}>
                        <Image
                            src={imgSrc}
                            fill
                            style={{ objectFit: "cover", borderRadius: "10px" }}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className={styles.processContainer}>
                <h2>The Research and Design Process</h2>
                {steps && (
                    <ul style={{ width: "100%" }}>
                        {steps.map((step) => (
                            <li key={step.heading} className={styles.step}>
                                <div className={styles.stepInfo}>
                                    {step.subheading && (
                                        <div className={styles.stepSubheading}>
                                            {step.subheading}
                                        </div>
                                    )}
                                    <div className={styles.stepHeading}>
                                        {step.heading}
                                    </div>
                                    <div className={styles.stepDescription}>
                                        {step.description}
                                    </div>
                                </div>
                                <div
                                    className={styles.stepImage}
                                    style={{
                                        position: "relative",
                                        minHeight: "400px",
                                        maxHeight: "400px",
                                    }}
                                >
                                    {step.imgSrc && (
                                        <Image src={step.imgSrc} fill alt="" />
                                    )}
                                    {step.videoSrc && (
                                        <video controls>
                                            <source src={step.videoSrc} />
                                        </video>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
