import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiLocationMarker, HiCalendar, HiChartBar, HiCode, HiTable, HiDatabase } from 'react-icons/hi';
import { SiPython } from 'react-icons/si';

const experiences = [
  {
    title: 'AI/ML Engineer (Virtual Job Simulation)',
    company: 'BCG',
    location: 'Remote',
    period: 'Apr 2026',
    bullets: [
      'Developed AI-powered financial chatbot workflows using Python and Pandas enabling structured extraction of 10-K and 10-Q filings supporting automated financial insight generation across analyst workflows.',
      'Implemented embeddings-driven semantic retrieval pipelines using OpenAI API and FAISS improving response grounding accuracy by 35% across financial document query scenarios.',
      'Constructed rule-based prompt engineering logic using Large Language Models improving interpretability of financial disclosure summaries across multi-section regulatory datasets.',
      'Engineered document preprocessing pipelines using Pandas enabling normalization of 10-K and 10-Q datasets supporting downstream chatbot inference readiness.',
      'Evaluated chatbot response quality using model evaluation workflows improving financial answer relevance consistency by 28% across simulated document question-answering scenarios.',
      'Collaborated with consulting stakeholders to translate LLM-generated outputs into user-friendly financial summaries supporting decision-support interpretation workflows.'
    ],
    technologies: ['Python', 'Pandas', 'OpenAI API', 'FAISS', 'LLMs'],
  },
  {
    title: 'Data Scientist (Virtual Job Simulation)',
    company: 'British Airways',
    location: 'Remote',
    period: 'Apr 2026',
    bullets: [
      'Engineered customer review preprocessing workflows using Python and Pandas enabling structured transformation of 12K+ airline feedback records supporting downstream behavioral modeling readiness.',
      'Performed exploratory data analysis using NumPy, Matplotlib, and Seaborn identifying satisfaction drivers influencing Heathrow Terminal 3 lounge eligibility segmentation workflows.',
      'Refined customer buying-behavior prediction pipelines using Scikit-learn improving classification accuracy by 26% and strengthening precision-recall performance across simulated airline engagement segmentation workflows.',
      'Constructed feature engineering pipelines using Pandas enabling structured encoding of travel attributes supporting model training readiness across passenger eligibility datasets.',
      'Evaluated predictive model performance using Scikit-learn model evaluation metrics improving interpretability of buying-propensity signals across simulated airline analytics workflows.',
      'Collaborated with analytics stakeholders to translate model outputs into operational segmentation insights supporting data-driven lounge eligibility decision workflows across passenger datasets.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
  },
  {
    title: 'AI/ML Engineer',
    company: 'CVS',
    location: 'USA (Remote)',
    period: 'May 2024 - Present',
    bullets: [
      'Engineered healthcare clinical feature engineering pipelines using Python, Pandas, and PostgreSQL enabling structured transformation of 60K+ daily patient interaction signals supporting downstream predictive analytics workflows.',
      'Developed supervised classification models using Scikit-learn improving patient-risk alert prioritization accuracy by 27% across care-management decision support pipelines.',
      'Implemented embeddings-driven semantic retrieval workflows using HuggingFace Transformers and FAISS enabling contextual discovery across clinical guideline and claims documentation datasets.',
      'Operationalized batch inference pipelines using Airflow and Docker enabling automated nightly scoring across distributed healthcare analytics environments improving scoring reproducibility.',
      'Standardized experiment tracking workflows using MLflow improving lifecycle traceability across multi-team healthcare ML deployment environments.',
      'Optimized feature transformation pipelines using NumPy with Matplotlib and Seaborn validation improving dataset preparation throughput by 32% across clinical training data workflows.',
      'Built Retrieval-Augmented Generation pipelines using FAISS improving healthcare knowledge retrieval accuracy by 16% across provider decision-support search workloads.',
      'Developed LLM-powered inference workflows using OpenAI API and Azure OpenAI reducing internal query resolution time by 28% and improving inference response latency across analytics support platforms.'
    ],
    technologies: ['Python', 'Pandas', 'PostgreSQL', 'Scikit-learn', 'HuggingFace', 'FAISS', 'Airflow', 'Docker', 'MLflow', 'OpenAI API', 'Azure OpenAI', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Applied AI Engineer',
    company: 'EdgeVerve',
    location: 'Bangalore, India',
    period: 'June 2022 - Jan 2023',
    bullets: [
      'Engineered NLP-driven semantic extraction pipelines using HuggingFace Transformers, TensorFlow tokenization utilities, and Python reducing manual reconciliation validation effort by 41% across enterprise transaction processing workflows.',
      'Implemented vector similarity indexing architectures using FAISS enabling contextual retrieval across reconciliation document repositories improving entity-matching accuracy across audit intelligence systems.',
      'Constructed structured feature engineering pipelines using Pandas and PostgreSQL supporting anomaly detection model readiness across transaction monitoring analytics environments.',
      'Designed event-driven inference enrichment workflows using Kafka enabling streaming contextual intelligence integration across reconciliation decision-support services.',
      'Operationalized experiment tracking pipelines using MLflow improving lifecycle traceability across supervised learning model iterations supporting compliance analytics governance workflows.',
      'Containerized transformer inference services using Docker improving runtime portability across distributed reconciliation automation microservices environments.',
      'Enhanced embedding quality through tokenization tuning strategies improving semantic entity resolution accuracy across enterprise validation workflows.',
      'Validated model evaluation outputs in collaboration with compliance analytics teams improving explainability confidence across automated reconciliation intelligence pipelines.'
    ],
    technologies: ['HuggingFace', 'TensorFlow', 'Python', 'FAISS', 'Pandas', 'PostgreSQL', 'Kafka', 'MLflow', 'Docker'],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Cognizant',
    location: 'India',
    period: 'Aug 2020 - June 2022',
    bullets: [
      'Designed enterprise telemetry feature engineering pipelines using Python, Pandas, and PostgreSQL enabling structured transformation of enterprise monitoring datasets supporting predictive monitoring intelligence workflows.',
      'Developed anomaly detection models using Scikit-learn improving enterprise alert prioritization precision by 24% across infrastructure analytics monitoring systems.',
      'Implemented semantic retrieval indexing pipelines using Elasticsearch enabling contextual search across enterprise knowledge repositories supporting analytics investigation workflows.',
      'Automated scheduled scoring workflows using Airflow orchestration pipelines enabling reproducible execution across distributed enterprise analytics environments.',
      'Constructed ETL pipelines for ML workloads using Pandas enabling structured dataset preparation across enterprise training pipelines supporting downstream predictive models.',
      'Integrated streaming feature enrichment pipelines using Kafka enabling near-real-time analytics signal availability across monitoring intelligence services.',
      'Deployed containerized inference services using Docker improving deployment consistency across distributed enterprise modelserving environments.',
      'Collaborated with platform analytics teams to translate model outputs into operational monitoring insights improving response efficiency across enterprise support workflows.'
    ],
    technologies: ['Python', 'Pandas', 'PostgreSQL', 'Scikit-learn', 'Elasticsearch', 'Airflow', 'Kafka', 'Docker'],
  }
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
