import Footer from "@/components/footer";
import { Layout } from "@/components/layout";
import { Project } from "@/components/project";
import app from "@/public/images/swiftnote/swiftnote-app.png";
import cleanInterfaces from "@/public/images/swiftnote/swiftnote-clean-interfaces.png";
import development from "@/public/images/swiftnote/swiftnote-development.png";
import goal from "@/public/images/swiftnote/swiftnote-goal.png";
import leanux from "@/public/images/swiftnote/swiftnote-leanux.png";
import mockups from "@/public/images/swiftnote/swiftnote-mockups.png";

export default function SwiftNote() {
    return (
        <Layout title="Rebecca Murray | Swift Note">
            <Project
                name="Swift Note"
                tagline="iOS Application"
                description="Note taking app using lean design principles and designed to iOS design guidelines."
                imgSrc={app}
                steps={[
                    {
                        heading: "Goal",
                        description:
                            "The goal was to create a note taking app with a focus on lean design. Building a clean interface with minimal requirements that put function first.",
                        imgSrc: goal,
                    },
                    {
                        heading: "Development",
                        description:
                            "To create this application, wireframes were created direct to digitisation. The brief recquired a fast mock up of the application for quick a release date. Using figma, I mocked up 5x essential screens, using the principles of functionalism, and keeping the style clean.",
                        imgSrc: development,
                    },
                    {
                        heading: "Lean UX and Functionalism",
                        description:
                            "The screens are made up of light and friendly blue tones, but colour can be adapted to suit the user. This is a simple element that allows creativity while still maintaining it's core function. The note taking screen has clear navigation and only three options within it's tool bar. It allows users to copy, change font stylings and set reminders.",
                        imgSrc: leanux,
                    },
                    {
                        heading: "Clean Interfaces",
                        description:
                            "Every feature is not cluttered with details. It has the core necessities. Lists for example, include a check option and an add option. This is simple and meets the essential needs of the user.",
                        imgSrc: cleanInterfaces,
                    },
                    {
                        heading: "Mockups",
                        description:
                            "Each of SwiftNotes core features has it's own mock-up, allowing for targeted marketing to showcase each function. These can be used in marketing material to show the application in real life settings.",
                        imgSrc: mockups,
                    },
                ]}
            />
            <Footer />
        </Layout>
    );
}
