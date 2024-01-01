import Card from "../../../components/Card";
import { ROI, Group, Hub } from "../../../svgs/svgs";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Services() {
    return (
        <div id="services" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Our 3 pillars of success</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 max-w-7xl">
                <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Card
                        title="ROI Focused"
                        description="Our lead generation services are focused on delivering tangible results. We track every penny spent and optimize campaigns for maximum return on investment."
                    ><ROI size={100} />
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ y: "70%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Card
                        title="Instant Leads"
                        description="Time is money, and we understand that. Our lead generation strategies are designed to deliver leads in real-time, so you can start closing deals immediately."
                    ><Group size={100} />
                    </Card>
                </motion.div>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Card
                        title="Artificial Intelligence"
                        description="Our AI technology elevates your business to new heights. With cutting-edge automation and machine learning algorithms, you'll see a new level of efficiency and profitability."
                    ><Hub size={100} />
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
