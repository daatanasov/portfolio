import {useEffect, useState} from 'react';
import {Card, CardHeader, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import {ChevronLeft, ChevronRight, ExternalLink} from 'lucide-react';
import {useSwipeable} from 'react-swipeable';
import oblakbg from '../../public/oblakbg.webp';
import portfolio from '../../public/portfolio.webp';
import diskbg from '../../public/diskbg.webp';
import backoffice from '../../public/backoffice.webp';
import casidincho from '../../public/casidincho.webp';
import install from '../../public/installs.webp';
import recruitment from '../../public/recruitment.webp';
import {Project} from '@/types';
import {useTranslations} from 'next-intl';

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const t = useTranslations('Projects');
  const [translatePercentage, setTranslatePercentage] = useState<number>(102.5);

  // Update translation percentage based on screen size
  useEffect(() => {
    const updateTranslatePercentage = () => {
      if (window.innerWidth < 640) {
        // mobile
        setTranslatePercentage(104.42);
      } else if (window.innerWidth < 1024) {
        // tablet
        setTranslatePercentage(103);
      } else {
        // desktop
        setTranslatePercentage(102.5);
      }
    };

    // Initial setup
    updateTranslatePercentage();

    // Add event listener for window resize
    window.addEventListener('resize', updateTranslatePercentage);

    // Cleanup
    return () =>
      window.removeEventListener('resize', updateTranslatePercentage);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      name: 'Oblakbg',
      description: t('oblakDescription'),
      image: oblakbg,
      link: 'https://oblak.bg'
    },
    {
      id: 2,
      name: 'Diskbg',
      description: t('diskDescription'),
      image: diskbg,
      link: 'https://disk.bg'
    },
    {
      id: 3,
      name: 'Portfolio',
      description: t('portfolioDescription'),
      image: portfolio,
      link: 'https://github.com/daatanasov/portfolio'
    },
    {
      id: 4,
      name: 'Casidincho',
      description: t('casinoDescription'),
      image: casidincho,
      link: 'https://github.com/daatanasov/slot-game'
    },
    {
      id: 5,
      name: 'Backoffice Web Application',
      description: t('backofficeDescription'),
      image: backoffice,
      link: ''
    },
    {
      id: 6,
      name: 'Recruitment Web Application',
      description: t('recruitmentDescription'),
      image: recruitment,
      link: ''
    },
    {
      id: 7,
      name: 'Install Web Application',
      description: t('installDescription'),
      image: install,
      link: ''
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleCardClick = (link: string) => {
    window.open(link, '_blank');
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackTouch: true
  });

  return (
    <section className="mb-8">
      <div className="relative w-full" {...swipeHandlers}>
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 gap-4"
            style={{
              transform: `translateX(-${currentIndex * translatePercentage}%)`
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full flex-none">
                <Card
                  className="h-full cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleCardClick(project.link)}
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.name}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-t-lg"
                        fill
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 relative">
                    {project.link !== '' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 hover:text-primary"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <h2 className="text-lg md:text-xl font-bold mb-2">
                      {project.name}
                    </h2>
                    <p className="text-sm md:text-base">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 left-0 md:-left-4 flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-background/10 backdrop-blur-sm shadow-md hover:bg-muted hover:text-primary hidden sm:flex"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 " />
          </Button>
        </div>

        <div className="absolute inset-y-0 right-0 md:-right-4 flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-background/10 backdrop-blur-sm shadow-md hover:bg-muted hover:text-primary hidden sm:flex"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full transition-all ${
                currentIndex === idx
                  ? 'bg-primary w-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
