import { motion } from "framer-motion";

const spring = {
    type: "spring",
    damping: 15,
    stiffness: 100
};

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center bg-slate-800 text-slate-100 p-32 h-screen">
            <h1 className="playfair text-4xl font-bold mb-6">About us</h1>
            <motion.div
                initial={{ y: "60%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={spring}
                className="w-full flex items-center justify-center">
                <div className="w-full max-w-7xl">
                    <div className="border-2 border-purple-200 text-slate-100 p-8 flex flex-col items-start justify-between rounded-lg">
                        <div className="flex justify-between items-center w-full h-min">
                            <div>
                                <h1 className="font-bold text-3xl">Ryan Erkal</h1>
                                <p className="text-md text-left mt-2">Development & Design
                                </p>
                            </div>
                            <div className="flex items-center justify-center text-purple-200">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M480-301q99-80 149.5-154T680-594q0-56-20.5-95.5t-50.5-64Q579-778 544-789t-64-11q-29 0-64 11t-65 35.5q-30 24.5-50.5 64T280-594q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-71 25.5-124.5T291-808q40-36 90-54t99-18q49 0 99 18t90 54q40 36 65.5 89.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-514Z" /></svg>
                                <span className="text-slate-100 text-sm ml-1">Manchester</span>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between items-center w-full">
                            <button className="bg-purple-200 text-slate-900 border-2 font-bold text-md px-6 py-4 rounded-full hover:bg-slate-800 hover:border-purple-200 hover:text-purple-200 transition ease-in-out duration-300 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg>
                                Book a call
                            </button>
                            <div className="flex gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="hover:text-purple-200 cursor-pointer transition-all">
                                    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="hover:text-purple-200 cursor-pointer transition-all">
                                    <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 32 32" fill="currentColor" className="hover:text-purple-200 cursor-pointer transition-all">
                                    <path fillRule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}
