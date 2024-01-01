import BlogPost from "./BlogPost";
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Blog() {
    return (
        <div id="blog" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Blog</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl">
                <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <BlogPost />
                </motion.div>
                <motion.div
                    initial={{ y: "70%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <BlogPost />
                </motion.div>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    <BlogPost />
                </motion.div>
            </div>
            <div className="w-full bg-slate-800  mt-8 rounded-lg flex items-center justify-center">
                <a href="/blog" className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-md px-8 py-4 rounded-full hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300">View all blog posts</a>
            </div>
        </div>
    );
}
