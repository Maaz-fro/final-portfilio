export default function Experience() {
  const experiences = [
    {
      company: "Cloudapps",
      role: "Website Design and UI / UX",
      duration: "Sep/2024 - Aug/2025",
    },
    {
      company: "Freelancer",
      role: "Software and Developer",
      duration: "Jul/2023 - Aug/2024",
    },
  ];

  return (
    <div className="bg-white text-yellow-600 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl  mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-yellow-700 bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition text-sm text-center"
          >
            <h3 className="text-base font-semibold text-yellow-800">{exp.role}</h3>
            <p className="text-yellow-400 text-sm">{exp.company}</p>
            <p className="text-xs text-yellow-900 ">{exp.duration}</p>
          
          </div>
        ))}
      </div>
    </div>
  );
}
