import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function ProjectBanner() {
    return (
        <div className="h-screen bg-slate-800 text-slate-100">
            <div className="flex items-center justify-center h-full px-32">
                <div className="grid grid-cols1 xl:grid-cols-2 gap-8 w-full max-w-7xl">


                    <motion.div className="flex flex-col justify-center items-center px-32 py-16 bg-purple-200 text-slate-900 rounded-xl"
                        initial={{ y: "50%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={spring}>
                        <h1 className="text-4xl font-bold playfair text-center mb-6">PROJECT NAME</h1>
                        <p className="text-lg">SUBTITLE</p>

                    </motion.div>

                    <motion.div className="flex flex-col justify-center items-center px-32 py-16 bg-purple-200 text-slate-900 rounded-xl"
                        initial={{ y: "80%", opacity: 0 }}
                        whileInView={{ y: "0%", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={spring}>
                        <h1 className="text-4xl font-bold playfair text-center mb-6">PROJECT IMAGE</h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}