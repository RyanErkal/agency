export default function Testimonial({ title, description }) {
    return (
        <div className="border-2 border-purple-200 text-slate-100 h-72 p-8 flex flex-col items-left justify-start rounded-lg">
            <div className="flex w-full justify-between items-center mb-4">
                <div>
                    <h2 className="text-lg font-bold">Name</h2>
                    <h3 className="text-sm">Position</h3>
                </div>
                <p>LOGO</p>
            </div>
            <h1 className="font-bold text-xl">{title}</h1>
            <p className="text-sm text-left">{description}
            </p>
        </div>
    );
}
