import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useLocation } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function Nav() {
    const currentPathname = useLocation().pathname;

    return (
        <div className="absolute w-full flex justify-center items-center bg-slate-800">
            <div className="w-full max-w-7xl text-slate-100 flex justify-between items-center p-8 px-16">
                <h1 className="text-4xl playfair"><strong className="playfair-extrabold">Obi</strong>Solutions</h1>

                {currentPathname !== "/" ? (
                    <div className="gap-2 hidden xl:flex">
                        <Link to="/#services" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900  px-4 py-2 rounded-full transition ease-in-out duration-300">Services</Link>
                        <Link to="/#mywork" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">My Work</Link>
                        <Link to="/#testimonials" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">Testimonials</Link>
                        <Link to="/#blog" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">Blog</Link>
                        <Link to="/#contact" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">Contact</Link>
                    </div>
                ) : (
                    <div className="gap-2 hidden xl:flex">
                        <AnchorLink href="#services" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900  px-4 py-2 rounded-full transition ease-in-out duration-300">Services</AnchorLink>
                        <AnchorLink href="#mywork" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">My Work</AnchorLink>
                        <AnchorLink href="#testimonials" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">Testimonials</AnchorLink>
                        <AnchorLink href="#blog" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">Blog</AnchorLink>
                        <AnchorLink href="#contact" className="border-2 hover:border-purple-200 hover:bg-purple-200 hover:text-slate-900 px-4 py-2 rounded-full transition ease-in-out duration-300">Contact</AnchorLink>
                    </div>
                )}
            </div>
        </div>
    );
}