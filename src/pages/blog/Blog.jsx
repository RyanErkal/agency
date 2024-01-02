import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import ScrollProgress from "../../components/ScrollProgress";
import Footer from "../../components/Footer";

export default function Blog() {
    return (
        <>
            <Nav />
            <ScrollProgress />
            <Outlet />
            <Footer />
        </>
    );
}