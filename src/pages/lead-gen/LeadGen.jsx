import Nav from '../../components/Nav';
import ScrollProgress from '../../components/ScrollProgress';
import Banner from '../../components/Banner';
import TextSection from '../../components/TextSection';
import LeadGenPillars from './components/LeadGenPillars';
import LeadGenProcess from './components/LeadGenProcess';
import LeadGenPackages from './components/LeadGenPackages';
import LeadGenExperience from './components/LeadGenExperience';
import Testimonials from '../../components/Testimonials';
import LeadGenTools from './components/LeadGenTools';
import LeadGenFAQs from './components/LeadGenFAQs';
import Mailing from '../../components/Mailing';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function LeadGen() {
    return (
        <div className="overflow-hidden">
            <Nav />
            <ScrollProgress />
            <Banner section={"Lead Generation"} title={"Cutting edge strategies that drive growth at start-up speed."} subtitle={"We help you find your customers, and your customers find you."} />

            <TextSection title={"The problem"} body={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati animi possimus sunt ipsa rem incidunt earum eveniet, inventore ex est repudiandae doloribus libero nesciunt in. Modi voluptate quia sapiente quisquam."} img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} />

            <TextSection title={"The solution"} body={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati animi possimus sunt ipsa rem incidunt earum eveniet, inventore ex est repudiandae doloribus libero nesciunt in. Modi voluptate quia sapiente quisquam."} right img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} />

            <LeadGenPillars />
            <LeadGenProcess />
            <LeadGenPackages />
            <LeadGenExperience />
            <Testimonials />
            <LeadGenTools />
            <LeadGenFAQs />
            <Mailing />
            <Contact />
            <Footer />
        </div>
    );
}