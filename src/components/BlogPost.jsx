export default function BlogPost() {
    return (
        <div className="border-2 border-purple-200 rounded-lg p-4">
            <img src="https://assets-global.website-files.com/64ee8c82d81415ffca89d388/64ef044695e54b90294338e1_Social%20Content%20(12).jpg" alt="blog post" className="mb-4 rounded-md" />
            <h1 className="font-bold text-lg mb-2">Blog Post</h1>
            <h2 className="text-sm mb-2">Date</h2>
            <p className="text-sm text-left mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-md px-6 py-2 rounded-md hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300 w-full">Read more</button>
        </div>
    );
}
