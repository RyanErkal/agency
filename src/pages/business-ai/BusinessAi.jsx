import Nav from '../../components/Nav';
import ScrollProgress from '../../components/ScrollProgress';
import Banner from '../../components/Banner';
import TextSection from '../../components/TextSection';
import BusAiPillars from './components/BusAiPillars';
import BusAiProcess from './components/BusAiProcess';
import BusAiPackages from './components/BusAiPackages';
import BusAITools from './components/BusAITools';
import BusAiFAQs from './components/BusAiFAQs';
import Mailing from '../../components/Mailing';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function LeadGen() {
    return (
        <div className="">
            <Nav />
            <ScrollProgress />
            <Banner section={"Business AI"} title={"Lead Generation"} subtitle={"We help you find your customers, and your customers find you."} />
            <TextSection title={"The solution"} body={"We build websites that are designed to convert. Our team of designers, developers, and marketers work together to create a website that is not only beautiful, but also optimized for conversions. We build websites that are marketing-ready, so you can start driving traffic and generating leads from day one."} img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} />
            <TextSection title={"The solution"} body={"We build websites that are designed to convert. Our team of designers, developers, and marketers work together to create a website that is not only beautiful, but also optimized for conversions. We build websites that are marketing-ready, so you can start driving traffic and generating leads from day one."} img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} right />
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