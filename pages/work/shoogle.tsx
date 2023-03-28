import Footer from "@/components/footer";
import { Layout } from "@/components/layout";
import { Project } from "@/components/project";

export default function Shoogle() {
    return (
        <Layout title="Rebecca Murray | Shoogle">
            <Project
                name="Shoogle"
                tagline="iOS Native Application"
                description="A playful messaging app with a focus on the user experience through animation and iOS design guidelines."
                imgSrc="/images/shoogle/shoogle-app.png"
                href="https://www.behance.net/gallery/155096059/Shoogle-iOS-Messaging-Application"
                steps={[
                    {
                        heading: "UI Elements",
                        description:
                            "The app recquired a set of easily re-usable and adaptable components. I created a UI elemtns kit to streamline the design work and save future members of the team time, for faster design iterations. Designed to be compatable with iOS devices using apple's core design guidelines.",
                        imgSrc: "/images/shoogle/shoogle-ui-elements.png",
                    },
                    {
                        heading: "Style Guides",
                        description:
                            "As a companion to the component guide, I created style guides to ensure consistency across typography, imagery, logos and any additional style elements.",
                        imgSrc: "/images/shoogle/shoogle-style-guides.png",
                    },
                    {
                        heading: "Mockups",
                        description:
                            "Collating the data from my user interviews, I created 3x user personas to represent different core users of the product. I focused on highlighting paint points to be able to overcome issues other applications are presenting on the market.",
                        imgSrc: "/images/shoogle/shoogle-mockups.png",
                    },
                    {
                        heading: "Animation",
                        description:
                            "Figma animation showcasing visual and haptic feedback.",
                        videoSrc: "/images/shoogle/shoogle-animation.mp4",
                    },
                ]}
            />
            <Footer />
        </Layout>
    );
}