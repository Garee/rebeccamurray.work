import CaseStudies from "@/components/case-studies";
import Footer from "@/components/footer";
import Greeting from "@/components/greeting";
import { Layout } from "@/components/layout";
import RecentWork from "@/components/recent-work";

export default function Home() {
    return (
        <Layout title="Rebecca Murray | UI/UX Designer">
            <Greeting />
            <CaseStudies />
            <RecentWork />
            <Footer />
        </Layout>
    );
}
