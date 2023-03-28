import styles from "@/styles/hobbies.module.css";
import { Card } from "./card";
import { Cards } from "./cards";

const hobbies = [
    {
        imgSrc: "/images/film-photography.png",
        heading: "Film Photography",
        description:
            "I use a 1970s Cosina for 35mm film photography. I love developing my own work in the darkroom as it requires a very methodical approach. I run an instagram page called @StreetPawDography.",
    },
    {
        imgSrc: "/images/illustration.png",
        heading: "Illustration and Design",
        description:
            "I love working in closed loop and sustainable ways. I create zero waste patterns and garments. I am always trying to create new looks to add to my wardrobe.",
    },
    {
        imgSrc: "/images/musical-theatre.png",
        heading: "Musical Theatre",
        description:
            "A huge fan of musical theatre, I love to help out amateur dramatic groups with their costume. As well as occasionally perform myself and dance it out on stage as part of the ensemble.",
    },
];

export default function Hobbies() {
    return (
        <div className={styles.hobbiesContainer}>
            <h2>When I Am Not Designing</h2>
            <Cards>
                {hobbies.map((props) => {
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
