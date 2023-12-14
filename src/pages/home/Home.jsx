import Nav from '../../components/Nav';
import Banner from '../../components/Banner';
import Services from '../../components/Services';
import Experience from '../../components/Experience';
import Testimonials from '../../components/Testimonials';
import About from '../../components/About';
import Blog from '../../components/Blog';
import Mailing from '../../components/Mailing';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import ScrollProgress from '../../components/ScrollProgress';
import '../../App.css';

export default function Home() {

    return (
        <div className="bg-slate-800">
            <ScrollProgress />
            <Nav />
            <Banner title={"Your digital scaling journey starts here."} subtitle={"Where innovation meets impact, and ambition transforms into achievement."} />
            <Services />
            <Experience />
            <Testimonials />
            <About />
            <Blog />
            <Mailing />
            <Contact />
            <Footer />
        </div>
    );
}
