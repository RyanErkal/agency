export default function ExperienceCard({ title, description, right }) {
    return (
        <a href="/project/1" className={`bg-purple-200 text-slate-900 h-72 p-8 flex flex-col items-${right ? "right" : "left"} justify-start rounded-lg`}>
            <h1 className={`font-bold text-xl ${right ? "text-right" : null}`}>{title}</h1>
            <p className={`text-sm text-${right ? "right" : "left"}`}>{description}
            </p>
        </a>
    );
}
