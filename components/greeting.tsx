import MP1Lrg from "@/public/images/MP1Lrg.png";
import styles from "@/styles/greeting.module.css";
import Image from "next/image";

export default function Greeting() {
    return (
        <div className={styles.greetingContainer}>
            <div className={styles.greetingGrid}>
                <div className={styles.greetingMessageContainer}>
                    <h1>Hey there!</h1>
                    <h3>
                        I’m Rebecca and I am a UX/UI Designer based in Glasgow
                    </h3>
                    <div className={styles.greetingMessage}>
                        I have a background in Fashion Design and Retail
                        Management and over 6 years experience working with a
                        range of products. I am great at developing branding and
                        have a track record working with generational insights,
                        collecting and considering trend and consumer led data,
                        and with these skills, I create design that truly
                        reflects the business needs.
                    </div>
                    <div className={styles.greetingMessage}>
                        I love to focus on great design that aids the needs of
                        others and impacts not just peoples lives, but also the
                        climate positively.
                    </div>
                </div>
                <div className={styles.greetingImage}>
                    <Image
                        src={MP1Lrg}
                        fill
                        style={{ marginLeft: "80px", objectFit: "contain" }}
                        alt="Wave Design on Apple Watch"
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    );
}
