import pics from "../assets/work1.png";
import pics1 from "../assets/hands2.PNG";
import pics2 from "../assets/cv.png";
import pics3 from "../assets/email.png";
import pics4 from "../assets/contact.png";
import pics5 from "../assets/whatsapp.png";
import pics6 from "../assets/linedin.png";






// import cv from "../assets/cv_25_2.pdf";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-12 px-6 max-w-6xl mx-auto mt-20"
    >
      {/* Intro Text */}
      <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-950">
          <span className="flex items-center justify-center md:justify-start gap-2">
            <img src={pics1} alt="small" className="w-10 h-10" />
            Muhammad Maaz
          </span>
        </h1>

        <p className="text-yellow-700 mt-3 text-base md:text-lg leading-relaxed font-semibold">
          Web Design | UI / UX | Frontend Developer | Web Developer
        </p>

      
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-6 justify-items-center">
        
          <a
            href="https://www.linkedin.com/in/muhammad-maaz-72b0522b8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pics6}
              alt="LinkedIn"
              className="w-12 h-12 rounded-full p-2 bg-yellow-700 border-4 border-yellow-600 shadow-md hover:scale-110 transition"
            />
          </a>

        
          <a
            href="https://github.com/Maaz-fro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-12 h-12 rounded-full p-2 bg-yellow-700 border-4 border-yellow-600 shadow-md hover:scale-110 transition"
            />
          </a>

          {/* CV */}
                <a
            href="/cv_25_2.pdf"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <img
              src={pics2}
              alt="Download CV"
              className="w-12 h-12 rounded-full p-2 bg-yellow-700 border-4 border-yellow-600 shadow-md hover:scale-110 transition"
            />
          </a>
          {/* <a href={cvFile} download="Muhammad_Maaz_CV.pdf">
  <img
    src={pics2}
    alt="Download CV"
    className="w-12 h-12 rounded-full p-2 bg-yellow-700 border-4 border-yellow-600 shadow-md hover:scale-110 transition"
  />
</a> */}
           


          {/* Email */}
          <a href="mailto:maaaz4452@gmail.com">
            <img
              src={pics3}
              alt="Email"
              className="w-12 h-12 rounded-full p-2 bg-yellow-700 border-4 border-yellow-600 shadow-md hover:scale-110 transition"
            />
          </a>

          {/* Phone */}
          <a href="tel:03219205831">
            <img
              src={pics4}
              alt="Phone"
              className="w-12 h-12 rounded-full p-2 bg-yellow-700 border-4 border-yellow-600 shadow-md hover:scale-110 transition"
            />
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/923368210568">
            <img
              src={pics5}
              alt="Whatsapp"
              className="w-12 h-12 rounded-full p-2 bg-yellow-700 border-4 border-yellow-600 shadow-md hover:scale-110 transition"
            />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={pics}
          alt="My Pic"
          className="w-40 sm:w-52 md:w-72 "
        />
      </div>
    </div>
  );
}
