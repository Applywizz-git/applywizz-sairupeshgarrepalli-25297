import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/portfolio/', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:gsairupesh27@gmail.com', label: 'Email' },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="py-12 bg-card border-t border-border relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-gold-soft opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Name */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading font-extrabold text-2xl text-gradient-gold mb-2">
                RG
              </h3>
              <p className="text-muted-foreground text-sm">
                RUPESH GARREPALLI
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
                © {new Date().getFullYear()} Made with 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaHeart className="text-primary w-4 h-4" />
                </motion.span>
                by RG
              </p>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top FAB */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0, 
          scale: showScrollTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <Link to="hero" smooth duration={800}>
          <motion.button
            className="fab"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ rotate: showScrollTop ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <HiArrowUp className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Footer;
