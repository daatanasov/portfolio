'use client';
import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import type {
  Experience as ExperienceType,
  Technologies,
  DetailedProjects
} from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// export async function Translate(variable: string) {
//   const t = await useTranslations(variable);
//   return;
// }
// export const projects: Project[] = [
//   {
//     id: 1,
//     name: 'Oblakbg',
//     description:
//       'Oblak.bg is a robust cloud solution for creating and managing virtual machines.',
//     image: oblakbg,
//     link: 'https://oblak.bg'
//   },
//   {
//     id: 2,
//     name: 'Diskbg',
//     description: 'Disk.bg is a sync and share platform.',
//     image: diskbg,
//     link: 'https://disk.bg'
//   },
//   {
//     id: 3,
//     name: 'Portfolio',
//     description:
//       'My personal Portofolio showcasing my projects, skills, and expertise.',
//     image: portfolio,
//     link: 'https://github.com/'
//   },
//   {
//     id: 4,
//     name: 'Casidincho',
//     description:
//       'A dynamic and interactive casino game platform with real-time user interactions.',
//     image: casidincho,
//     link: 'https://github.com/'
//   },
//   {
//     id: 5,
//     name: 'Backoffice Web Application',
//     description: 'Employee management platform.',
//     image: backoffice,
//     link: ''
//   },
//   {
//     id: 6,
//     name: 'Recruitment Web Application',
//     description:
//       'A recruitment page designed to streamline the hiring process.',
//     image: recruitment,
//     link: ''
//   },
//   {
//     id: 7,
//     name: 'Install Web Application',
//     description:
//       'A dedicated page for downloading desktop and mobile applications.',
//     image: install,
//     link: ''
//   }
// ];

// export const education: Education[] = [
//   {
//     id: 1,
//     educationalInstitutions:
//       'University of Architecture, Civil Engineering and Geodesy (UACEG)',
//     city: 'Sofia',
//     description:
//       'During my studies, I specialized in engineering principles and hydrological systems, focusing on: Engineering Hydrology, Construction Machinery, Engineering, Geology and Hydrology, Structural Mechanics, etc. My education provided a comprehensive understanding of water resource management, structural design, and hydrological engineering.',
//     yearStart: 2010,
//     yearEnd: 2016,
//     specilization: 'Master of Irrigation and Drainage Engineering'
//   },
//   {
//     id: 2,
//     educationalInstitutions: 'SPGE “John Atanasov”',
//     city: 'Sofia',
//     description:
//       'My high school education laid a strong foundation in electronics and electrical engineering, covering: Electrical Engineering, Technical Drawing and Documentation, Analog and Digital Circuits, Converter Circuits, Application Software, Low Voltage Systems, Programming Basics, Fundamentals of Networking. This background equipped me with essential technical skills and a solid understanding of programming, system design, and electronics.',
//     yearStart: 2005,
//     yearEnd: 2010,
//     specilization: 'Microprocessors and Electronics'
//   }
// ];

// export const programmingJobs: ExperienceType[] = [
//   {
//     position: 'Frontend Developer',
//     company: 'Haemimont AD / Oblak.bg',
//     period: '06/2019 - 12/2024',
//     description: `Developed and maintained dynamic web applications using React, TypeScript, Redux, and Saga. Contributed to backend development and deployment processes using PHP, .NET, Docker, and SQL databases. Played a key role across multiple stages of the development lifecycle, including frontend, backend, deployment, support, and desktop application development. Worked on diverse projects, such as a virtual machine management platform and a sync-and-share application for files and folders, ensuring compatibility across multiple operating systems. Additionally, configured and optimized servers using Apache, IIS, and other platforms, while gaining hands-on experience with networking settings and protocols. These efforts enhanced application performance, ensured seamless connectivity, and contributed to robust system operations.`,
//     technologies: []
//   },
//   {
//     position: 'Trainer',
//     company: 'Logischool Bulgaria',
//     period: '02/2020 - 10/2022',
//     description: `Designed and delivered engaging lessons to teach programming fundamentals and principles to young learners. Utilized creative projects and interactive games to foster curiosity, problem-solving, and logical thinking in students.`,
//     technologies: []
//   }
// ];

// export const otherJobs: ExperienceType[] = [
//   {
//     position: 'Reporting and collecting of gas data',
//     company: '"Overgas Service" AD',
//     period: '10/2010 - 03/2019',
//     description: `Conducted on-site data collection and reporting related to gas usage, ensuring accuracy and completeness of records.`,
//     technologies: []
//   },
//   {
//     position: 'Office Managerr',
//     company: '"RK Consult"',
//     period: '11/2017 - 05/2018',
//     description: `Managed office operations, including organizing documentation, scheduling meetings, and liaising with external parties. Assisted in the generation and processing of architectural certificates.`,
//     technologies: []
//   },
//   {
//     position: 'Constructional Engineering Intern',
//     company: '"Gastec BG" AD',
//     period: '06/2011 - 09/2014',
//     description: `Designed and planned gas installations for indoor buildings, ensuring compliance with technical and safety standards. Installed and monitored gas systems, conducting measurements and maintenance to support system functionality.`,
//     technologies: []
//   }
// ];

// export const detailedProjects: DetailedProjects[] = [
//   {
//     title: 'Personal Portfolio',
//     description:
//       'An interactive portfolio showcasing my projects, skills, and expertise. Built with Next.js and TypeScript. Enhanced interactivity with Three.js for pixel shader animations and Framer Motion for smooth transitions. Styled using Tailwind CSS and Shadcn/UI for a modern design.',
//     technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
//     category: 'web',
//     gitRepoStatus: 'Public',
//     projectStatus: 'Live',
//     link: '',
//     gitLink: 'https://github.com',
//     projectCreation: 'Solo'
//   },
//   {
//     title: 'Casino Games',
//     description:
//       'A dynamic and interactive casino game platform with real-time user interactions. Developed using Next.js, Tailwind CSS, and Shadcn/UI for responsive design. Leveraged PixiJS for immersive game animations. Built with Express.js using TypeScript and implemented WebSocket for real-time communication.',
//     technologies: [
//       'Next.js',
//       'Typescript',
//       'Tailwind CSS',
//       'Express.js',
//       'PixiJs'
//     ],
//     category: 'web',
//     gitRepoStatus: 'Public',
//     projectStatus: 'InProgress',
//     gitLink: 'https://github.com',
//     projectCreation: 'Solo'
//   },
//   {
//     title: 'Oblak.bg – Cloud Platform',
//     description: `Oblak.bg is a robust cloud solution for creating and managing virtual machines. Built using React, TypeScript, Redux, and Saga, ensuring a seamless and responsive user interface. Developed using C# with microservices architecture, utilizing SOAP APIs and RESTful APIs. Worked with MS SQL and MongoDB for data management. Involved in networking, DNS management, and protocol handling to improve platform scalability and performance. Contributed to the legacy system using .NET Razor with jQuery. Minor contributions with Python to enhance backend capabilities.
//       `,
//     technologies: [
//       'React',
//       'Typescript',
//       'Redux/Saga',
//       'C#',
//       'MSQL',
//       'MongoDB',
//       'Stripe',
//       'jQuery'
//     ],
//     category: 'web',
//     gitRepoStatus: 'Private',
//     projectStatus: 'Live',
//     link: 'https://oblak.bg',
//     projectCreation: 'Team'
//   },
//   {
//     title: 'Disk.bg – File Synchronization and Sharing Platform',
//     description:
//       'Disk.bg is a file sync and sharing platform enabling users to manage files, photos, and folders efficiently. Developed with React, Vue.js, and PHP to create a modern and responsive interface. Utilized PHP with Symfony for robust server-side development. Employed MariaDB and Redis for caching and efficient data handling. Developed desktop applications in C++ to extend platform functionality.',
//     technologies: ['React', 'Vuejs', 'PHP Symphony', 'MariaDB', 'Redis'],
//     category: 'web',
//     gitRepoStatus: 'Private',
//     projectStatus: 'Live',
//     link: 'https://disk.bg',
//     projectCreation: 'Team'
//   },
//   {
//     title: 'Backoffice web application',
//     description:
//       'Employee management platform. A comprehensive internal platform for managing employee data, enabling edits, updates, and monitoring. Built with .NET Razor for dynamic server-side rendering. Utilized MS SQL and microservices for reliable and scalable data operations.',
//     technologies: ['C#', 'MSQL'],
//     category: 'web',
//     gitRepoStatus: 'Private',
//     projectStatus: 'Not Deployed',
//     projectCreation: 'Team'
//   },
//   {
//     title: 'Recruitment Web Application',
//     description:
//       'A recruitment page designed to streamline the hiring process by integrating with SmartRecruiter API. Built with React and TypeScript to provide a user-friendly and efficient interface.',
//     technologies: ['React', 'Typescript'],
//     category: 'web',
//     gitRepoStatus: 'Private',
//     projectStatus: 'Not Deployed',
//     projectCreation: 'Solo'
//   },
//   {
//     title: 'Install Web Application',
//     description:
//       'A dedicated page for downloading desktop and mobile applications. Developed using PHP with Laravel Blade templates for simple and efficient rendering',
//     technologies: ['PHP Laravel'],
//     category: 'web',
//     gitRepoStatus: 'Private',
//     projectStatus: 'Not Deployed',
//     projectCreation: 'Team'
//   }
// ];

export const technologies: Technologies = {
  'Operating Systems': [
    {name: 'Windows', level: 'Advanced'},
    {name: 'Linux', level: 'Intermediate'},
    {name: 'macOS', level: 'Beginner'}
  ],
  'Programming Languages': [
    {name: 'JavaScript', level: 'Advanced'},
    {name: 'TypeScript', level: 'Advanced'},
    {name: 'Nodejs', level: 'Intermediate'},
    {name: 'C#', level: 'Intermediate'},
    {name: 'PHP', level: 'Intermediate'}
  ],
  'Frameworks & Tools': [
    {name: 'React', level: 'Advanced'},
    {name: 'Vuejs', level: 'Beginner'},
    {name: 'jQuery', level: 'Intermediate'},
    {name: 'Next.js', level: 'Intermediate'},
    {name: 'Express.js', level: 'Intermediate'},
    {name: 'PixiJs', level: 'Beginner'},
    {name: 'Three.js', level: 'Beginner'},
    {name: 'PHP Laravel', level: 'Intermediate'},
    {name: 'Docker', level: 'Intermediate'},
    {name: 'IIS', level: 'Intermediate'},
    {name: 'Apache', level: 'Intermediate'},
    {name: 'SQL', level: 'Intermediate'},
    {name: 'NoSQL', level: 'Intermediate'}
  ]
};
