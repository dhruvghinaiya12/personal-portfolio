import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, Code, Users, Briefcase, Brain, Cloud } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
  icon: React.ReactNode;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Task Management System',
      description: 'A comprehensive task management solution built with React and Node.js, featuring role-based access control and real-time task updates.',
      features: [
        'User authentication and authorization',
        'Task creation and assignment',
        'Progress tracking and status updates',
        'Admin dashboard with analytics',
        'Responsive design with Tailwind CSS'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      githubLink: 'https://github.com/dhruvghinaiya12/REACT/tree/master/task%20management%20system',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      icon: <Code className="text-blue-600" />
    },
    {
      id: 2,
      title: 'Quiz App',
      description: 'An interactive quiz application built with vanilla JavaScript, featuring dynamic question loading, score tracking, and a responsive design.',
      features: [
        'Dynamic question loading from JSON Server',
        'Real-time score tracking',
        'Timer for each question',
        'Results summary with correct answers',
        'Responsive Bootstrap interface'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'JSON Server', 'REST API'],
      githubLink: 'https://github.com/dhruvghinaiya12/javascript/tree/master/Final-Exam1',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
      icon: <Brain className="text-blue-600" />
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information using a third-party weather API, featuring a clean and intuitive interface.',
      features: [
        'Real-time weather data fetching',
        'Location-based weather information',
        'Temperature and weather conditions',
        'Responsive design',
        'Clean and modern UI'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API', 'Async/Await', 'DOM Manipulation'],
      githubLink: 'https://github.com/dhruvghinaiya12/javascript/tree/master/pr-18',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      icon: <Cloud className="text-blue-600" />
    },
    {
      id: 4,
      title: 'Notes App',
      description: 'A feature-rich note-taking application with Google authentication, search functionality, and pagination.',
      features: [
        'Google OAuth integration',
        'Rich text editor',
        'Note organization and categorization',
        'Advanced search capabilities',
        'Responsive Bootstrap UI'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'Passport.js', 'Google OAuth', 'Bootstrap'],
      githubLink: 'https://github.com/dhruvghinaiya12/Node/tree/master/Notes_App',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg',
      icon: <Users className="text-blue-600" />
    },
    {
      id: 5,
      title: 'Job Portal',
      description: 'A full-featured job portal platform connecting employers and job seekers with email notifications and company verification.',
      features: [
        'User and company registration',
        'Job posting and application system',
        'Admin verification process',
        'Email notifications',
        'Advanced job search and filtering'
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'RESTful API', 'Nodemailer'],
      githubLink: 'https://github.com/dhruvghinaiya12/Node/tree/master/Job_Portal',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      icon: <Briefcase className="text-blue-600" />
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here are some of my projects that showcase my skills in web development.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`opacity-0 animate-fade-in bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/20"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>

                <div className="lg:w-3/5 p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li 
                          key={index}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        <Tag size={12} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </a>
                    
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10 rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;