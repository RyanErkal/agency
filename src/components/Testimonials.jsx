import Testimonial from "./Testimonial";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Testimonials() {
    return (
        <div id="testimonials" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 p-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Testimonials</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
                <motion.div className="xl:row-span-2 xl:row-start-1" initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Testimonial title="Business 1" description="Digital solutions that elevate your brand by driving revenue ang lead generation." />
                </motion.div>
                <motion.div className="xl:row-span-2 xl:row-start-2" initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Testimonial title="Business 1" description="Digital solutions that elevate your brand by driving revenue ang lead generation." />
                </motion.div>
                <motion.div className="xl:row-span-2" initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Testimonial title="Business 1" description="Digital solutions that elevate your brand by driving revenue ang lead generation." />
                </motion.div>
                <motion.div className="xl:row-span-2" initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Testimonial title="Business 1" description="Digital solutions that elevate your brand by driving revenue ang lead generation." />
                </motion.div>
                <motion.div className="xl:row-span-2" initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Testimonial title="Business 1" description="Digital solutions that elevate your brand by driving revenue ang lead generation." />
                </motion.div>
            </div>
        </div >
    );
}
