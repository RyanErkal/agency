import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 p-32 h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Contact</h1>
            <motion.div
                className="border-2 border-purple-200 text-slate-100 rounded-lg w-full p-8 max-w-7xl"
                initial={{ y: "60%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={spring}>
                <div className="flex justify-between">
                    <div>

                        <h2 className="font-bold text-xl mb-4">Get in touch</h2>
                        <h3>Fill in the form below or book a call</h3>
                    </div>
                    <button className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-md px-6 py-4 rounded-full hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                        Book a call
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <input className="bg-slate-800 text-slate-100 focus:ring-0 focus:outline-none focus:border-purple-200  border-b-2 border-slate-100 text-xl px-8 py-4 transition ease-in-out duration-300 w-full mb-4" placeholder="First Name" />
                    <input className="bg-slate-800 text-slate-100 focus:ring-0 focus:outline-none focus:border-purple-200  border-b-2 border-slate-100 text-xl px-8 py-4 transition ease-in-out duration-300 w-full mb-4" placeholder="Last Name" />
                    <input className="bg-slate-800 text-slate-100 focus:ring-0 focus:outline-none focus:border-purple-200  border-b-2 border-slate-100 text-xl px-8 py-4 transition ease-in-out duration-300 w-full mb-4" placeholder="Phone Number" />
                    <input className="bg-slate-800 text-slate-100 focus:ring-0 focus:outline-none focus:border-purple-200  border-b-2 border-slate-100 text-xl px-8 py-4 transition ease-in-out duration-300 w-full mb-4" placeholder="Email" />
                    <input className="bg-slate-800 text-slate-100 focus:ring-0 focus:outline-none focus:border-purple-200  border-b-2 border-slate-100 text-xl px-8 py-4 transition ease-in-out duration-300 w-full mb-4 col-span-2" placeholder="Your Message" />
                </div>
                <div className="w-full flex justify-center">
                    <button className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-md px-8 py-4 rounded-full hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300 mt-4">Submit</button>
                </div>
            </motion.div>
        </div>
    );
}
