import {useTranslations} from 'next-intl';

const AboutMe = () => {
  const t = useTranslations('AboutMe');

  return (
    <section className="mb-8">
      <h1 className="text-md md:text-2xl font-bold bg-gradient-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent">
        {t('aboutMeHeader')}
      </h1>
      <p className="mt-3">{t('description')}</p>
    </section>
  );
};

export default AboutMe;
