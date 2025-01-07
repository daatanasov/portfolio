import {memo} from 'react';
import dynamic from 'next/dynamic';
import {TechIcon} from './TechIcon';
import {Experience as ExperienceType} from '@/types';
import {useTranslations} from 'next-intl';

const Experience = () => {
  const t = useTranslations('Working');
  const getIconComponent = (tech: string) => {
    switch (tech) {
      case 'PHP':
        return import('react-icons/fa').then((mod) => mod.FaPhp);
      case 'Docker':
        return import('react-icons/fa').then((mod) => mod.FaDocker);
      case 'C#':
        return import('react-icons/tb').then((mod) => mod.TbBrandCSharp);
      case 'Typescript':
        return import('react-icons/si').then((mode) => mode.SiTypescript);
      case 'JavaScript':
        return import('react-icons/fa').then((mod) => mod.FaJs);
      case 'Saga':
        return import('react-icons/si').then((mod) => mod.SiReduxsaga);
      case 'React':
        return import('react-icons/fa').then((mod) => mod.FaReact);
      case 'Redux':
        return import('react-icons/si').then((mod) => mod.SiRedux);
      case 'SQL':
        return import('react-icons/tb').then((mode) => mode.TbSql);
      case 'GitLab':
        return import('react-icons/fa').then((mode) => mode.FaGitlab);
      default:
        return import('react-icons/fa').then((mod) => mod.FaCode);
    }
  };

  const experiences: ExperienceType[] = [
    {
      position: 'Frontend Developer',
      company: 'Haemimont AD / Oblak.bg',
      period: '06/2019 - 12/2024',
      description: t('haemimontDescription'),
      technologies: [
        'JavaScript',
        'Typescript',
        'React',
        'Redux',
        'Saga',
        'PHP',
        'C#',
        'SQL',
        'GitLab',
        'Docker'
      ]
    },
    {
      position: 'Trainer',
      company: 'Logischool Bulgaria',
      period: '02/2020 - 10/2022',
      description: t('logischoolDescription'),
      technologies: []
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-6">{t('programmingExperience')}</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-4 bg-background rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <h3 className="text-lg font-semibold">{exp.position}</h3>
              <span className="font-medium">{exp.company}</span>
            </div>
            <p className="text-sm mt-1">{exp.period}</p>
            <p className="mt-3">{exp.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <TechIcon
                  key={tech}
                  icon={dynamic(() => getIconComponent(tech), {
                    loading: () => (
                      <div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />
                    )
                  })}
                  label={tech}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Experience);
