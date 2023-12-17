import { Check } from "../../src/svgs/svgs";

export default function Package({ title, subtitle, description, features }) {
    return (
        <div className="bg-purple-200 w-full flex flex-col items-center justify-center rounded-lg p-8">
            <h1 className="text-2xl font-bold text-slate-900 text-left w-full">{title}</h1>
            <h2 className="text-lg text-slate-900 mb-4 text-left w-full">{subtitle}</h2>
            <p className="text-xs text-slate-900 mb-4">{description}</p>
            <div className="text-sm text-slate-900 w-full mb-8">
                {features.map((feature) => {
                    return (
                        <div key={feature} className="flex items-center">
                            <Check size={20} />
                            <p className="text-xs text-slate-900">{feature}</p>
                        </div>

                    );
                }
                )}
            </div>
            <a href="/contact" className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-xl px-6 py-2 w-full text-center rounded-full hover:bg-slate-900 hover:text-slate-100 transition ease-in-out duration-300">Talk to us</a>
        </div>
    );
}