import rebecca from "@/public/images/rebecca.png";
import styles from "@/styles/about-me.module.css";
import Image from "next/image";
import { useCallback } from "react";
import { CtaButton } from "./cta-button";

export function AboutMe() {
    const onResumeBtnClick = useCallback(() => {
        window.open("/files/rebecca-murray-ui-ux-designer.pdf", "_blank");
    }, []);

    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutGrid}>
                <div className={styles.aboutInfoContainer}>
                    <h1>About Me</h1>
                    <h3>
                        I&#39;m Rebecca (She/Her) and I am a UX/UI Designer
                        based in Glasgow
                    </h3>
                    <p className={styles.aboutInfo}>
                        Originally from the Outer Hebrides, I am a UX/UI
                        designer with a background in fashion design and retail
                        management. I have over 6 years experience working with
                        a variety of high end textile products, from kids bags
                        to wedding dresses. I recently completed the UI Design
                        course with CareerFoundry in January 2023.
                    </p>
                    <p className={styles.aboutInfo}>
                        What I value most are brands that push the boat out,
                        delivering quality products with a positive social
                        impact. I value research, which is essential to
                        delivering a smooth enjoyable user experience that is
                        functional and beautiful. Pretty and trendy designs are
                        great, but it can be rendered useless if the research is
                        missing, and it doesn’t work.
                    </p>
                    <CtaButton
                        label="Take a look at my resume"
                        className={styles.resumeButton}
                        onClick={onResumeBtnClick}
                    />
                </div>
                <div className={styles.aboutImage}>
                    <Image
                        src={rebecca}
                        fill
                        sizes=""
                        style={{ objectFit: "cover", borderRadius: "10px" }}
                        alt="Rebecca Murray"
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
}
