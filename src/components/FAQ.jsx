import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { More, Less } from "../svgs/svgs";


export default function FAQ(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button
            className="flex flex-col text-left text-lg w-full bg-slate-800 text-slate-100 border-2 border-purple-200 px-8 xl:px-16 py-8 mt-8 rounded-xl"
            onClick={() => setIsOpen((prev) => !prev)}
        >
            <div className="flex justify-between items-center w-full">
                <div className="text-lg xl:text-2xl font-bold">{props.question}</div>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={isOpen ? "minus" : "plus"}
                        initial={{
                            rotate: isOpen ? -90 : 90,
                        }}
                        animate={{
                            zIndex: 1,
                            rotate: 0,
                            transition: {
                                type: "tween",
                                duration: 0.15,
                                ease: "circOut",
                            },
                        }}
                        exit={{
                            zIndex: 0,
                            rotate: isOpen ? -90 : 90,
                            transition: {
                                type: "tween",
                                duration: 0.15,
                                ease: "circIn",
                            },
                        }}
                    >
                        {isOpen ? <Less /> : <More />}
                    </motion.div>
                </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: {
                                    duration: 0.4,
                                },
                                opacity: {
                                    duration: 0.25,
                                    delay: 0.15,
                                },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: {
                                    duration: 0.4,
                                },
                                opacity: {
                                    duration: 0.25,
                                },
                            },
                        }}
                        key="test"
                        className=""
                    >
                        {props.answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </button>

    );
}