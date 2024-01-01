import Nav from "../../components/Nav";
import ScrollProgress from "../../components/ScrollProgress";
import Banner from "../../components/Banner";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";
import Mailing from "../../components/Mailing";
import Footer from "../../components/Footer";


export default function Projects() {
    return (
        <>
            <Nav />
            <ScrollProgress />
            <Banner section={"Our projects"} title={"Some of our latest work"} subtitle={"Unique problems require unique solutions"} />
            <Experience />
            <Mailing />
            <Contact />
            <Footer />
        </>
    );
}