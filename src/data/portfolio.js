export const portfolio = {
  brand: 'MyPortfolio',
  name: 'VaseeKaran N',
  headline: 'Aspiring Web Developer | MERN Stack Learner',
  tagline:
    'I build modern, responsive web apps with a focus on clean UI and scalable backends.',
  location: 'India',
  availability: 'Open to internships / fresher roles',

  // Optional: add a resume link (pdf / drive link). Leave empty to hide buttons.
  resumeUrl: '',

  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/your-username',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/your-username',
      icon: 'linkedin',
    },
  ],

  about:
    'I am a passionate web developer focusing on frontend and backend technologies. Currently learning MERN stack and aiming to become a full-stack developer.',

  highlights: [
    'Frontend: React, Tailwind, modern UI patterns',
    'Backend: Node.js, Express, REST APIs',
    'Database: MongoDB (basics) and schema design',
  ],

  // Preferred (grouped) skills UI
  skillGroups: [
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
    },
    { title: 'Backend', items: ['Node.js', 'Express'] },
    { title: 'Database', items: ['MongoDB'] },
  ],

  // Backwards-compatible fallback
  skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Node.js', 'Express', 'MongoDB'],

  services: [
    {
      title: 'Frontend Development',
      description:
        'Responsive pages, reusable components, and clean design systems for modern web apps.',
    },
    {
      title: 'Backend APIs',
      description:
        'REST APIs with Node.js/Express and good validation, error handling, and clean structure.',
    },
    {
      title: 'UI Polish',
      description:
        'Animations, micro-interactions, and performance-first UX to make apps feel premium.',
    },
  ],

  stats: [
    { label: 'Projects', value: '3+' },
    { label: 'Focus', value: 'MERN' },
    { label: 'Goal', value: 'Full‑Stack' },
  ],

  experience: [
    {
      role: 'MERN Stack Learner',
      company: 'Self learning',
      period: '2024 — Present',
      points: [
        'Building mini projects to practice React, Node.js and MongoDB.',
        'Learning modern UI, routing, forms, and REST APIs.',
      ],
    },
  ],

  education: [
    {
      degree: 'Your Degree',
      school: 'Your College / University',
      period: 'Year — Year',
      details: 'Add your department, grade, or major achievements here.',
    },
  ],

  certifications: [
    { title: 'React Basics', issuer: 'Online Course', year: '2025' },
    { title: 'Node.js / Express', issuer: 'Online Course', year: '2025' },
  ],

  projects: [
    {
      title: 'Project One',
      description: 'A short description of the project.',
      href: '#',
      tags: ['React', 'Tailwind'],
    },
    {
      title: 'Project Two',
      description: 'A short description of the project.',
      href: '#',
      tags: ['Node.js', 'Express'],
    },
    {
      title: 'Project Three',
      description: 'A short description of the project.',
      href: '#',
      tags: ['MongoDB', 'API'],
    },
  ],

  contact: {
    // Replace with your real email
    email: 'your.email@example.com',
  },
}
