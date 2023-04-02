import Footer from "@/components/footer";
import { Layout } from "@/components/layout";
import { Project } from "@/components/project";
import ab from "@/public/images/accessatlas/accessatlas-ab.png";
import app from "@/public/images/accessatlas/accessatlas-app.png";
import design from "@/public/images/accessatlas/accessatlas-design.png";
import icons from "@/public/images/accessatlas/accessatlas-icons.png";
import mockups from "@/public/images/accessatlas/accessatlas-mockups.png";
import personas from "@/public/images/accessatlas/accessatlas-personas.png";
import research from "@/public/images/accessatlas/accessatlas-research.png";
import usability from "@/public/images/accessatlas/accessatlas-usability.png";
import userFlows from "@/public/images/accessatlas/accessatlas-user-flows.png";

export default function AccessAtlas() {
    return (
        <Layout title="Rebecca Murray | AccessAtlas">
            <Project
                name="AccessAtlas"
                tagline="Responsive Web Application"
                description="Location based maps application with a focus on accessibility for all users."
                imgSrc={app}
                href="https://www.behance.net/gallery/154813323/AccessAtlas-UXUI-Case-Study"
                steps={[
                    {
                        heading: "Design",
                        description:
                            "To develop AccessAtlas, I used the illustrated processes to establish a clear, connected and functional UX process as well as a rounded and cohesive UI design.",
                        imgSrc: design,
                    },
                    {
                        heading: "Research",
                        description:
                            "Conducting competitor analysis allowed me to gain a better understanding of what is currently on the market, what is popular and what their pain points are. Looking at a variety of location based applications, I was able to understand what worked well and were core necessities and where inclusive solutions might be missing.",
                        imgSrc: research,
                    },
                    {
                        heading: "User Personas",
                        description:
                            "Collating the data from my user interviews, I created 3x user personas to represent different core users of the product. I focused on highlighting paint points to be able to overcome issues other applications are presenting on the market.",
                        imgSrc: personas,
                    },
                    {
                        heading: "User Flows",
                        description:
                            "I used my user flow to create a visual journey for the user, defining an entry point and creating links between key goals. Creating this master flow provided me with an outline, withing which I was able to begin explorative sketching. Referring to this at every decisions allowed me to ensure I was both meeting the minimum product requirements and not including any unecessary steps.",
                        imgSrc: userFlows,
                    },
                    {
                        heading: "Icon Design",
                        description:
                            "AccessAtlas required me to design a full icon set with custom iconography. These needed to match branding and be consistent with user expectations. I researched competitor applications and government websites to ensure I was meeting current market standard in the UK.",
                        imgSrc: icons,
                    },
                    {
                        heading: "Usability Testing",
                        description:
                            "I conducted usability testing to help identify pain points early on in the design process. Being able to do this saved me time as I was able to find problems early and resolve them. It allowed for faster ideation when brainstorming solutions. As the example shows, in testing, users pinpointed a missed functionality which could now be added for an easier user journey.",
                        imgSrc: usability,
                    },
                    {
                        heading: "A/B Preference Testing",
                        description:
                            "I conducted user testing throughout the design process. As I was working alone and not as part of a team, this way of user preference testing gave me more insight into my users and helped avoid any bias descisions. This type of testing was particularly useful not just for visual elements, but also for user patterns.",
                        imgSrc: ab,
                    },
                    {
                        heading: "Mockups",
                        description:
                            "After creating my UI Style guide, I created mockups of screens to showcase the application on the move. I also used this showcase the responsive sizing of the web application across a variety of devices to potential users.",
                        imgSrc: mockups,
                    },
                ]}
            />
            <Footer />
        </Layout>
    );
}
