import Footer from "@/components/footer";
import { Layout } from "@/components/layout";
import { Project } from "@/components/project";
import app from "@/public/images/hollyhock/hollyhock-app.png";
import branding from "@/public/images/hollyhock/hollyhock-branding.png";
import design from "@/public/images/hollyhock/hollyhock-design.png";
import mockups from "@/public/images/hollyhock/hollyhock-mockups.png";
import research from "@/public/images/hollyhock/hollyhock-research.png";
import userTesting from "@/public/images/hollyhock/hollyhock-user-testing.png";
import wireframes from "@/public/images/hollyhock/hollyhock-wireframes.png";

export default function Hollyhock() {
    return (
        <Layout title="Rebecca Murray | HollyHock">
            <Project
                name="HollyHock"
                tagline="Hybrid Mobile Application"
                description="Money saving app, aimed towards a younger market (18 to 30 year olds) with design for delight and play at it's core."
                imgSrc={app}
                href="https://www.behance.net/gallery/154808069/HollyHock-Branding-and-UI-Case-Study"
                steps={[
                    {
                        heading: "Research",
                        description:
                            "Competitive analysis of the current market, considering money saving apps, banking apps, and apps that faciliatate emotional responses. ",
                        imgSrc: research,
                    },
                    {
                        heading: "Branding",
                        description:
                            "Development of branding after deciding on core messages and user stories. Considering colour, typography, copy, key words, brand ethos and additional illustrations.",
                        imgSrc: branding,
                    },
                    {
                        heading: "Wireframes",
                        description:
                            "Building up wireframes into mid-fidelity for user testing before confirming high fidelity in greyscale to ensure a smooth user journey is prioritised first over design look.",
                        imgSrc: wireframes,
                    },
                    {
                        heading: "User Testing",
                        description:
                            "User story tests set in tasks followed by surveys, plus multiple A/B tests to establish a user preference over cosmetic issues identified in surveys.",
                        imgSrc: userTesting,
                    },
                    {
                        heading: "Design",
                        description:
                            "User story tests set in tasks followed by surveys, plus multiple A/B tests to establish a user preference over cosmetic issues identified in surveys.",
                        imgSrc: design,
                    },
                    {
                        heading: "Mockups",
                        description:
                            "Final mockup designs to illustrate the application in action alongside marketing copy.",
                        imgSrc: mockups,
                    },
                ]}
            />
            <Footer />
        </Layout>
    );
}
