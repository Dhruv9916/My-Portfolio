import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", image: "./images/javascript.png" },
  { name: "React", image: "./images/react.png" },
  { name: "Redux", image: "./images/redux.png" },
  { name: "HTML5", image: "./images/html5.png" },
  { name: "CSS3", image: "./images/css3.png" },
  { name: "Git", image: "./images/git.png" },
  { name: "Bootstrap", image: "./images/bootstrap.png" },
  { name: "Java", image: "./images/java.png" },
  { name: "Tailwind CSS", image: "./images/tailwind-css.svg" },
  { name: "Material UI", image: "./images/icons8-material-ui-48.png" },
  { name: "Shadcn UI", image: "./images/shadcn-ui-seeklogo.png" },
  { name: "SQL", image: "./images/sql-server.png" },
  { name: "Framer Motion", image: "./images/framer-motion.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Skills
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-crimson mt-4"></div>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              My creative skills & experiences
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Frontend Developer dedicated to continuous
              learning, task estimation, and incorporating client feedback.
              Highly motivated, result-oriented, and self-driven, I am committed
              to enhancing my skills and staying updated with the latest
              frontend development tools and technologies. I possess a strong
              understanding of JavaScript(ES6+), HTML, CSS, React.js, Redux
              Toolkit, REST API, Java, OOPS, DBMS, SQL, Git, GitHub, Material
              UI, Framer Motion, Shadcn Ui and Bootstrap.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 sm:grid-cols-4 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain group-hover:brightness-110 transition-all"
                />
                <span className="mt-2 text-sm text-gray-300 group-hover:text-white">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
