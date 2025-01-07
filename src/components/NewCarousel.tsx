import {useState} from 'react';
import {Card, CardHeader, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
// import {projects} from '@/lib/utils';
import Image from 'next/image';
import {ArrowUpRight, ChevronLeft, ChevronRight} from 'lucide-react';
import {Carousel, CarouselContent, CarouselItem} from './ui/carousel';

export default function NewCarousel() {
  const projects = [];
  return (
    <section className="mb-8">
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="pl-1 basis-11/12 md:basis-1/3"
              role="group"
              aria-roledescription="slide"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="border text-card-foreground shadow overflow-hidden border-zinc-200 rounded-md bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30">
                  <div className="p-0">
                    <div className="relative aspect-[16/9] rounded-t-md overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover relative transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2 flex items-start relative">
                      <div>
                        <h3 className="text-md from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text">
                          {project.name}
                        </h3>
                        <p className="text-xs text-zinc-400">
                          {project.description}
                        </p>
                      </div>
                      <ArrowUpRight className="absolute top-2 right-2 size-3 from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text" />
                    </div>
                  </div>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
