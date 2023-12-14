import ExperienceCard from "./ExperienceCard";
import AllProjects from "./AllProjects";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Experience() {
    return (
        <div id="mywork" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 p-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">My Work</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
                <motion.div
                    initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Business 2" description="Digital solutions that elevate your brand by driving revenue ang lead generation." />
                </motion.div>
                <motion.div
                    initial={{ y: "90%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Business 2" description="Digital solutions that elevate your brand by driving revenue ang lead generation." right />
                </motion.div>
                <motion.div
                    initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Business 2" description="Digital solutions that elevate your brand by driving revenue ang lead generation." />
                </motion.div>
                <motion.div
                    initial={{ y: "90%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Business 2" description="Digital solutions that elevate your brand by driving revenue ang lead generation." right />
                </motion.div>
            </div>
            <motion.div
                initial={{ y: "60%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={spring}
                className="w-full">
                <AllProjects />
            </motion.div>
        </div>
    );
}
