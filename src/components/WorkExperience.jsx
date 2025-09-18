import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Rocket, Users } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: " Full Stack (NTI Intern)",
    description:
      " Developed web applications using PHP/Laravel and React.js. Worked with MySQL databases, learned advanced database management skills, and applied best practices for data handling.",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "software developer",
    description:
      "Software & Hardware Maintenance Certificate  (OMC), Misr Workers Complex. ",
    icon: <Code2 className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "Cisco CyberOps (NTI Intern)",
    description:
      " Completed hands-on training in Cisco Cybersecurity Operations (CyberOps). Learned how to monitor, analyze, and respond to security events. Developed skills in incident handling and network defense techniques. ",
    icon: <Rocket className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Freelance (itida E-Youth)",
    description:
      "Freelance training. We dealt with clients on many freelance sites. We learned how to write a proposal.",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6 },
  }),
};

const WorkExperience = () => {
  return (
  <div className="py-20 md:py-32 bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* العنوان */}
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUpVariants}
      custom={0}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        My <span className="text-primary">Work Experience</span>
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        A journey through my professional and internship experiences that
        helped me grow as a developer.
      </p>
    </motion.div>

    {/* الكروت */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          className="bg-gray-100 dark:bg-white/5 rounded-2xl p-8 shadow-lg border border-gray-300 dark:border-white/10 hover:shadow-primary/30 transition-all duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
          custom={index + 1}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gray-200 dark:bg-white/10 rounded-xl">
              {exp.icon}
            </div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

  );
};

export default WorkExperience;
