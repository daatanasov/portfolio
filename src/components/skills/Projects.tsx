'use client';
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {FolderGit2, Search, Github} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Input} from '@/components/ui/input';
// import {detailedProjects} from '@/lib/utils';
import {GrStatusGoodSmall} from 'react-icons/gr';
import clsx from 'clsx';
import {IoPerson} from 'react-icons/io5';
import {RiTeamFill} from 'react-icons/ri';
import {DetailedProjects} from '@/types';
import {useTranslations} from 'next-intl';

const ProjectsSkillsShowcase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const t = useTranslations('Projects');
  const detailedProjects: DetailedProjects[] = [
    {
      title: 'Personal Portfolio',
      description: t('detailedPortfolioDescription'),
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      gitRepoStatus: 'Public',
      projectStatus: 'Live',
      link: 'https://portfolio-yvla.vercel.app/',
      gitLink: 'https://github.com/daatanasov/portfolio',
      projectCreation: 'Solo'
    },
    {
      title: t('detailedCasinoTitle'),
      description: t('detailedCasinoDescription'),
      technologies: [
        'Next.js',
        'Typescript',
        'Tailwind CSS',
        'Express.js',
        'PixiJs'
      ],
      category: 'web',
      gitRepoStatus: 'Public',
      projectStatus: 'InProgress',
      gitLink: 'https://github.com/daatanasov/slot-game',
      projectCreation: 'Solo'
    },
    {
      title: t('detailedOblakTitle'),
      description: t('detailedOblakDescription'),
      technologies: [
        'React',
        'Typescript',
        'Redux/Saga',
        'C#',
        'MSQL',
        'MongoDB',
        'Stripe',
        'jQuery'
      ],
      category: 'web',
      gitRepoStatus: 'Private',
      projectStatus: 'Live',
      link: 'https://oblak.bg',
      projectCreation: 'Team'
    },
    {
      title: t('detailedDiskTitle'),
      description: t('detailedDiskDescription'),
      technologies: ['React', 'Vuejs', 'PHP Symphony', 'MariaDB', 'Redis'],
      category: 'web',
      gitRepoStatus: 'Private',
      projectStatus: 'Live',
      link: 'https://disk.bg',
      projectCreation: 'Team'
    },
    {
      title: 'Backoffice web application',
      description: t('detailedBackofficeDescription'),
      technologies: ['C#', 'MSQL'],
      category: 'web',
      gitRepoStatus: 'Private',
      projectStatus: 'Not Deployed',
      projectCreation: 'Team'
    },
    {
      title: 'Recruitment Web Application',
      description: t('detailedRecruitmentDescription'),
      technologies: ['React', 'Typescript'],
      category: 'web',
      gitRepoStatus: 'Private',
      projectStatus: 'Not Deployed',
      projectCreation: 'Solo'
    },
    {
      title: 'Install Web Application',
      description: t('detailedInstallDescription'),
      technologies: ['PHP Laravel'],
      category: 'web',
      gitRepoStatus: 'Private',
      projectStatus: 'Not Deployed',
      projectCreation: 'Team'
    }
  ];

  const filteredProjects = detailedProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center items-start justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 md:mb-0">
          <FolderGit2 className="w-6 h-6" />
          {t('title')}
        </h2>
        <div className="flex gap-4 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
            <Input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 pl-9"
            />
          </div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6"
      >
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-2 items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="mb-4 px-2 break-words">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-col min-w-36">
                      {project.gitRepoStatus === 'Private' ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 hover:text-card-foreground hover:bg-primary"
                          disabled
                        >
                          <Github className="w-4 h-4" />
                          {project.gitRepoStatus}
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 hover:text-card-foreground hover:bg-primary"
                          onClick={() => {
                            if (project.gitLink) {
                              window.open(project.gitLink, '_blank');
                            }
                          }}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:text-card-foreground hover:bg-primary"
                        disabled={project.projectStatus !== 'Live'}
                        onClick={() => {
                          if (project.link) {
                            window.open(project.link, '_blank');
                          }
                        }}
                      >
                        <GrStatusGoodSmall
                          className={clsx('w-4 h-4', {
                            'text-red-500':
                              project.projectStatus === 'Not Deployed',
                            'text-green-500': project.projectStatus === 'Live',
                            'text-orange-500':
                              project.projectStatus === 'InProgress'
                          })}
                        />
                        {project.projectStatus}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 hover:text-card-foreground hover:bg-primary"
                      >
                        {project.projectCreation === 'Solo' ? (
                          <IoPerson />
                        ) : (
                          <RiTeamFill />
                        )}
                        {project.projectCreation}
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p>{t('emptySearch')}</p>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSkillsShowcase;
