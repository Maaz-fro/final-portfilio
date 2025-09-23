import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
// import Education from "./components/Education";
// import Certifications from "./components/Certifications";
// import Projects from "./components/Projects";
// import Experience from "./components/Experience";






// import Experience from "./components/Experience";

function App() {
  return (
    <>
    <Navbar/>
     <div id="home">
      <Hero />
    </div>
     <div id="about">
      <About />
    </div>
     <div id="skills">
      <Skills />
    </div>
    {/* <div id="experience">
      <Experience />
    </div>
    <div id="education">
      <Education />
    </div>
    <div id="certifications">
      <Certifications />
    </div>
     <div id="projects">
      <Projects />
    </div> */}
     
      

      
    
    </>
  );
}

export default App;
