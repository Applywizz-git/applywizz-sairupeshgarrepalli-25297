import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiGoogle, SiCoursera, SiOpenai } from 'react-icons/si';
import { HiAcademicCap, HiBadgeCheck, HiExternalLink, HiCloud, HiCog } from 'react-icons/hi';

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    icon: HiBadgeCheck,
    color: 'from-blue-500/20 to-cyan-500/20',
    description: 'Comprehensive foundation in machine learning algorithms and their applications.',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'Coursera',
    icon: HiBadgeCheck,
    color: 'from-purple-500/20 to-pink-500/20',
    description: 'Mastery of neural networks, convolutional networks, and sequence models.',
  },
  {
    title: 'Natural Language Processing Specialization',
    issuer: 'Coursera',
    icon: HiBadgeCheck,
    color: 'from-green-500/20 to-emerald-500/20',
    description: 'Expertise in building systems for language translation, sentiment analysis, and chatbots.',
  },
  {
    title: 'Generative AI with Large Language Models',
    issuer: 'Coursera',
    icon: SiOpenai,
    color: 'from-amber-500/20 to-orange-500/20',
    description: 'Practical skills in fine-tuning and deploying large language models for diverse tasks.',
  },
  {
    title: 'Machine Learning Engineering for Production (MLOps)',
    issuer: 'Coursera',
    icon: HiCog,
    color: 'from-orange-500/20 to-amber-500/20',
    description: 'Techniques for building robust, scalable ML pipelines and production systems.',
  },
  {
    title: 'Generative AI Engineering with LLMs Specialization',
    issuer: 'Coursera',
    icon: SiOpenai,
    color: 'from-indigo-500/20 to-blue-500/20',
    description: 'Advanced engineering strategies for integrating LLMs into enterprise applications.',
  },
];

const CertificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certification" className="section bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-gold-soft opacity-20 rounded-tl-full"
      />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="flip-card h-64"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className={`flip-card-front glass rounded-2xl p-6 flex flex-col items-center justify-center bg-gradient-to-br ${cert.color}`}>
                  <motion.div
                    className="p-4 rounded-full bg-card/80 shadow-gold mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <cert.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-center text-foreground mb-2 text-sm md:text-base leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <HiAcademicCap className="text-primary" />
                    {cert.issuer}
                  </div>
                </div>

                {/* Back */}
                <div className="flip-card-back glass rounded-2xl p-6 flex flex-col items-center justify-center bg-gradient-gold">
                  <HiBadgeCheck className="w-12 h-12 text-primary-foreground mb-4" />
                  <p className="text-primary-foreground/90 text-center text-sm mb-4">
                    {cert.description}
                  </p>
                  <div className="flex items-center gap-1 text-primary-foreground/70 text-sm">
                    <HiExternalLink />
                    Verified Certificate
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
