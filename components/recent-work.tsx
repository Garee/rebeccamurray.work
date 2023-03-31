import styles from "@/styles/recent-work.module.css";
import Panel from "./panel";

const snapshots = [
    {
        type: "Daily UI Design Challenge",
        imgSrc: "/images/LG1Lrg.png",
        heading: "iOS iPad LittleGiraffe Game",
        description:
            "Daily UI design challenge day , design a calculator. I chose to take this prompt and design a children’s game UI formed of calculations that can be used by toddlers aged 2-5, using drag and drop design patterns as well as gamified rewards. Inspired by Cbeebies Playtime Island game range.",
        rtl: true,
        href: "https://dribbble.com/shots/20408562-DailyUI-Challenge-Day-4",
    },
    {
        type: "Daily UI Design Challenge",
        imgSrc: "/images/BB1Lrg.png",
        heading: "BookBytes Hybrid Mobile App",
        description:
            "Daily UI design challenge day 6 and 7, design a profile page and a settings page. I used this prompt to design an iOS app that community libraries could use to help their users manage their accounts. Using progress bars and tabs to minimise cognitive load as well as bright highlight tones to accentuate call to action markers/buttons for users.",
        href: "https://dribbble.com/shots/20446562-DailyUI-Challenge-Day-7",
    },
    {
        type: "Daily UI Design Challenge",
        imgSrc: "/images/MP2Lrg.png",
        heading: "iOS Apple Watch Music Player App",
        description:
            "Daily UI design challenge day 9, design a music player. Designing a minimalist music player for an apple watch allowed me to implement neumorphism as a trend led feature. This trend is great for a simple music player as it keeps the app feeling soft and light, with a focus on mindfulness. With this I could utilise the apple watch face features. These effects were inspired by the early music players visual effects that would sync to the users current song.",
        rtl: true,
        href: "https://dribbble.com/shots/20527674-DailyUI-Challenge-Day-9",
    },
];

export default function RecentWork() {
    return (
        <div className={styles.recentWorkContainer}>
            <h2>Snapshots of Recent Work</h2>
            <ul>
                {snapshots.map((props) => {
                    return <Panel key={props.heading} {...props} />;
                })}
            </ul>
        </div>
    );
}
