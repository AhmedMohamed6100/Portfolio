// src/components/Certificates.jsx
import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Front-End (reactjs)",
    description:
      "Completed a React course covering hooks, state management, and project structure.",
    image: "cer1.jpg",
    imageAlt: "React certificate preview",
  },
  {
    id: 2,
    title: "JavaScript Advanced",
    description: "Certificate of completion for an advanced JavaScript course.",
    image: "cer2.jpg",
    imageAlt: "JavaScript certificate preview",
  },
  {
    id: 3,
    title: "Web Security Basics",
    description: "Certificate covering OWASP basics and secure coding practices.",
    image: "cer3.jpg",
    imageAlt: "Web Security certificate preview",
  },
  {
    id: 4,
    title: "Node.js Fundamentals",
    description: "Completed Node.js course with focus on APIs and backend logic.",
    image: "cer4.jpg",
    imageAlt: "Node.js certificate preview",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "Certificate in designing intuitive user interfaces and experiences.",
    image: "cer5.jpg",
    imageAlt: "UI/UX certificate preview",
  },
  {
    id: 6,
    title: "CyberOps",
    description: "Cisco CyberOps Associate – security monitoring & analysis.",
    image: "cer6.jpg",
    imageAlt: "Cisco CyberOps certificate preview",
  },
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

const Certificates = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Certificates
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my certificates that showcase my learning journey and
            skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
              custom={index + 1}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={cert.imageAlt}
                  src={`/images/${cert.image}`} // الصور داخل public/images
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
