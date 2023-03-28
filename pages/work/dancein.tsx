import Footer from "@/components/footer";
import { Layout } from "@/components/layout";
import { Project } from "@/components/project";

export default function DanceIn() {
    return (
        <Layout title="Rebecca Murray | Dance'In">
            <Project
                name="Dance'In"
                tagline="iOS and Android Application"
                description="Dance booking application with social and sharing elements to benefit both users and dance studios.
Two versions designed, for iOS and Android."
                imgSrc="/images/dancein/dancein-app.png"
                href="https://www.behance.net/gallery/154807661/DanceIn-Android-and-iOS-Case-Study"
                steps={[
                    {
                        heading: "Design Process",
                        description:
                            "To develop Dance'In, first current market competitors were researched along with similar app offerings. These findings were developed into an MVP, user personas and 3 core flows. Ideas were explored through sketching and then on AdobeXD for both iOS and Android operating systems.",
                        imgSrc: "/images/dancein/dancein-design-process.png",
                    },
                    {
                        heading: "Developing User Flows",
                        description:
                            "3 main user flows were created to visualise the necessary steps for the MVP. These were then combined in a master user flow. This illustrates the full process and allowed me to pinpoint and remove any unecessary steps.",
                        imgSrc: "/images/dancein/dancein-user-flows.png",
                    },
                    {
                        heading: "Establishing Patterns and Gestures",
                        description:
                            "To ensure a smooth experience that feels familiar to all users, I considered common patterns that features in both operating systems as well as recognisable gestures. I created a key to quickly map out desired gestures. This gave me an early idea of how the app would feel to users. Doing this helped me avoid common gestures being missed which could affect the overall feel of the user experience.",
                        imgSrc: "/images/dancein/dancein-gestures.png",
                    },
                    {
                        heading: "User Testing",
                        description:
                            "After placing call outs for iOS and Android users, I had these test groups try out different scenarios. These consisted of a test script and task specific questions. This helped establish what users were liking curerntly and what might not be working for them the way they would expect it to.",
                        imgSrc: "/images/dancein/dancein-user-testing.png",
                    },
                    {
                        heading: "Designing for iOS and Android",
                        description:
                            "I analysed the outcomes with a test report. This allowed me to streamline essential changes to enhance user performance. High fidelity screens were polished post user tests. You can see clear differences between the two OS styles that enhance their individual experiences.",
                        imgSrc: "/images/dancein/dancein-designing-mobile.png",
                    },
                    {
                        heading: "Mockups",
                        description:
                            "Final mockups were designed to showcase the different features of the application, with both iOS and Android side by to showcase the differences. The final mockup includes how this application could be used with a smart watch.",
                        imgSrc: "/images/dancein/dancein-mockups.png",
                    },
                ]}
            />
            <Footer />
        </Layout>
    );
}
