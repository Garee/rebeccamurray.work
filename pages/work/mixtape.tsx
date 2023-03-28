import Footer from "@/components/footer";
import { Layout } from "@/components/layout";
import { Project } from "@/components/project";

export default function MixTape() {
    return (
        <Layout title="Rebecca Murray | MixTape">
            <Project
                name="MixTape"
                tagline="Hybrid Application"
                description="UI design for an 80s music player app with a retro aesthetic. Combining classic festures with fun easter eggs."
                imgSrc="/images/mixtape/mixtape-app.png"
                href="https://www.behance.net/gallery/154772527/MixTape-80s-Music-App-Case-Study"
                steps={[
                    {
                        heading: "Design Process",
                        description:
                            "Creating mixtape involved the six illustrated essential steps. Starting of with competitor research and SWAT analysis. This helped to pinpoint strengths and weaknesses across the board. I took note of common user patterns and cross overs among features, as well as extracting pain points to be avoided.",
                        imgSrc: "/images/mixtape/mixtape-design-process.png",
                    },
                    {
                        heading: "User Flows",
                        description:
                            "From my analysis of my research, I indentified key steps in the user journey and designed my user flow. I did this first as a quick sketch before digitizing this in Whimsical. This clarified the screens on my users journey but also differing steps and options that links screens together for a seamless experience.",
                        imgSrc: "/images/mixtape/mixtape-user-flows.png",
                    },
                    {
                        heading: "Low-Fidelity Wireframes",
                        description:
                            "Sketching from my user flow, I focused on white space while considering design principles. This was so I could design an interface that felt recognisable and easy to use. Doing this early allowed me to eliminate any unecessary screens and avoid wasting time developing them.",
                        imgSrc: "/images/mixtape/mixtape-low-fid.png",
                    },
                    {
                        heading: "Digitising Low-Fidelity Sketches",
                        description:
                            "After my inital sketches, I used balsamiq to digitise and rapidly create varying screen bases. Using this method allowed me to, at a glance, ensure elements sat together relatively. I was able to assign placeholders that I could follow to ensure a clear understanding of how users could navigate the application.",
                        imgSrc: "/images/mixtape/mixtape-digitising.png",
                    },
                    {
                        heading: "Communication",
                        description:
                            "An essential part of the design process is to ensure smooth communication across a team. I created mid-fidelity screens on AdobeXD that I further annotated once I had aligned my elements using grids. This ensures no designs are lost in translation when being implemented.",
                        imgSrc: "/images/mixtape/mixtape-communication.png",
                    },
                    {
                        heading: "Iconography",
                        description:
                            "MixTape required a custom icon set. I designed this to help convey our keywords with a focus on retro and fun. I used repetitive lines to create a neon light aesthetic in the highlighted icons, leaning into this retro 80's inspiration.",
                        imgSrc: "/images/mixtape/mixtape-icons.png",
                    },
                    {
                        heading: "Showcasing Key Features",
                        description:
                            "I sectioned off part of the high fidelity screens in order to highlight key features designed throughout the application. This helps communicate the benefits of the application to users in more detail.",
                        imgSrc: "/images/mixtape/mixtape-showcase.png",
                    },
                    {
                        heading: "Easter Eggs",
                        description:
                            "Once core functionalities were established in the design, I wanted to add in another feature to set this application apart from others on the market. MixTape includes a hidden easter egg on it's player, showing 80's music lovers where their favourite tunes have featured in films. This gives them more opportunity to explore their interest in media from the 80s.",
                        imgSrc: "/images/mixtape/mixtape-easter-eggs.png",
                    },
                    {
                        heading: "Additional Widget Design",
                        description:
                            "A common expectation of music players now is the ease of use outwith the application. As a result, I felt it was essential to factor this into the design. I designed version for both light and dark mode allowing the user to fully customise their own experience and use the application with ease on the go.",
                        imgSrc: "/images/mixtape/mixtape-widgets.png",
                    },
                    {
                        heading: "Mockups",
                        description:
                            "My final mockup designs showcased how the app will look and feel on the go in settings I would expect users to be in. Additionally, some mockups show the full extent of the variety of screens and throough design that has been developed for MixTape.",
                        imgSrc: "/images/mixtape/mixtape-mockups.png",
                    },
                ]}
            />
            <Footer />
        </Layout>
    );
}
