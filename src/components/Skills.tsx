import React from 'react';
import { Code, Database, GitBranch, Terminal, Languages, Globe, Server, Layout, FileJson, PenTool as Tool, Lock } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:scale-[1.02]">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full transform hover:scale-105 transition-transform duration-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={24} className="text-blue-600" />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} className="text-blue-600" />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MVC Pattern'],
    },
    {
      title: 'Database',
      icon: <Database size={24} className="text-blue-600" />,
      skills: ['MongoDB', 'Mongoose', 'SQL Basics'],
    },
    {
      title: 'Version Control',
      icon: <GitBranch size={24} className="text-blue-600" />,
      skills: ['Git', 'GitHub', 'GitLab'],
    },
    {
      title: 'API & Tools',
      icon: <Tool size={24} className="text-blue-600" />,
      skills: ['Postman', 'Thunder Client', 'Swagger'],
    },
    {
      title: 'Authentication',
      icon: <Lock size={24} className="text-blue-600" />,
      skills: ['JWT', 'OAuth', 'Passport.js'],
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={24} className="text-blue-600" />,
      skills: ['HTTP/HTTPS', 'REST', 'WebSockets'],
    },
    {
      title: 'Data Formats',
      icon: <FileJson size={24} className="text-blue-600" />,
      skills: ['JSON', 'XML', 'YAML'],
    },
    {
      title: 'Languages',
      icon: <Languages size={24} className="text-blue-600" />,
      skills: ['Hindi', 'English', 'Gujarati'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Here are the technologies and tools I've learned and worked with during my academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCategory
                title={category.title}
                skills={category.skills}
                icon={category.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;