export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Junior Ngu was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Junior’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Junior Ngu. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Junior was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend development are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Tutor Hunt - Tutor Finder System',
    desc: 'Tutor Hunt is an innovative platform designed to help students connect with tutors based on location, subject, and availability. It simplifies the tutor-student matching process while offering a seamless experience for both parties.',
    subdesc: 
      'Built using Laravel and Vue.js, Tutor Hunt leverages modern web development frameworks to create a responsive and user-friendly interface. This system provides features like search, booking, and payment integration.',
    href: 'https://thunt.online',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'Laravel', path: '/assets/laravel.png' },
      { id: 2, name: 'Vue.js', path: '/assets/vue.png' },
      { id: 3, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Fund4Me - Crowdfunding Platform',
    desc: 'Fund4Me is a dynamic crowdfunding platform that allows users to create and manage fundraising campaigns with ease. Whether it’s for personal projects or social causes, users can gather votes or raise funds.',
    subdesc: 
      'Using Laravel Livewire and TailwindCSS, Fund4Me provides a multi-step form for campaign creation and user-friendly navigation for fundraisers.',
    href: 'https://oppfunding.com/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Laravel', path: '/assets/laravel.png' },
      { id: 2, name: 'Livewire', path: '/assets/livewire.png' },
      { id: 3, name: 'TailwindCSS', path: '/assets/tailwindcss.png' },
    ],
  },
  {
    title: 'Agromate - E-commerce for Farming Products',
    desc: 'Agromate is a specialized e-commerce platform focused on connecting farmers with buyers for agricultural products. It streamlines the purchasing and selling process, making it easier for farmers to reach a broader market.',
    subdesc:
      'Built using Expo React Native for mobile with a Laravel backend, Agromate provides a smooth and responsive user experience, ensuring easy navigation and product discovery.',
    href: 'https://agromate.online',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React Native', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'Laravel', path: '/assets/laravel.png' },
    ],
  },
  {
    title: 'Epic360 - E-commerce Platform',
    desc: 'Epic360 is an innovative e-commerce platform designed to simplify and enhance online shopping experiences for both customers and vendors.',
    subdesc:
      'The platform was developed using Laravel and Vue.js, offering a robust, user-friendly, and scalable solution for modern e-commerce needs.',
    href: 'https://epic360.traitz.tech',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Laravel', path: '/assets/laravel.png' },
      { id: 2, name: 'Vue.js', path: '/assets/vue.png' },
      { id: 3, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
    ],
  },
  {
    title: 'GGIT - Non-Profit Website',
    desc: 'GGIT is an NGO focused on empowering young women through Tech education and mentorship. The website helps showcase their mission, activities, and allows for easy donations and volunteer applications.',
    subdesc:
      'Built with React and deployed on Hostinger, this website offers a modern, responsive interface to support the NGO’s mission and make it accessible to a global audience.',
    href: 'https://ggitech.org',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'Laravel', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'Laravel', path: '/assets/laravel.png' },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Traitz Tech Ltd (traitz.tech), Sidec (sidecedu.com)',
    pos: 'Co-founder & CTO at Traitz Tech and Sidec',
    duration: '2023-07-28 to Present',
    title: 'Co-founded Traitz Tech, a tech startup focusing on innovative software solutions. I lead the tech team, oversee all technical aspects, and work closely with the team to implement tech solutions.Co-founded Sidec, an educational institution aimed at helping students succeed. I develop full-stack solutions and ensure the platform meets the needs of students and educators',
    icon: '/assets/traitz.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'The Urega Foundation (urega.org)',
    pos: 'IT Personnel',
    duration: '2023-02-28 to Present',
    title: 'Providing IT support and solutions for Urega Foundation, an NGO focused on granting aid to underprivileged African students. Responsible for maintaining and improving the IT infrastructure.',
    icon: '/assets/urega.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'MTG Consulting',
    pos: 'Full Stack Developer',
    duration: '2023-08-28 to 2023-12-28',
    title: 'Worked as a full-stack developer at MTG Consulting, contributing to various projects by developing both front-end and back-end solutions to meet project deadlines and deliverables.',
    icon: '/assets/mtg.svg',
    animation: 'salute',
  },
  
];
