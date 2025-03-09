import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About me
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-crimson mt-4"></div>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <img
              src="./images/profile.jpg" // Correct path
              alt="Dhruv Kumar"
              className="w-80 h-80 rounded-full mx-auto object-cover shadow-xl"
            />
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/dhruv-kumar-29b279230/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Dhruv9916"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              I'm Dhruv Kumar and I'm a{" "}
              <span className="text-cyan-500">Front End Developer</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I am a dedicated front-end developer with expertise in React,
              Redux, HTML, CSS, JavaScript, and Java. I specialize in building
              responsive, dynamic, and user-friendly web applications,
              transforming design concepts into interactive digital experiences.
              Passionate about continuous learning, I stay updated with the
              latest industry trends to enhance my skill set and deliver
              high-quality solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://leetcode.com/u/dhruv_1803/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  src="./images/leet.png" // Correct path
                  alt="LeetCode"
                  className="w-16 h-16 mb-2"
                />
                <span className="font-medium">LeetCode</span>
              </a>
              <a
                href="https://github.com/Dhruv9916"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <img
                  src="./images/github.png" // Correct path
                  alt="GitHub"
                  className="w-16 h-16 mb-2"
                />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
