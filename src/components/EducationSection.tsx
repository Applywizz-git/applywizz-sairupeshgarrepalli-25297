import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiAcademicCap, HiLocationMarker, HiCalendar, HiBookOpen } from 'react-icons/hi';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Missouri State University',
    location: 'Missouri, USA',
    period: 'Completed',
    description: 'Advanced coursework in Computer Science, Machine Learning, and Artificial Intelligence.',
    icon: HiAcademicCap,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-5" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mx-auto">
            Academic foundation for data excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="glass rounded-2xl p-8 card-hover relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-10 rounded-bl-full" />

              <motion.div
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <edu.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {edu.degree}
              </h3>

              <p className="text-lg text-primary font-semibold mb-4">{edu.school}</p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <HiLocationMarker className="text-primary" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <HiCalendar className="text-primary" />
                  {edu.period}
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
