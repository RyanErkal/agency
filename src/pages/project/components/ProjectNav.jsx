import { NavLink } from "react-router-dom";

const style = ({ isActive }) => {
    return {
        borderBottom: isActive ? "2px solid #e9d5ff" : "2px solid #1e293b",
        color: isActive ? "#e9d5ff" : "#f1f5f9",
    };
};

export default function ProjectNav() {
    return (
        <div className="w-full flex justify-center items-center bg-slate-800">
            <div className="w-full max-w-7xl text-slate-100 flex justify-center gap-16 items-center p-8 px-16">
                <NavLink to="/project/1" end style={style} className="text-lg font-bold py-1 px-4">Branding</NavLink>
                <NavLink to="/project/1/web-dev" style={style} className="text-lg font-bold py-1 px-4">Web Development</NavLink>
                <NavLink to="/project/1/lead-gen" style={style} className="text-lg font-bold py-1 px-4">Lead Generation</NavLink>
            </div>
        </div>
    );
}