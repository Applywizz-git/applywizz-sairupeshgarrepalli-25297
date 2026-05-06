import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-50" />
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            <motion.p
              className="text-primary font-medium mb-4 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
            >
              Hi I am
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1 }}
            >
              <span className="text-foreground">RUPESH</span>{" "}
              <span className="text-gradient-gold">G</span>
            </motion.h1>

            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.2 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-lg">
                AI/ML Engineer
              </span>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3 }}
            >
              AI/ML Engineer with 5 years of experience building enterprise machine learning and Generative AI solutions using Python, NLP, and Large Language Models supporting semantic retrieval and inference workflows processing 50K+ daily operational signals.
            </motion.p>

            {/* View Projects and Download Resume Buttons */}
            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
            >
              {/* View Projects Button */}
              <Link
                to="projects" // Section ID to scroll to
                smooth
                duration={500}
              >
                <button className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all">
                  View Projects
                </button>
              </Link>

              {/* Download Resume Button */}
              <a href="/resume1.pdf" download="Rupesh_G_Resume.pdf">
                <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-full hover:bg-secondary/90 transition-all">
                  Download Resume
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 3,
              type: 'spring',
              stiffness: 100,
            }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/30 rounded-full scale-110"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-dashed border-secondary/40 rounded-full scale-125"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Profile image container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-gold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                   src="/profile.png" 
                  alt="Rupesh G"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full shadow-gold"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-sm font-semibold text-primary">5+ Years</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full shadow-gold"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-sm font-semibold text-primary">AI/ML Expert</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 px-4 py-2 glass rounded-full shadow-gold hidden md:block"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-sm font-semibold text-primary">Springfield, MO</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
        >
          <Link to="about" smooth duration={500} className="cursor-pointer">
            <motion.div
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <HiChevronDown className="text-2xl" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
