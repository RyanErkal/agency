import Nav from "../../components/Nav";
import ScrollProgress from "../../components/ScrollProgress";
import ProjectBanner from "./components/ProjectBanner";
import ProjectNav from "./components/ProjectNav";
import { Outlet } from "react-router-dom";
import Mailing from "../../components/Mailing";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

export default function Project() {
    return (
        <>
            <Nav />
            <ScrollProgress />
            <ProjectBanner />
            <ProjectNav />
            <Outlet />
            <Mailing />
            <Contact />
            <Footer />
        </>
    );
}