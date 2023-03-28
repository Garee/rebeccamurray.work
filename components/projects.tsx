import styles from "@/styles/projects.module.css";
import CaseStudies from "./case-studies";

const caseStudies = [
    {
        imgSrc: "/images/HH1Lrg.png",
        heading: "HollyHock",
        subheading: "Hybrid Mobile Application",
        description:
            "Money saving app, aimed towards a younger market with design for delight and play at it's core.",
        href: "/work/hollyhock",
    },
    {
        imgSrc: "/images/AA1Lrg.png",
        heading: "Access Atlas",
        subheading: "Responsive Web Application",
        description:
            "Location based maps application with a focus on accessibility for all users.",
        href: "/work/accessatlas",
    },
    {
        imgSrc: "/images/SH1Lrg.png",
        heading: "Shoogle",
        subheading: "iOS Native Application",
        description:
            "Playful messaging app with a focus on the user experience through animation and iOS design guidelines.",
        href: "/work/shoogle",
    },
    {
        imgSrc: "/images/dancein.png",
        heading: "Dance'In",
        subheading: "iOS and Android App",
        description:
            "Dance booking application with social and sharing elements to benefit both users and dance studios. Two versions designed, for iOS and Android. ",
        href: "/work/dancein",
    },
    {
        imgSrc: "/images/swiftnote.png",
        heading: "SwiftNote",
        subheading: "iOS App",
        description:
            "Note taking app using lean design principles and designed to iOS design guidelines.",
        href: "/work/swiftnote",
    },
    {
        imgSrc: "/images/mixtape.png",
        heading: "Mix Tape",
        subheading: "Hybrid App",
        description:
            "UI design for an 80s music player app with a retro aesthetic. Combining classic festures with fun easter eggs.",
        href: "/work/mixtape",
    },
];

export function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <CaseStudies caseStudies={caseStudies} />
        </div>
    );
}
