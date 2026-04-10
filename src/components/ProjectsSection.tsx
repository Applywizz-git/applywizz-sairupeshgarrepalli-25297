import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiDatabase, HiChartBar, HiTrendingUp, HiCloud, HiLightningBolt, HiCode, HiSearch } from 'react-icons/hi';
import { SiPython, SiOpenai, SiHuggingface, SiDocker, SiMlflow, SiTensorflow } from 'react-icons/si';

const projects = [
  {
    title: 'Enterprise Document Intelligence Retrieval Platform',
    description: 'Engineered embeddings-driven enterprise document indexing pipelines using LangChain, OpenAI API, and Pinecone vector storage enabling semantic retrieval across 120K+ structured and unstructured knowledge records supporting internal analytics discovery workflows.',
    icon: HiSearch,
    image: '/projects/document_intelligence.png',
    technologies: ['LangChain', 'OpenAI API', 'Pinecone', 'LlamaIndex', 'Azure OpenAI'],
    gradient: 'from-primary to-bronze',
    highlights: ['120K+ records', '38% accuracy gain', 'Scalable APIs'],
  },
  {
    title: 'Financial Transaction Semantic Reconciliation Assistant',
    description: 'Constructed transformer-based semantic entity extraction pipelines using HuggingFace Transformers, TensorFlow tokenization utilities, and FAISS embeddings improving reconciliation entity matching precision by 39% across transaction validation datasets.',
    icon: HiLightningBolt,
    image: '/projects/reconciliation_assistant.png',
    technologies: ['HuggingFace', 'TensorFlow', 'FAISS', 'FastAPI', 'Docker', 'MLflow'],
    gradient: 'from-secondary to-primary',
    highlights: ['39% precision gain', '33% faster resolution', 'Scaleable inference'],
  },
];

const techIcons: { [key: string]: React.ElementType } = {
  'LangChain': HiCode,
  'OpenAI API': SiOpenai,
  'Pinecone': HiDatabase,
  'LlamaIndex': HiCode,
  'Azure OpenAI': HiCloud,
  'HuggingFace': SiHuggingface,
  'TensorFlow': SiTensorflow,
  'FAISS': HiDatabase,
  'FastAPI': HiLightningBolt,
  'Docker': SiDocker,
  'MLflow': SiMlflow,
  'Python': SiPython,
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Impactful data engineering solutions delivering real business value
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Header with image */}
              <div className="h-56 relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end`}>
                  <project.icon className="w-10 h-10 text-white/90 mb-3" />
                  <h3 className="text-xl font-heading font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                <motion.div
                  className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      className="text-center p-3 rounded-xl bg-muted/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.2 + hIndex * 0.1 }}
                    >
                      <HiTrendingUp className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <span className="text-xs text-foreground font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => {
                    const Icon = techIcons[tech];
                    return (
                      <motion.span
                        key={techIndex}
                        className="tech-badge flex items-center gap-1.5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {Icon && <Icon className="text-xs" />}
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
