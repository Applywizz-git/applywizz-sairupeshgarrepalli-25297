import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiLocationMarker, HiCalendar, HiChartBar, HiCode, HiTable, HiDatabase } from 'react-icons/hi';
import { SiPython } from 'react-icons/si';

const experiences = [
  {
    title: 'AI/ML Engineer',
    company: 'TCS',
    location: 'USA (Remote)',
    period: 'May 2024 - Present',
    bullets: [
      'Engineered enterprise-scale feature engineering pipelines using Python, Pandas, and PostgreSQL enabling structured transformation of 50K+ daily operational signals supporting predictive intelligence services.',
      'Developed supervised anomaly detection models using Scikit-learn improving alert prioritization accuracy by 29% across enterprise monitoring analytics workflows supporting platform reliability teams.',
      'Implemented embeddings-driven semantic retrieval services using HuggingFace Transformers and FAISS enabling contextual enterprise knowledge discovery across structured and unstructured operational datasets.',
      'Operationalized batch inference pipelines using Airflow and Docker enabling automated nightly model scoring across distributed enterprise analytics environments improving scoring reproducibility.',
      'Standardized experiment tracking workflows using MLflow improving lifecycle visibility across multi-team enterprise ML deployment environments.',
      'Optimized feature transformation pipelines using NumPy with Matplotlib and Seaborn validation improving dataset preparation throughput by 34% across enterprise training data readiness workflows.',
      'Built and owned RAG-based pipelines using FAISS improving enterprise knowledge retrieval accuracy by 15% across distributed semantic search workloads.',
      'Developed LLM-powered inference workflows using OpenAI and Azure OpenAI reducing enterprise query resolution time by 30% across internal analytics support platforms.',
    ],
    technologies: ['Python', 'Pandas', 'PostgreSQL', 'Scikit-learn', 'HuggingFace', 'FAISS', 'Airflow', 'Docker', 'MLflow', 'OpenAI', 'Azure OpenAI'],
  },
  {
    title: 'Applied AI Engineer',
    company: 'EdgeVerve',
    location: 'Bangalore, India',
    period: 'Jan 2021 - Jan 2023',
    bullets: [
      'Engineered NLP-driven semantic extraction pipelines using HuggingFace Transformers, TensorFlow tokenization utilities, and Python reducing manual reconciliation validation effort by 41% across enterprise transaction processing workflows.',
      'Implemented vector similarity indexing architectures using FAISS enabling contextual retrieval across reconciliation document repositories improving entity-matching accuracy across audit intelligence systems.',
      'Constructed structured feature engineering pipelines using Pandas and PostgreSQL supporting anomaly detection model readiness across transaction monitoring analytics environments.',
      'Designed event-driven inference enrichment workflows using Kafka enabling streaming contextual intelligence integration across reconciliation decision-support services.',
      'Operationalized experiment tracking pipelines using MLflow improving lifecycle traceability across supervised learning model iterations supporting compliance analytics governance workflows.',
      'Containerized transformer inference services using Docker improving runtime portability across distributed reconciliation automation microservices environments.',
      'Enhanced embedding quality through tokenization tuning strategies improving semantic entity resolution accuracy across enterprise validation workflows.',
      'Validated model evaluation outputs in collaboration with compliance analytics teams improving explainability confidence across automated reconciliation intelligence pipelines.',
    ],
    technologies: ['HuggingFace', 'TensorFlow', 'Python', 'FAISS', 'Pandas', 'PostgreSQL', 'Kafka', 'MLflow', 'Docker'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techIcons: { [key: string]: React.ElementType } = {
    'Power BI': HiChartBar,
    'SQL Server': HiDatabase,
    'Python': SiPython,
    'Excel Automation': HiTable,
  };

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-10" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            Building data-driven solutions that deliver measurable results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-gold transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-glow z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
              />

              {/* Content card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <motion.div
                  className="glass rounded-2xl p-6 md:p-8 card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className={`mb-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap justify-start md:justify-start">
                      <HiBriefcase className="text-primary text-xl" />
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="text-primary" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar className="text-primary" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6 text-left">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-foreground/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + bulletIndex * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => {
                      const Icon = techIcons[tech];
                      return (
                        <motion.span
                          key={techIndex}
                          className="tech-badge flex items-center gap-1.5"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {Icon && <Icon className="text-xs" />}
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
