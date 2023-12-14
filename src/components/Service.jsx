

export default function Service({ title, description, link, children }) {
  return (
    <div className="bg-purple-200 text-slate-900 p-8 flex flex-col items-center justify-between rounded-lg">
      <h1 className="font-bold text-lg">{title}</h1>
      {children}
      <p className="text-sm text-center">{description}
      </p>
      <a href={link} className="bg-purple-200 text-slate-900 border-2 border-slate-900 font-bold text-sm px-4 py-2 rounded-full mt-6 hover:bg-slate-900 hover:text-slate-100 transition ease-in-out duration-300">Learn more</a>
    </div>
  );
}
