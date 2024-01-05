/* import transpstripemac from "../../public/transpstripemac.png"; */
import layout1 from "../../public/layout1.png";
/* import layout2 from "../../public/layout2.png"; */
import layout3 from "../../public/layout3.png";

export default function ExperienceCard({ title, services, right }) {
    return (
        right ?
            (<a href="/project/1" className={`bg-slate-800 text-slate-900 border-2 border-purple-200 flex flex-row items-start justify-between rounded-lg h-fit`}>
                <div className={`flex flex-col items-end justify-start absolute p-8 w-full`}>
                    <h1 className={`font-bold bg-purple-200 px-4 py-2 mb-2 text-md xl:text-xl w-fit rounded-full `}>{title}</h1>
                    {services.map((service) => {
                        return <h2 key={service} className={`font-bold bg-purple-200 px-4 py-2 mb-2 text-xs xl:text-sm w-fit rounded-full `}>{service}</h2>;
                    }
                    )}
                </div>
                <img src={layout1} className="object-contain" />
            </a>
            ) : (
                <a href="/project/1" className="bg-slate-800 text-slate-900 border-2 border-purple-200 flex flex-row items-start justify-between rounded-lg h-full">
                    <div className="flex flex-col items-start justify-start absolute p-8 w-full">
                        <h1 className="font-bold bg-purple-200 px-4 py-2 mb-2 text-md xl:text-xl w-fit rounded-full text-right">{title}</h1>
                        {services.map((service) => {
                            return <h2 key={service} className="font-bold bg-purple-200 px-4 py-2 mb-2 text-xs xl:text-sm w-fit rounded-full text-right">{service}</h2>;
                        }
                        )}
                    </div>
                    <img src={layout3} className="object-contain" />
                </a>
            )
    );
}


