import Nav from '../../components/Nav';
import ScrollProgress from '../../components/ScrollProgress';
import Banner from '../../components/Banner';
import TextSection from '../../components/TextSection';
import BusAiPillars from './components/BusAIPillars';
import BusAiProcess from './components/BusAIProcess';
import BusAiPackages from './components/BusAIPackages';
import BusAITools from './components/BusAITools';
import BusAiFAQs from './components/BusAIFAQs';
import Mailing from '../../components/Mailing';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function LeadGen() {
    return (
        <div className="">
            <Nav />
            <ScrollProgress />
            <Banner section={"Business AI"} title={"Embrace the future of business."} subtitle={"Automate tasks to enhance efficiency and minimize erroers."} />
            <TextSection title={"The problem"} body={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati animi possimus sunt ipsa rem incidunt earum eveniet, inventore ex est repudiandae doloribus libero nesciunt in. Modi voluptate quia sapiente quisquam."} img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} />
            <TextSection title={"The solution"} body={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati animi possimus sunt ipsa rem incidunt earum eveniet, inventore ex est repudiandae doloribus libero nesciunt in. Modi voluptate quia sapiente quisquam."} img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} right />
            <BusAiPillars />
            <BusAiProcess />
            <BusAiPackages />
            <BusAITools />
            <BusAiFAQs />
            <Mailing />
            <Contact />
            <Footer />
        </div>
    );
}

