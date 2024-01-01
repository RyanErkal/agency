import Service from "./Service";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Services() {
    return (
        <div id="services" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Services</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 max-w-7xl">
                <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Service
                        title="Web Development"
                        description="Leverage digitial tools to elevate your brand and drive revenue."
                        link="/web-dev"
                    ><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z" /></svg>
                    </Service>
                </motion.div>
                <motion.div
                    initial={{ y: "70%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Service
                        title="Lead Generation"
                        description="Innovative strategies to allow your business to scale unconstrained."
                        link="/lead-gen"
                    ><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z" /></svg>
                    </Service>
                </motion.div>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <Service
                        title="AI for Business"
                        description="Automate tasks to enhance efficiency and minimize erroers."
                        link="/business-ai"
                    ><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Zm-80 80h480v-480H240v480Zm240-240Z" /></svg>
                    </Service>
                </motion.div>
            </div>
        </div>
    );
}
