import smartBike from "../assets/smartbike.PNG";
import discuss from "../assets/discussfavicon.png";
import mcqtask from "../assets/mcq_icon.png";

export default function Projects() {
  const projects = [
    {
      title: "Smart E-Bike",
      img: smartBike,
      github: "https://github.com/Maaz-fro/E-Bike",
    },
    {
      title: "DISCUSS",
      img: discuss,
      github: "https://github.com/Maaz-fro/Discuss",
    },
    {
      title: "MCQ TASK",
      img: mcqtask,
      github: "https://github.com/Maaz-fro/Mcq-task",
    },
  ];

  return (
    <div id="projects" className="bg-yellow-700 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-yellow-950 border-2 border-yellow-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col items-center"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-40 h-40 object-fit rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-center">
              {project.title}
            </h3>
            <div className="flex gap-4 mt-3">
              <a
                href={project.github}
                target="_blank"
                className="bg-yellow-600 text-yellow-900 px-3 py-1 rounded-lg hover:bg-yellow-700"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
