import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython,
  SiPostgresql,
  SiDatabricks,
  SiGit,
  SiScikitlearn,
  SiPytest,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiDocker,
  SiKubernetes,
  SiOpenai,
  SiAmazon,
  SiApacheairflow,
  SiMlflow,
  SiHuggingface,
  SiElasticsearch,
  SiMongodb,
  SiApachekafka,
} from 'react-icons/si';
import {
  HiChartBar,
  HiCode,
  HiDatabase,
  HiCloud,
  HiCog,
  HiLightningBolt,
  HiServer,
  HiShare,
  HiClipboardList,
  HiSearch,
} from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    icon: HiLightningBolt,
    skills: [
      { name: 'Machine Learning', icon: SiScikitlearn },
      { name: 'Deep Learning', icon: SiPytorch },
      { name: 'NLP', icon: HiCode },
      { name: 'Large Language Models (LLMs)', icon: SiOpenai },
      { name: 'Generative AI', icon: SiHuggingface },
      { name: 'RAG', icon: HiSearch },
      { name: 'Prompt Engineering', icon: HiCode },
      { name: 'Semantic Search', icon: HiSearch },
      { name: 'Embeddings', icon: HiDatabase },
      { name: 'Feature Engineering', icon: HiCog },
      { name: 'Model Training', icon: HiCog },
      { name: 'Model Evaluation', icon: HiChartBar },
      { name: 'Model Deployment', icon: HiCloud },
      { name: 'Batch Inference', icon: HiLightningBolt },
      { name: 'Real-Time Inference', icon: HiLightningBolt },
      { name: 'Model Monitoring', icon: HiChartBar },
    ],
  },
  {
    title: 'LLM & Generative AI Engineering',
    icon: SiOpenai,
    skills: [
      { name: 'LangChain', icon: HiCode },
      { name: 'LlamaIndex', icon: HiCode },
      { name: 'OpenAI API', icon: SiOpenai },
      { name: 'Azure OpenAI', icon: HiCloud },
      { name: 'AWS Bedrock', icon: HiCloud },
      { name: 'HuggingFace Transformers', icon: SiHuggingface },
      { name: 'Vector Databases', icon: HiDatabase },
      { name: 'Context Augmentation', icon: HiShare },
      { name: 'Retrieval Optimization', icon: HiSearch },
      { name: 'Hallucination Reduction', icon: HiCheckCircle },
    ],
  },
  {
    title: 'Python ML Ecosystem',
    icon: SiPython,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Matplotlib', icon: HiChartBar },
      { name: 'Seaborn', icon: HiChartBar },
    ],
  },
  {
    title: 'MLOps & ML Platform Engineering',
    icon: HiCog,
    skills: [
      { name: 'MLflow', icon: SiMlflow },
      { name: 'Airflow', icon: SiApacheairflow },
      { name: 'Model Versioning', icon: SiGit },
      { name: 'Experiment Tracking', icon: HiChartBar },
      { name: 'CI/CD for ML', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
    ],
  },
  {
    title: 'Cloud AI Platforms',
    icon: HiCloud,
    skills: [
      { name: 'AWS SageMaker', icon: SiAmazon },
      { name: 'AWS Bedrock', icon: HiCloud },
      { name: 'Google Vertex AI', icon: HiCloud },
      { name: 'Azure Machine Learning', icon: HiCloud },
    ],
  },
  {
    title: 'Streaming & Distributed ML Systems',
    icon: HiShare,
    skills: [
      { name: 'Kafka', icon: SiApachekafka },
      { name: 'Distributed ML Pipelines', icon: HiServer },
      { name: 'Streaming Feature Pipelines', icon: HiLightningBolt },
      { name: 'Event-Driven ML Architectures', icon: HiShare },
      { name: 'Microservices-based Model Serving', icon: HiServer },
    ],
  },
  {
    title: 'Data Engineering for ML',
    icon: HiDatabase,
    skills: [
      { name: 'ETL Pipelines', icon: HiShare },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Elasticsearch', icon: SiElasticsearch },
      { name: 'Data Modeling', icon: HiDatabase },
    ],
  },
];

const topSkills = [
  { name: 'Generative AI & RAG', level: 95 },
  { name: 'Machine Learning', level: 92 },
  { name: 'NLP & Transformers', level: 90 },
  { name: 'Python (ML Ops)', level: 88 },
  { name: 'Cloud AI Platforms', level: 85 },
];

const ProgressRing = ({ progress, size = 80, strokeWidth = 6 }: { progress: number; size?: number; strokeWidth?: number }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="progress-ring" width={size} height={size}>
      <circle
        className="stroke-muted"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <motion.circle
        className="stroke-primary progress-ring-circle"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
        }}
      />
    </svg>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-10" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive expertise across the modern data stack
          </p>
        </motion.div>

        {/* Top Skills with Progress Rings */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="relative">
                <ProgressRing progress={skill.level} />
                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-primary">
                  {skill.level}%
                </span>
              </div>
              <span className="mt-3 font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all cursor-default group/skill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover/skill:rotate-12 transition-transform" />
                    <span className="text-sm text-foreground/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
