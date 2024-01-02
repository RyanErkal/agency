import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { motion } from "framer-motion";
import { contentfulApiGQL } from "../api/contentful";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function Blog() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        /* getEntries().then((response) => {
            setPosts(response);
        }); */
        contentfulApiGQL(`{
			blogPostCollection(limit: 3, skip: 0, order: date_DESC){
				total
				items {
				  sys {
					id
				  }
				  date
				  title
				  header {
					title
					description
					contentType
					fileName
					size
					url
					width
					height
				  }
				}
			}
		  }`)().then((response) => {
            setPosts(response.data.blogPostCollection.items);
        });
    }, []);

    function formatDate(date) {
        let dateString = new Date(date).toLocaleDateString("en-UK", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
        return dateString;
    }

    return (
        <div id="blog" className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 min-h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">Blog</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 max-w-7xl">
                <motion.div
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    {posts ? <BlogPost img={posts[0].header.url} title={posts[0].title} date={formatDate(posts[0].date)} id={posts[0].sys.id} /> : <div className="w-full h-64 bg-slate-900 rounded-lg"></div>}
                </motion.div>
                <motion.div
                    initial={{ y: "70%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    {posts ? <BlogPost img={posts[1].header.url} title={posts[1].title} date={formatDate(posts[1].date)} id={posts[1].sys.id} /> : <div className="w-full h-64 bg-slate-900 rounded-lg"></div>}
                </motion.div>
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={spring}>
                    {posts ? <BlogPost img={posts[2].header.url} title={posts[2].title} date={formatDate(posts[2].date)} id={posts[2].sys.id} /> : <div className="w-full h-64 bg-slate-900 rounded-lg"></div>}
                </motion.div>
            </div>
            <div className="w-full bg-slate-800  mt-8 rounded-lg flex items-center justify-center">
                <a href="/blog" className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-md px-8 py-4 rounded-full hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300">View all blog posts</a>
            </div>
        </div>
    );
}
