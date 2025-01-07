import AnimatedSection from '@/components/AnimatedSection';
import AboutMe from '@/components/about/AboutMe';
import Education from '@/components/about/Education';
import HobbiesAndStrength from '@/components/about/HobbiesAndStrength';
import WorkingExperience from '@/components/about/WorkingExperience';

export default function About() {
  return (
    <>
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection>
        <Education />
      </AnimatedSection>

      <AnimatedSection>
        <WorkingExperience />
      </AnimatedSection>
      <AnimatedSection>
        <HobbiesAndStrength />
      </AnimatedSection>
    </>
  );
}
