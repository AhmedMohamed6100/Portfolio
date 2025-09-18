
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    })
  };

  return (
    <div className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          custom={0}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me to create amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <div className="relative overflow-hidden rounded-lg border border-primary/10 shadow-xl">
              <img className="w-full h-auto" alt="Professional workspace" src="/images/WhatsApp Image 2025-09-15 at 20.25.55_3c92ad85.jpg" />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-4">

                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm">
                    <Calendar size={16} className="text-primary" />
                    <span>1+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={2}
            >
              <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
                My name is Ahmed Mohamed Goda,Faculty of
                Industry and Energy, 6 October University of
                Technology, Department of Information Technology, I
                am a web designer by html,css,java script and frame
                work by react and have worked on many projects and
                have certificates in the field of web, such as the
                completion of the Front End course and design on
                Figma . I trained in NTI cybersecurity training I studied
                ccna and intro of cyber security and Full stack using
                php</p>
              <p className="text-muted-foreground">
                I've worked on several personal projects, including an e-commerce platform,  and a Admin panel school system website. I'm always eager to learn new technologies and turn creative ideas into functional, user-friendly digital experiences.
              </p>

            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={3}
            >
              <h3 className="text-2xl font-bold mb-4">Experience</h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Front-End Developer (Freelance)</h4>
                    <p className="text-sm text-muted-foreground">Self-initiated Projects • 2023 - Present</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Back-End (PHP) Developer (Freelance)</h4>
                    <p className="text-sm text-muted-foreground">Self-initiated Projects • 2025 - Present</p>
                  </div>
                </div>

            
              
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
