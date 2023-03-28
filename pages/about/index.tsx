import { AboutMe } from "@/components/about-me";
import Footer from "@/components/footer";
import Hobbies from "@/components/hobbies";
import { Layout } from "@/components/layout";
import Skills from "@/components/skills";

export default function About() {
    return (
        <Layout title="Rebecca Murray | About">
            <AboutMe />
            <Hobbies />
            <Skills />
            <Footer />
        </Layout>
    );
}
