import userExperience from "@/public/images/user-experience.png";
import wireframing from "@/public/images/wireframing.png";
import styles from "@/styles/skills.module.css";
import Panel from "./panel";

const skills = [
    {
        animation: true,
        type: "Frontend Development For Designers",
        heading: "Animation (HTML, CSS, and Adobe Illustrator)",
        description:
            "I recently completed Frontend Development for Designers as part of my UI Design course with CareerFoundry. I can create neat animations to enhance the user experience such as the adapted SVG to the left. Isolating all the individual layers to ensure easy control and animations of shapes.",
    },
    {
        imgSrc: wireframing,
        type: "Wireframing",
        heading: "Sketching and Digitising",
        description:
            "I create my wireframes both by hand and digitally, depending on the scope or need of the project. I believe wireframes are essential for communicating complex ideas and can establish a structure and potential flow for possible design solutions. Sketching allows for quick ideations, finding optimum solutions for user focused projects. Digitising allows for minor changes to be adapted quickly when better alternatives are identified. I love using Figma for my mid and high fidelity screens, but balsamiq is also a fast alternative.",
        rtl: true,
    },
    {
        imgSrc: userExperience,
        type: "User Experience",
        heading: "Research, Interviews, Personas and Flows",
        description:
            "Beautiful design can draw a user in, but unless it really works, there won’t be any retention. Research is an essential part of my process, whether it’s comparing SWAT analysis of my current market competitors or conducting user interviews to identify current paint points and market gaps. I love this part of the process as it allows for designs with users at the centre, with all needs considered and catered for, ensuring smooth navigation and enjoyable experiences.",
    },
];

export default function Skills() {
    return (
        <div className={styles.skillsContainer}>
            <h2>Skills and Tools Overview</h2>
            <ul>
                {skills.map((props) => {
                    return <Panel key={props.heading} {...props} />;
                })}
            </ul>
        </div>
    );
}
