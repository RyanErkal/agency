
export default function Service({ title, description, children }) {
    return (
        <div className="bg-purple-200 text-slate-900 p-8 flex flex-col items-center justify-start rounded-lg h-full w-full">
            {children}
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-sm text-center">{description}
            </p>
        </div>
    );
}
