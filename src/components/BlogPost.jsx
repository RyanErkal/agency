export default function BlogPost({ img, title, date, description, id }) {
    return (
        <div className="border-2 border-purple-200 rounded-lg p-4 h-full flex flex-col justify-between">
            <div>
                <img src={img} alt="blog post" className="mb-4 rounded-md" />
                <h1 className="font-bold text-lg mb-2">{title}</h1>
                <h2 className="text-sm mb-2">{date}</h2>
                <p className="text-sm text-left mb-4">
                    {description}
                </p>
            </div>
            <a href={`/blog/post?id=${id}`} className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-md px-6 py-2 rounded-md hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300 w-full text-center">Read more</a>
        </div>
    );
}
