export default function ExperienceCard({ title, description, name, right }) {
    return (
        <a href="/project/1" className={`bg-purple-200 text-slate-900 h-72 p-8 flex flex-col items-${right ? "right" : "left"} justify-start rounded-lg`}>
            <h1 className={`font-bold mb-2 text-xl ${right ? "text-right" : null}`}>{title}</h1>
            <p className={`text-sm mb-2 text-${right ? "right" : "left"}`}>{description}</p>
            <h2 className={`font-bold text-sm ${right ? "text-right" : null}`}>{name}</h2>
        </a>
    );
}
