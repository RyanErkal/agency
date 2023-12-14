import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Banner({ section, title, subtitle }) {
    return (
        <div className="h-screen bg-slate-800 text-slate-100">
            <div className="flex flex-col items-center justify-center h-full px-32">
                <motion.div className="flex flex-col justify-center items-center w-full max-w-7xl px-32 py-16 bg-purple-200 text-slate-900 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={spring}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0.5 }
                    }}>
                    {section && <h1 className="text-lg font-bold mb-6">{section}</h1>}
                    <h1 className="text-4xl font-bold playfair text-center mb-6">{title}</h1>
                    <p className="text-lg">{subtitle}</p>
                    <a href="/contact" className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-xl px-6 py-2 rounded-full mt-6 hover:bg-slate-900 hover:text-slate-100 transition ease-in-out duration-300">Talk to us</a>
                </motion.div>
            </div>
        </div>
    );
}
