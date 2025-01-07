'use client';
// import {education} from '@/lib/utils';
import {Education as EducationType} from '@/types';
import {useTranslations} from 'next-intl';

const Education = () => {
  const t = useTranslations('AboutMe');
  const education: EducationType[] = [
    {
      id: 1,
      educationalInstitutions: t('universityName'),
      city: t('city'),
      description: t('universityDescription'),
      yearStart: 2010,
      yearEnd: 2016,
      specilization: t('universitySpecilization')
    },
    {
      id: 2,
      educationalInstitutions: t('schoolName'),
      city: 'Sofia',
      description: t('schoolDescription'),
      yearStart: 2005,
      yearEnd: 2010,
      specilization: t('schoolSpecilization')
    }
  ];

  return (
    <section className="mb-8">
      <h1 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent mb-3">
        {t('educationHeader')}
      </h1>
      <div className="grid md:grid-cols-[auto,1fr] gap-8">
        <div className="space-y-8">
          {education.map((exp, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="text-lg font-semibold">{exp.specilization}</h3>
              </div>
              <span className="font-medium">{exp.educationalInstitutions}</span>
              <p className="text-sm mt-1">
                {exp.yearStart} - {exp.yearEnd}
              </p>
              <p className="mt-3">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
