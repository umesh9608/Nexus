// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//     const [readMore, setReadMore] = useState(false);

//     return (
//         <>
//             <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md space-y-4">
//                 <div className="flex justify-center">
//                     <img
//                         className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
//                         src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
//                         alt="Profile"
//                     />
//                 </div>
//                 <div className="text-center">
//                     <h1 className="text-2xl font-bold text-gray-800">Suman </h1>
//                 </div>
//                 <div>
//                     <p className="text-gray-600 text-justify">
//                         suman is a passionate front-end developer with a strong interest
//                         in React and modern web technologies.
//                         {readMore && (
//                             <>
//                                 {" "}
//                                 He enjoys building interactive user interfaces and constantly
//                                 seeks to improve his skills through projects and collaboration.
//                             </>
//                         )}
//                     </p>
//                     <button
//                         className="mt-2 text-blue-500 hover:text-blue-700 font-semibold"
//                         onClick={() => setReadMore(!readMore)}
//                     >
//                         {readMore ? "Read Less" : "Read More"}
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);



//_________Create Multiple card______________
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const profiles = [
    {
        id: 1,
        name: "Suman",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
        shortBio:
            "Suman is a passionate front-end developer with a strong interest in React and modern web technologies.",
        fullBio:
            " He enjoys building interactive user interfaces and constantly seeks to improve his skills through projects and collaboration."
    },
    {
        id: 2,
        name: "Priya",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
        shortBio:
            "Priya is a creative UX designer who loves crafting intuitive user experiences.",
        fullBio:
            " She has a background in graphic design and has transitioned into web design with a focus on accessibility and responsive layouts."
    },
    {
        id: 3,
        name: "Faruk",
        img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80",
        shortBio:
            "Faruk is a full-stack developer with expertise in JavaScript and Node.js.",
        fullBio:
            " He builds scalable backend systems and integrates APIs seamlessly with frontend interfaces."
    }
];

function ProfileCard({ profile }) {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className="max-w-sm bg-white p-6 rounded-xl shadow-md space-y-4">
            <div className="flex justify-center">
                <img
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                    src={profile.img}
                    alt={profile.name}
                />
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
            </div>
            <div>
                <p className="text-gray-600 text-justify">
                    {profile.shortBio}
                    {readMore && profile.fullBio}
                </p>
                <button
                    className="mt-2 text-blue-500 hover:text-blue-700 font-semibold"
                    onClick={() => setReadMore(!readMore)}
                >
                    {readMore ? "Read Less" : "Read More"}
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
                {profiles.map((profile) => (
                    <ProfileCard key={profile.id} profile={profile} />
                ))}
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
