import styles from "@/styles/case-studies.module.css";
import { Card } from "./card";
import { Cards } from "./cards";

const defaultCaseStudies = [
    {
        imgSrc: "/images/HH1Lrg.png",
        heading: "HollyHock",
        subheading: "Hybrid Mobile Application",
        href: "/work/hollyhock",
    },
    {
        imgSrc: "/images/AA1Lrg.png",
        heading: "Access Atlas",
        subheading: "Responsive Web Application",
        href: "/work/accessatlas",
    },
    {
        imgSrc: "/images/SH1Lrg.png",
        heading: "Shoogle",
        subheading: "iOS Native Application",
        href: "/work/shoogle",
    },
];

export interface CaseStudiesProps {
    caseStudies?: Array<{
        imgSrc: string;
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
