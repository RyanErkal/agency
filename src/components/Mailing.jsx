import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Mailing() {
    return (
        <div className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 p-32">
            <div className="max-w-7xl w-full">
                <h1 className="playfair text-4xl font-bold mb-6 w-full text-left">Join my mailing list</h1>
                <motion.div
                    className="w-full"
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <input className="bg-slate-800 text-slate-100 focus:ring-0 focus:outline-none focus:border-purple-200  border-b-2 border-slate-100 text-xl px-8 py-4 transition ease-in-out duration-300 w-full mb-4" placeholder="Enter your email" />
                    <button className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-md px-8 py-4 rounded-full hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300">Submit</button>
                </motion.div>
            </div>
        </div>
    );
}
