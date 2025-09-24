import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

//export default function Skills(){
import htmlImg from "../assets/skills/html.png";
import cssImg from "../assets/skills/css.png";
import bootstrapImg from "../assets/skills/bootstrap.PNG";
import tailwindImg from "../assets/skills/tailwind.PNG";
import gitImg from "../assets/skills/git.PNG";
import figmaImg from "../assets/skills/figma.PNG";
import photoshopImg from "../assets/skills/photoshop.PNG";
import reactjsImg from "../assets/skills/reactjs.PNG";
import angularImg from "../assets/skills/angularjs.PNG";
import phpImg from "../assets/skills/php.PNG";
import laravelImg from "../assets/skills/laravel.PNG";
import canvaImg from "../assets/skills/canva.PNG";
import indesignImg from "../assets/skills/indesign.PNG";
import mysqlImg from "../assets/skills/mysql.PNG";
import wordImg from "../assets/skills/word.PNG";
import jsImg from "../assets/skills/js.PNG";
import excelImg from "../assets/skills/excel.PNG";
import wordpressImg from "../assets/skills/wordpress.PNG";
import vuejsImg from "../assets/skills/vuejs.png";
import opencartImg from "../assets/skills/opencart.PNG";
import illustrationImg from "../assets/skills/illustration.PNG";
import pptImg from "../assets/skills/ppt.PNG";
import tsImg from "../assets/skills/ts.PNG";
 
// Skills data
// const skills = [
//   { name: "html", img: "public/skills/html.PNG" },
//   { name: "CSS", img: "public/skills/css.PNG" },
//   { name: "BOOTSTRAP", img: "public/skills/bootstrap.PNG" },
//   { name: "TAILWIND", img: "public/skills/tailwind.PNG" },
//   { name: "GIT", img: "public/skills/git.PNG" },
//   { name: "FIGMA", img: "public/skills/figma.PNG" },
//   { name: "ADOBE PHOTOSHOP", img: "public/skills/photoshop.PNG" },
//   { name: "REACTJS", img: "public/skills/reactjs.PNG" },
//   { name: "ANGULAR", img: "public/skills/angularjs.PNG" },
//   { name: "PHP", img: "public/skills/php.PNG" },
//   { name: "LARAVEL", img: "public/skills/laravel.PNG" },
//   { name: "CANVA", img: "public/skills/canva.PNG" },
//   { name: "ADOBE INDESIGN", img: "public/skills/indesign.PNG" },
//   { name: "MYSQL", img: "public/skills/mysql.PNG" },
//   { name: "WORD", img: "public/skills/word.PNG" },
//   { name: "JAVASCRIPT", img: "public/skills/js.PNG" },
//   { name: "EXCEL", img: "public/skills/excel.PNG" },
//   { name: "WORDPRESS", img: "public/skills/wordpress.PNG" },
//   { name: "VUE JS", img: "public/skills/vuejs.PNG" },
//   { name: "OPENCART", img: "public/skills/opencart.PNG" },
//   { name: "ADOBE ILLUSTRATION", img: "public/skills/illustration.PNG" },
//   { name: "POWER POINT", img: "public/skills/ppt.PNG" },
  







  

// ];

const skills = [
  { name: "HTML", img: htmlImg },
  { name: "CSS", img: cssImg },
  { name: "BOOTSTRAP", img: bootstrapImg },
  { name: "TAILWIND", img: tailwindImg },
  { name: "GIT", img: gitImg },
  { name: "FIGMA", img: figmaImg },
  { name: "ADOBE PHOTOSHOP", img: photoshopImg },
  { name: "REACTJS", img: reactjsImg },
  { name: "ANGULAR", img: angularImg },
  { name: "PHP", img: phpImg },
  { name: "LARAVEL", img: laravelImg },
  { name: "CANVA", img: canvaImg },
  { name: "ADOBE INDESIGN", img: indesignImg },
  { name: "MYSQL", img: mysqlImg },
  { name: "WORD", img: wordImg },
  { name: "JAVASCRIPT", img: jsImg },
  { name: "EXCEL", img: excelImg },
  { name: "WORDPRESS", img: wordpressImg },
  { name: "VUE JS", img: vuejsImg },
  { name: "OPENCART", img: opencartImg },
  { name: "ADOBE ILLUSTRATION", img: illustrationImg },
  { name: "POWER POINT", img: pptImg },
  { name: "TYPESCRIPT", img: tsImg },

];


export default function Skills() {


  return (

    
    <div id="skills" className="bg-yellow-700 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mt-10 mb-10">My Skills</h2>
     

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center border-5 border-yellow-600 bg-yellow-950 rounded-xl p-6 shadow-lg hover:scale-105 transition">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-10 h-15 mb-4"
              />
              <p className="text-xl font-semibold">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       
    </div>
  );
}
