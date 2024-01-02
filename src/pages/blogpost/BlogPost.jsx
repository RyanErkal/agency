import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getEntry } from "../../api/contentful";
import Markdown from "react-markdown";

export default function BlogPost() {
    const [post, setPost] = useState();
    const [body, setBody] = useState();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        getEntry(id).then((response) => {
            setPost(response);
            setBody(response.fields.body);
        });
    }, [id]);

    return (
        <div className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 px-8 py-32 xl:px-32 min-h-screen">
            {post ? (
                <div className=" flex flex-col items-center justify-center w-full">
                    <div className="w-full flex flex-col items-center max-w-2xl">
                        <img
                            className="w-full rounded-lg mb-4"
                            src={`https:${post.fields.header.fields.file.url}`}
                            alt={post.fields.header.fields.title}
                        />
                        <Markdown className="prose prose-slate prose-invert w-full ">
                            {body}
                        </Markdown>
                    </div>
                </div>
            ) : (
                <div className="h-screen">Loading...</div>
            )}
        </div>
    );
}