import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Tag, Check } from 'lucide-react';
import { projects } from '../data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Project Not Found
          </h2>
          <Link
            to="/#projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          to="/#projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to All Projects
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="relative h-64 md:h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 flex items-center">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg mr-4">
                  {project.icon}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h1>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Overview
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Role
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.role}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Goal
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.goal}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 transition-transform hover:scale-105"
                    >
                      <Tag size={14} className="mr-2" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Check size={14} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {project.detailedFeatures && project.detailedFeatures.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                    Detailed Features
                  </h2>
                  <div className="space-y-6">
                    {project.detailedFeatures.map((section, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {section.description}
                        </p>
                        {section.points && section.points.length > 0 && (
                          <ul className="space-y-2">
                            {section.points.map((point, pointIndex) => (
                              <li
                                key={pointIndex}
                                className="flex items-start text-gray-600 dark:text-gray-400"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {project.githubLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Github size={20} className="mr-2" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
