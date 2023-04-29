import AA1Lrg from "@/public/images/AA1Lrg.png";
import HH1Lrg from "@/public/images/HH1Lrg.png";
import SH1Lrg from "@/public/images/SH1Lrg.png";
import styles from "@/styles/case-studies.module.css";
import { StaticImageData } from "next/image";
import { Card } from "./card";
import { Cards } from "./cards";

const defaultCaseStudies = [
    {
        imgSrc: HH1Lrg,
        heading: "HollyHock",
        subheading: "Hybrid Mobile Application",
        href: "/work/hollyhock",
    },
    {
        imgSrc: AA1Lrg,
        heading: "AccessAtlas",
        subheading: "Responsive Web Application",
        href: "/work/accessatlas",
    },
    {
        imgSrc: SH1Lrg,
        heading: "Shoogle",
        subheading: "iOS Native Application",
        href: "/work/shoogle",
    },
];

export interface CaseStudiesProps {
    caseStudies?: Array<{
        imgSrc: StaticImageData;
        heading: string;
        subheading: string;
    }>;
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
    return (
        <div className={styles.caseStudiesContainer}>
            <h2>Featured Case Studies</h2>
            <Cards>
                {(caseStudies || defaultCaseStudies).map((props) => {
                    return (
                        <li key={props.heading}>
                            <Card {...props} />
                        </li>
                    );
                })}
            </Cards>
        </div>
    );
}
