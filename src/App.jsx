import { Link } from "react-router-dom";

const personas = [
  {
    title: "Recruiter",
    desc: "Experience, skills, projects",
    link: "/recruiter",
    gradient: "bg-gradient-to-br from-rose-400 to-red-600",
  },
  {
    title: "Technical Person",
    desc: "Code, systems, GitHub",
    link: "/technical",
    gradient: "bg-gradient-to-br from-sky-400 to-blue-600",
  },
  {
    title: "Interviewer",
    desc: "Case studies, technical writing",
    link: "/interviewer",
    gradient: "bg-gradient-to-br from-green-400 to-emerald-600",
  },
  {
    title: "Junior / Learner",
    desc: "Guides, tips, career advice",
    link: "/learner",
    gradient: "bg-gradient-to-br from-violet-400 to-purple-600",
  },
  {
    title: "Just Curious",
    desc: "Stories, philosophies, raw self",
    link: "/curious",
    gradient: "bg-gradient-to-br from-yellow-300 to-amber-500 text-gray-900",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-sky-100 to-emerald-100 text-gray-900 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-emerald-800 drop-shadow-md">
  Hello, I'm Sachidananda.
</h1>

<p className="text-base text-gray-600 mb-10">
  Welcome. settle in, sip your coffee, and get to know me beyond the bullet points.
</p>

<p className="mb-12 text-lg text-gray-600 italic">
  Who’s viewing?
</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {personas.map((p) => (
          <Link
            key={p.title}
            to={p.link}
            className={`${p.gradient} w-52 h-52 flex flex-col justify-center items-center rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition`}
          >
            <span className="text-2xl font-bold drop-shadow-sm">{p.title}</span>
            <p className="mt-2 text-sm text-center px-2">{p.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
