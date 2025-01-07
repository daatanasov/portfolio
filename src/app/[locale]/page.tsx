'use client';
import React, {useState, useEffect} from 'react';
import ShortDescription from '@/components/ShortDescription';
import Experience from '@/components/Experience';
import {useTranslations} from 'next-intl';
import {motion, AnimatePresence} from 'framer-motion';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import ContactForm from '@/components/ContactForm';
// import ProjectsCarousel from '@/components/OldProjectsCarousel';

const greetings = [
  {text: 'Здравейте', lang: 'Bulgarian'},
  {text: 'Hello', lang: 'English'},
  {text: 'こんにちは', lang: 'Japanese'},
  {text: 'Bonjour', lang: 'French'},
  {text: 'Hola', lang: 'Spanish'},
  {text: 'Ciao', lang: 'Italian'}
];

const Portfolio = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const t = useTranslations('ShortDescription');

  useEffect(() => {
    let greetingInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 200);

    const timer = setTimeout(() => {
      clearInterval(greetingInterval);
      setShowLoader(false);
    }, 1200);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showLoader ? (
        <motion.div
          initial={{opacity: 1}}
          exit={{opacity: 0}}
          className="fixed inset-0 bg-background flex items-center justify-center z-50"
        >
          <motion.div
            key={greetingIndex}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            className="text-4xl font-light"
          >
            {greetings[greetingIndex].text}
          </motion.div>
        </motion.div>
      ) : (
        <>
          <ShortDescription />
          <Experience />
          {/* <NewCarousel /> */}
          <ProjectsCarousel />
          <ContactForm />
        </>
      )}
    </AnimatePresence>
  );
};

export default Portfolio;
