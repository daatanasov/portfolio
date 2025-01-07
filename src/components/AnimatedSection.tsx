'use client';
import {motion} from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

const AnimatedSection = ({children}: AnimatedSectionProps) => (
  <motion.div
    initial={{opacity: 0, y: 50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5, ease: 'easeInOut'}}
    className="mb-8"
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
