import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Rocket } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and modern websites using React, Next.js, and Tailwind.",
    icon: <Code className="w-8 h-8 text-primary" />,
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Creating REST APIs & managing databases with PHP,Larvel and MySql.",
    icon: <Database className="w-8 h-8 text-primary" />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with attention to detail and accessibility.",
    icon: <Layout className="w-8 h-8 text-primary" />,
  },
  {
    id: 4,
    title: "Deployment & Optimization",
    description: "Deploying apps with best practices, ensuring speed, security, and scalability.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
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

const Services = () => {
  return (
 <div className="py-20 md:py-32 bg-background text-foreground">
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
        My <span className="text-primary">Services</span>
      </h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Here are the main services I provide to help businesses and individuals
        bring their ideas to life.
      </p>
    </motion.div>

    {/* الكروت */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-primary/30 transition-all duration-300 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUpVariants}
          custom={index + 1}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-xl">{service.icon}</div>
          </div>
          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
          <p className="text-muted-foreground">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Services;
