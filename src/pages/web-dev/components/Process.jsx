import Card from "../../../components/Card";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Services() {
    return (
        <div id="services" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Our 6 step process</h1>
            <h2 className="mb-6 text-center">Discover, plan, design, build, deliver, scale</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-x-16 xl:gap-y-32 max-w-7xl">
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="xl:row-span-2 xl:row-start-1">
                    <Card title={"Discover"} description={"In the Discover phase, we delve into understanding your unique goals, audience, and market landscape. Through in-depth research and consultation, we identify key insights that lay the foundation for a successful web project. This phase is about uncovering the core essence of your vision and translating it into a strategic plan."} ><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2 row-start-2">
                    <Card title={"Plan"} description={"The Plan phase takes the insights from the Discovery phase and transforms them into a comprehensive roadmap. We outline the project scope, objectives, timelines, and resources required. This phase ensures alignment between your goals and our execution strategy, setting the stage for a smooth and efficient development journey."} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" /></svg>
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Design."} description={"In the Design phase, creativity takes centre stage. Our design experts craft visually captivating and user-centric concepts that reflect your brand's personality. We focus on user experience, ensuring that each element of the design aligns with your objectives while offering an intuitive and engaging interface."} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm24-567 57 57-57-57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Zm-90-80h56l392-391-57-57-391 392v56Zm420-419-29-29 57 57-28-28Z" /></svg>
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Build"} description={"The Build phase is where the technical magic happens. Our skilled developers bring the design concepts to life, coding and implementing the functionalities that make your website function seamlessly. Rigorous testing and quality assurance are integral to this phase, ensuring that every feature operates flawlessly."} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z" /></svg>
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Deliver"} description={"With meticulous testing complete and your approval in hand, we move to the Deliver phase. This is the moment when your website goes live, making its debut on the digital stage. Our team ensures a smooth transition, providing training and support to empower you to manage your new platform confidently."} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" /></svg>
                    </Card>
                </motion.div>
                <motion.div initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}
                    className="row-span-2">
                    <Card title={"Scale"} description={"As your online presence gains traction, the Scale phase comes into play. We monitor performance, gather user feedback, and analyse data to identify opportunities for enhancement. Whether it's optimizing for increased traffic, integrating new features, or adapting to evolving trends, we work alongside you to ensure your website evolves in alignment with your business goals."} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="m136-240-56-56 296-298 160 160 208-206H640v-80h240v240h-80v-104L536-320 376-480 136-240Z" /></svg>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
