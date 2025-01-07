'use client';
import {useTranslations} from 'next-intl';
import {useState} from 'react';
import {motion} from 'framer-motion';
import {PlusIcon, MinusIcon} from 'lucide-react';
import {Experience as ExperienceType} from '@/types';

const WorkingExperience = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };
  const t = useTranslations('Working');

  const programmingJobs: ExperienceType[] = [
    {
      position: 'Frontend Developer',
      company: 'Haemimont AD / Oblak.bg',
      period: '06/2019 - 12/2024',
      description: t('detailedOblakDescription'),
      technologies: []
    },
    {
      position: 'Trainer',
      company: 'Logischool Bulgaria',
      period: '02/2020 - 10/2022',
      description: t('detailedLogischolDescription'),
      technologies: []
    }
  ];

  const otherJobs: ExperienceType[] = [
    {
      position: t('overgasPossition'),
      company: t('overgasCompany'),
      period: '10/2010 - 03/2019',
      description: t('detailedOvergasDescription'),
      technologies: []
    },
    {
      position: t('consultPossition'),
      company: t('consultCompany'),
      period: '11/2017 - 05/2018',
      description: t('detailedConsultDescription'),
      technologies: []
    },
    {
      position: t('gastecPossition'),
      company: t('gastecCompany'),
      period: '06/2011 - 09/2014',
      description: t('detailedGastecDescription'),
      technologies: []
    }
  ];

  return (
    <section className="mb-8">
      <h1 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent mb-3">
        {t('programmingExperience')}
      </h1>
      <div className="grid md:grid-cols-[auto,1fr] gap-8">
        <div className="space-y-8">
          {programmingJobs.map((exp, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-lg font-semibold">{exp.position}</h3>
              </div>
              <span className="font-medium">{exp.company}</span>
              <p className="text-sm mt-1">{exp.period}</p>
              <p className="mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end items-center gap-2">
        <button
          className="flex items-center gap-1 text-sm hover:text-primary font-medium"
          onClick={toggleMore}
        >
          {showMore ? (
            <>
              <MinusIcon className="w-4 h-4" />
              {t('hide')}
            </>
          ) : (
            <>
              <PlusIcon className="w-4 h-4" />
              {t('otherExperience')}
            </>
          )}
        </button>
      </div>
      <motion.div
        initial={{height: 0, opacity: 0}}
        animate={
          showMore ? {height: 'auto', opacity: 1} : {height: 0, opacity: 0}
        }
        transition={{duration: 0.5, ease: 'easeInOut'}}
        className="overflow-hidden"
      >
        <div className="mt-4 space-y-8">
          {otherJobs.map((job, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-lg font-semibold">{job.position}</h3>
              </div>
              <span className="font-medium">{job.company}</span>
              <p className="text-sm mt-1">{job.period}</p>
              <p className="mt-3">{job.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkingExperience;
