import AllProjects from "../../../components/AllProjects";

export default function LeadGenExperience() {
    return (
        <div className="bg-slate-800 text-slate-100 w-full flex flex-col items-center justify-center p-32">
            <h1 className="text-4xl font-bold playfair mb-6">See our work</h1>
            <div className="flex flex-col xl:flex-row items-center justify-around bg-purple-200 text-slate-900 rounded-lg w-full p-8 py-16">
                <h1>Company</h1>
                <h1>Company</h1>
                <h1>Company</h1>
            </div>
            <AllProjects />
        </div>
    );
}