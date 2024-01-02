import { useState, useEffect } from "react";
import BlogPost from "../../../components/BlogPost";
import { contentfulApiGQL } from "../../../api/contentful";

export default function BlogGrid() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        /* getEntries().then((response) => {
            setPosts(response);
        }); */
        contentfulApiGQL(`{
			blogPostCollection(limit: 20, skip: 0, order: date_DESC){
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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl">
                {posts &&
                    posts.map((post) => (
                        <BlogPost
                            key={post.sys.id}
                            id={post.sys.id}
                            img={post.header.url}
                            title={post.title}
                            date={formatDate(post.date)}
                            header={post.header}
                        />
                    ))}
            </div>
        </div>
    );
}