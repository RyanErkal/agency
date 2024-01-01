import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
    const currentPathname = useLocation().pathname;

    return (
        <div className="absolute w-full flex justify-center items-center bg-slate-800">
            <div className="w-full max-w-7xl text-slate-100 flex justify-between items-center p-8 px-8 xl:px-16">
                <h1 className="text-4xl playfair"><strong className="playfair-extrabold">RE</strong>solutions</h1>

                {currentPathname !== "/" ? (
                    <div className="gap-2 hidden xl:flex items-center">
                        <Link to="/#services" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Services</Link>
                        <Link to="/#mywork" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">My Work</Link>
                        <Link to="/#testimonials" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Testimonials</Link>
                        <Link to="/#blog" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Blog</Link>
                        <Link to="/#contact" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Contact</Link>
                    </div>
                ) : (
                    <div className="gap-2 hidden xl:flex items-center">
                        <AnchorLink href="#services" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Services</AnchorLink>
                        <AnchorLink href="#mywork" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">My Work</AnchorLink>
                        <AnchorLink href="#testimonials" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Testimonials</AnchorLink>
                        <AnchorLink href="#blog" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Blog</AnchorLink>
                        <AnchorLink href="#contact" className="border-b-2 border-slate-800 hover:border-purple-200 px-4 py-1 transition ease-in-out duration-300">Contact</AnchorLink>
                    </div>
                )}
            </div>
        </div>
    );
}