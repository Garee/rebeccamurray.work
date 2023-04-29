import AA1Lrg from "@/public/images/AA1Lrg.png";
import HH1Lrg from "@/public/images/HH1Lrg.png";
import SH1Lrg from "@/public/images/SH1Lrg.png";
import dancein from "@/public/images/dancein.png";
import mixtape from "@/public/images/mixtape.png";
import swiftnote from "@/public/images/swiftnote.png";
import styles from "@/styles/projects.module.css";
import CaseStudies from "./case-studies";

const caseStudies = [
    {
        imgSrc: HH1Lrg,
        heading: "HollyHock",
        subheading: "Hybrid Mobile Application",
        description:
            "Money saving app, aimed towards a younger market with design for delight and play at it's core.",
        href: "https://www.behance.net/gallery/154808069/HollyHock-Branding-and-UI-Case-Study",
    },
    {
        imgSrc: AA1Lrg,
        heading: "AccessAtlas",
        subheading: "Responsive Web Application",
        description:
            "Location based maps application with a focus on accessibility for all users.",
        href: "https://www.behance.net/gallery/154813323/AccessAtlas-UXUI-Case-Study",
    },
    {
        imgSrc: SH1Lrg,
        heading: "Shoogle",
        subheading: "iOS Native Application",
        description:
            "Playful messaging app with a focus on the user experience through animation and iOS design guidelines.",
        href: "https://www.behance.net/gallery/155096059/Shoogle-iOS-Messaging-Application",
    },
    {
        imgSrc: dancein,
        heading: "Dance'In",
        subheading: "iOS and Android App",
        description:
            "Dance booking application with social and sharing elements to benefit both users and dance studios. Two versions designed, for iOS and Android. ",
        href: "https://www.behance.net/gallery/154807661/DanceIn-Android-and-iOS-Case-Study",
    },
    {
        imgSrc: swiftnote,
        heading: "SwiftNote",
        subheading: "iOS App",
        description:
            "Note taking app using lean design principles and designed to iOS design guidelines.",
        href: "/work/swiftnote",
    },
    {
        imgSrc: mixtape,
        heading: "Mix Tape",
        subheading: "Hybrid App",
        description:
            "UI design for an 80s music player app with a retro aesthetic. Combining classic festures with fun easter eggs.",
        href: "https://www.behance.net/gallery/154772527/MixTape-80s-Music-App-Case-Study",
    },
];

export function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <CaseStudies caseStudies={caseStudies} />
        </div>
    );
}
