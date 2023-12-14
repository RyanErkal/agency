import Card from "../../../components/Card";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Services() {
    return (
        <div id="services" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 p-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Our 3 pillars of success</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 max-w-7xl">
                <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Card
                        title="Wow Factor"
                        description="We design visually stunning websites that capture attention and leave a lasting impression."
                    ><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M418-340q24 24 62 23.5t56-27.5l224-336-336 224q-27 18-28.5 55t22.5 61Zm62-460q59 0 113.5 16.5T696-734l-76 48q-33-17-68.5-25.5T480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-8.5-70T766-540l48-76q30 47 47.5 100T880-406q1 57-13 109t-41 99q-11 18-30 28t-40 10H204q-21 0-40-10t-30-28q-26-45-40-95.5T80-400q0-83 31.5-155.5t86-127Q252-737 325-768.5T480-800Zm7 313Z" /></svg>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ y: "70%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Card
                        title="Lead Generating."
                        description="We focus on creating websites that not only attract visitors but also convert them into customers."
                    ><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Card
                        title="Done For You."
                        description="We take care of every aspect of the website development process, from design to content creation to hosting."
                    ><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M754-81q-8 0-15-2.5T726-92L522-296q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l85-85q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l204 204q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13l-85 85q-6 6-13 8.5T754-81Zm0-95 29-29-147-147-29 29 147 147ZM205-80q-8 0-15.5-3T176-92l-84-84q-6-6-9-13.5T80-205q0-8 3-15t9-13l212-212h85l34-34-165-165h-57L80-765l113-113 121 121v57l165 165 116-116-43-43 56-56H495l-28-28 142-142 28 28v113l56-56 142 142q17 17 26 38.5t9 45.5q0 24-9 46t-26 39l-85-85-56 56-42-42-207 207v84L233-92q-6 6-13 9t-15 3Zm0-96 170-170v-29h-29L176-205l29 29Zm0 0-29-29 15 14 14 15Zm549 0 29-29-29 29Z" /></svg>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
