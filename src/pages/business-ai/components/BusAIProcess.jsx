import Card from "../../../components/Card";
import { Onboard, SignPost, Draw, Rocket, Optimize, Analytics } from "../../../svgs/svgs";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function LeadGenProcess() {
    return (
        <div id="services" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 p-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Our 6 step process</h1>
            <h2 className="mb-6">Onboard, Plan, Create, Launch, Optimize, Report</h2>
            <div className="grid grid-cols-2 gap-x-16 gap-y-32 max-w-7xl">
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2 row-start-1">
                    <Card title={"Onboard"} description={"In the Discover phase, we delve into understanding your unique goals, audience, and market landscape. Through in-depth research and consultation, we identify key insights that lay the foundation for a successful web project. This phase is about uncovering the core essence of your vision and translating it into a strategic plan."} >
                        <Onboard size={100} />
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2 row-start-2">
                    <Card title={"Plan"} description={"The Plan phase takes the insights from the Discovery phase and transforms them into a comprehensive roadmap. We outline the project scope, objectives, timelines, and resources required. This phase ensures alignment between your goals and our execution strategy, setting the stage for a smooth and efficient development journey."} >
                        <SignPost size={100} />
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Create."} description={"In the Design phase, creativity takes centre stage. Our design experts craft visually captivating and user-centric concepts that reflect your brand's personality. We focus on user experience, ensuring that each element of the design aligns with your objectives while offering an intuitive and engaging interface."} >
                        <Draw size={100} />
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Launch"} description={"The Build phase is where the technical magic happens. Our skilled developers bring the design concepts to life, coding and implementing the functionalities that make your website function seamlessly. Rigorous testing and quality assurance are integral to this phase, ensuring that every feature operates flawlessly."} >
                        <Rocket size={100} />
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Optimize"} description={"With meticulous testing complete and your approval in hand, we move to the Deliver phase. This is the moment when your website goes live, making its debut on the digital stage. Our team ensures a smooth transition, providing training and support to empower you to manage your new platform confidently."} >
                        <Optimize size={100} />
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Report"} description={"As your online presence gains traction, the Scale phase comes into play. We monitor performance, gather user feedback, and analyse data to identify opportunities for enhancement. Whether it's optimizing for increased traffic, integrating new features, or adapting to evolving trends, we work alongside you to ensure your website evolves in alignment with your business goals."} >
                        <Analytics size={100} />
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
