import aboutImg from "../assets/maaz_pics.jpg"; // replace with your image

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
        
        {/* Left - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImg}
            alt="About Me"
            className="w-40 md:w-50 border-4 border-yellow-600 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-700  mb-4">
            About Me
          </h2>
          <p className="text-yellow-600 leading-relaxed">
            Results-driven Frontend Developer specializing in modern JavaScript frameworks and responsive web development. Experienced in translating design concepts into high-performance, accessible applications and deploying them to cloud platforms. Passionate about clean UI, usability, and continuous learning. 
            
            Skilled in technical and soft like version control , integrating data , eesponsive design , cross-browser Testing and Deployment , Problem Solving, Teamwork and Creativity.

          </p>
        </div>

      </div>
    </section>
  );
}
