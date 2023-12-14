import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function TextSection({ title, body, img, right, children }) {
    const xValue = right ? "60%" : "-60%";

    return (
        <div className=" bg-slate-800 text-slate-100 p-32">
            <div className="flex flex-col items-center justify-center">
                <motion.div className="flex gap-16 justify-center items-center w-full max-w-7xl"
                    initial={{ x: xValue, opacity: 0 }}
                    whileInView={{ x: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    {right && <img src={img} alt="" className="w-2/5" />}
                    <div className={`flex flex-col items-${right ? "end" : "start"}`}>
                        <h1 className={`text-4xl font-bold playfair text-${right ? "right" : "left"} mb-6 w-full`}>{title}</h1>
                        <p className={`text-lg mb-6 text-${right ? "right" : "left"}`}>{body}</p>
                        {children}
                    </div>
                    {!right && <img src={img} alt="" className="w-2/5" />}
                </motion.div>
            </div>
        </div>
    );
}
