import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiChartBar, HiDatabase, HiLightningBolt, HiCode, HiCloud, HiCog } from 'react-icons/hi';

const highlights = [
  { icon: HiCode, label: 'Generative AI', description: 'RAG & LLMs' },
  { icon: HiChartBar, label: 'Machine Learning', description: 'Scikit-learn & PyTorch' },
  { icon: HiDatabase, label: 'NLP', description: 'Transformers & FAISS' },
  { icon: HiCloud, label: 'Cloud AI', description: 'SageMaker & Vertex AI' },
  { icon: HiCog, label: 'MLOps', description: 'MLflow & Airflow' },
  { icon: HiLightningBolt, label: 'Semantic Search', description: 'Embeddings & Retrieval' },
];

const counters = [
  { value: 15, suffix: '+', label: 'Projects' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 38, suffix: '%', label: 'Accuracy Improvement' },
];

const skills = [
  { name: 'Generative AI & RAG', level: 95 },
  { name: 'Machine Learning', level: 92 },
  { name: 'NLP & Transformers', level: 90 },
  { name: 'MLOps (MLflow/Airflow)', level: 88 },
  { name: 'Python (NumPy/Pandas)', level: 95 },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="counter-value font-bold text-2xl text-primary">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-gold-soft opacity-20" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Architecting intelligent enterprise solutions and high-performance Generative AI workflows
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-center">
          {/* Image Column */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-gold opacity-30 blur-2xl rounded-3xl group-hover:opacity-50 transition-opacity" />
              <div className="relative glass p-2 rounded-3xl overflow-hidden border border-primary/20 shadow-2xl">
                <img 
                  src="/profile.png" 
                  alt="Rupesh G"
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary"
                animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-primary"
                animate={{ x: [5, -5, 5], y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Text and Counters Column */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-foreground/90 leading-relaxed text-lg">
                As an AI/ML Engineer with 5 years of experience, I specialize in building <span className="text-primary font-semibold">enterprise machine learning</span> and Generative AI solutions. My expertise lies in developing Retrieval-Augmented Generation (RAG) and embeddings-based semantic search pipelines, improving knowledge discovery accuracy by up to <span className="text-primary font-semibold">38%</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have a proven track record of deploying cloud AI workloads using <span className="font-medium text-foreground">AWS SageMaker, Vertex AI, and Azure Machine Learning</span>. My technical toolkit includes <span className="font-medium text-foreground">LangChain, LlamaIndex, PyTorch, and Vector Databases (Pinecone, FAISS)</span>, with a strong focus on scalable ML lifecycle pipelines and MLOps automation.
              </p>
            </motion.div>

            {/* Counters */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {counters.map((counter, index) => (
                <motion.div
                  key={counter.label}
                  className="text-center p-4 glass rounded-2xl card-hover flex flex-col justify-center items-center h-full border border-primary/10"
                  whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.3)' }}
                >
                  <Counter target={counter.value} suffix={counter.suffix} />
                  <p className="text-muted-foreground text-[10px] sm:text-xs mt-2 font-medium uppercase tracking-wider">{counter.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skill Bars */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Core Competencies</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Expertise Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="group p-6 glass rounded-xl text-center hover-glow cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
