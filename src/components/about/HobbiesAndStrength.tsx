'use client';
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {
  Gamepad,
  Book,
  Volleyball,
  Music,
  Film,
  Globe,
  Users,
  Target,
  Brain,
  MessageSquare,
  Zap,
  UserCheck
} from 'lucide-react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {useTranslations} from 'next-intl';

const HobbiesAndStrength = () => {
  const [activeHobby, setActiveHobby] = useState(null);
  const [activeStrength, setActiveStrength] = useState(null);
  const t = useTranslations('AboutMe');
  const hobbies = [
    {
      icon: Volleyball,
      label: t('hobbiesFootball'),
      description: t('hobbiesFootballDescription')
    },
    {
      icon: Book,
      label: t('hobbiesReading'),
      description: t('hobbiesReadingDescription')
    },
    // {
    //   icon: Globe,
    //   label: 'Tech Browsing',
    //   description: 'Staying updated with latest technology trends'
    // },
    {
      icon: Film,
      label: t('hobbiesMovies'),
      description: t('hobbiesMoviesDescription')
    },
    {
      icon: Music,
      label: t('hobbiesMusic'),
      description: t('hobbiesMusicDescription')
    },
    {
      icon: Gamepad,
      label: t('hobbiesGaming'),
      description: t('hobbiesGamingDescription')
    },
    {
      icon: Users,
      label: t('hobbiesSocial'),
      description: t('hobbiesSocialDescription')
    }
  ];

  const strengths = [
    {
      icon: Target,
      label: t('strengthMotivated'),
      description: t('strengthMotivatedDescription')
    },
    {
      icon: MessageSquare,
      label: t('strengthCommunicative'),
      description: t('strengthCommunicativeDescription')
    },
    {
      icon: Brain,
      label: t('strengthBrain'),
      description: t('strengthBrainDescription')
    },
    {
      icon: UserCheck,
      label: t('strengthCharismatic'),
      description: t('strengthCharismaticDescription')
    },
    {
      icon: Zap,
      label: t('strengthLearner'),
      description: t('strengthLearnerDescription')
    }
  ];

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
    <div className="w-full max-w-4xl mx-auto p-6">
      <Tabs defaultValue="hobbies" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="hobbies" className="test">
            {t('hobbiesHeader')}
          </TabsTrigger>
          <TabsTrigger value="strengths">{t('strengthsHeader')}</TabsTrigger>
        </TabsList>

        <TabsContent value="hobbies">
          <Card className="bg-muted">
            <CardContent className="pt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.label}
                    variants={itemVariants}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                  >
                    <Button
                      variant={activeHobby === index ? 'default' : 'outline'}
                      className="w-full h-full min-h-24 flex flex-col gap-2 p-4 hover:bg-primary hover:text-white"
                      onClick={() =>
                        setActiveHobby(activeHobby === index ? null : index)
                      }
                    >
                      <hobby.icon className="w-8 h-8" />
                      <span className="text-sm font-medium">{hobby.label}</span>
                      {activeHobby === index && (
                        <motion.p
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          className="text-xs text-wrap"
                        >
                          {hobby.description}
                        </motion.p>
                      )}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strengths">
          <Card className="bg-muted">
            <CardContent className="pt-6">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.label}
                    variants={itemVariants}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                  >
                    <Button
                      variant={activeStrength === index ? 'default' : 'outline'}
                      className="w-full h-full min-h-24 flex flex-col gap-2 p-4 hover:bg-primary hover:text-white"
                      onClick={() =>
                        setActiveStrength(
                          activeStrength === index ? null : index
                        )
                      }
                    >
                      <strength.icon className="w-8 h-8" />
                      <span className="text-sm font-medium">
                        {strength.label}
                      </span>
                      {activeStrength === index && (
                        <motion.p
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          className="text-xs text-wrap"
                        >
                          {strength.description}
                        </motion.p>
                      )}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HobbiesAndStrength;
