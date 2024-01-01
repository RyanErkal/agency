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
        <div id="mywork" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Our Work</h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
                <motion.div
                    initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Game Changer" name="Joe Gann, Founder of Alliance Coaching" description="Working with this team was a game-changer for our online presence. They didn't just design a website; they crafted an engaging digital experience that has significantly boosted our customer engagement and sales. Their attention to detail and innovative approach sets them apart." />
                </motion.div>
                <motion.div
                    initial={{ y: "90%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Exceeded Expectations" name="Cian O'Brien, Founder of Team CBC" description="This agency played a crucial role in the expansion of our online services. They didn't just meet our expectations; they exceeded them by providing innovative solutions and proactive support. Their understanding of web development trends and customer-focused approach has been a major factor in our success." />
                </motion.div>
                <motion.div
                    initial={{ y: "60%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Engagement Skyrocketed" name="Daragh Allen, Founder of Resilient Intent" description="The creativity and technical expertise of this web development agency are second to none. They delivered a stunning website that not only looks great but also performs exceptionally in terms of speed and SEO. Our web traffic and customer engagement have skyrocketed since the launch." />
                </motion.div>
                <motion.div
                    initial={{ y: "90%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <ExperienceCard title="Outstanding" name="Darragh MacNamara, Founder of Ignite Coaching" description="This web development agency is a true partner in our business growth. They re-engineered our old website into a modern, responsive, and highly effective tool for our marketing efforts. Their attention to user experience and SEO has dramatically increased our web traffic and lead generation." />
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
