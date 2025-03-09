import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const majorProjects = [
  {
    title: "WorldAtlas- Multi-Page Website",
    image: "./images/worldatlas.png",
    demoLink: "https://worldatlas-react-by-dhruv.netlify.app/",
    githubLink: "https://github.com/Dhruv9916/WORLDATLAS-REACT-19-MULTI-PAGE-WEBSITE",
    tech: "Tech Stack: React 19, React Router DOM, Axios, Netlify",
  },
  {
    title: "React CRUD Operations with REST API",
    image: "./images/crud.png",
    demoLink: "https://crud-axios-react-by-dhruv.netlify.app/",
    githubLink: "https://github.com/Dhruv9916/React-JS-CRUD-Operation-with-Rest-API-using-Axios",
    tech: "Tech Stack: React.js, Axios, Vite, Netlify",
  },
  {
    title: "Crypto-Tracker-Using-React",
    image: "./images/crypto.png",
    demoLink: "https://crypto-currency-tracker-by-dhruv.netlify.app/",
    githubLink: "https://github.com/Dhruv9916/Crypto-Tracker-Using-React",
    tech: "React.js, Material Ui, Framer Motion",
  },
];

const minorProjects = [
  {
    title: "Fully Functional Todo App Using React JS",
    image: "./images/todo.png",
    demoLink: "https://todo-with-timer-by-dhruv.netlify.app/",
    githubLink: "https://github.com/Dhruv9916/Fully-Functional-Todo-App-Using-React-JS",
    tech: "Tech Stack: React.js, Hooks, Local Storage",
  },
  {
    title: "Building Cart using React Context API",
    image: "./images/cart.png",
    demoLink: "https://cart-using-context-api-by-dhruv.netlify.app/",
    githubLink: "https://github.com/Dhruv9916/Building-Cart-using-React-Context-API",
    tech: "Tech Stack: React.js, Context API, Reducer",
  },
  {
    title: "CountDown Timer Using React",
    image: "./images/timer.png",
    demoLink: "https://countdown-timer-by-dhruv.netlify.app/",
    githubLink: "https://github.com/Dhruv9916/CountDown-Timer-Using-React",
    tech: "Tech Stack: React.js, Hooks, State Management",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = () => {
  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Major Projects
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-crimson mt-4"></div>
          </motion.h2>

          <Slider {...sliderSettings} className="project-slider">
            {majorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:opacity-80 transition-opacity"
                    />
                  </a>
                  <div className="p-6">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-crimson transition-colors"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-gray-400">{project.tech}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="minor-projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Minor Projects
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-crimson mt-4"></div>
          </motion.h2>

          <Slider {...sliderSettings} className="project-slider">
            {minorProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <a href={project.demoLink} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover hover:opacity-80 transition-opacity"
                    />
                  </a>
                  <div className="p-6">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-crimson transition-colors"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                    </a>
                    <p className="text-gray-400">{project.tech}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Projects;
