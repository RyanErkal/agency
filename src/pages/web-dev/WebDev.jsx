import Nav from '../../components/Nav';
import ScrollProgress from '../../components/ScrollProgress';
import Banner from '../../components/Banner';
import TextSection from '../../components/TextSection';
import Pillars from './components/Pillars';
import Process from './components/Process';
import Experience from '../../components/Experience';
import Testimonials from '../../components/Testimonials';
import Tools from './components/Tools';
import FAQs from '../../components/FAQs';
import Mailing from '../../components/Mailing';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function LeadGen() {
    return (
        <div className="overflow-hidden bg-slate-800">
            <Nav />
            <ScrollProgress />
            <Banner section={"Web Development"} title={"Digital solutions that elevate your brand and drive revenues."} subtitle={"Crafting experiences that convert."} />

            <TextSection title={"The problem"} body={"Over the past four years, we've witnessed an all-too-common pitfall in the web development world - companies building websites without considering the vital element of ROI. Your website is not just a digital brochure, it's a powerful engine that drives growth and fuels success. That's why, at A2B Solutions, we prioritize marketing-readiness and ROI-focus for all of our websites."} img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} />

            <TextSection title={"The solution"} body={"We build websites that are designed to convert. Our team of designers, developers, and marketers work together to create a website that is not only beautiful, but also optimized for conversions. We build websites that are marketing-ready, so you can start driving traffic and generating leads from day one."} right img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"} />

            <Pillars />
            <Process />

            <TextSection title={"Custom Development"} body={"We follow a proven process to ensure that your website is built to convert. We start by understanding your business and your goals, then we design a website that is optimized for conversions. We then build the website using the latest technologies and best practices. Finally, we launch the website and start driving traffic to it."} right img={"https://assets-global.website-files.com/64dd3cfafc1dc4d850ac4214/64dd3cfafc1dc4d850ac431a_Asset%20111%201.webp"}>
                <div className="w-full flex items-center justify-end">
                    <a href="/contact" className="bg-purple-200 text-slate-900 border-2 font-bold text-md px-8 py-4 rounded-full hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300 w-fit">Talk to us</a>
                </div>
            </TextSection>

            <Experience />
            <Testimonials />
            <Tools />
            <FAQs />
            <Mailing />
            <Contact />
            <Footer />
        </div>
    );
}