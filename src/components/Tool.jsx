export default function Tool({ children }) {
    return (
        <div className="rounded-2xl bg-purple-200 text-slate-900 p-4 shadow-lg shadow-slate-900">
            {children}
        </div>
    );
}