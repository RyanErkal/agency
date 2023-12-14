
import { motion, useScroll, useSpring } from "framer-motion";

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    console.log(scrollYProgress);

    return (
        <motion.div className="progress-bar" style={{ scaleX }} />
    );
}
