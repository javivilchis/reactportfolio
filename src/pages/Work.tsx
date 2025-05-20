import React from 'react';
import { ArrowRight, Github, Link as LinkIcon } from 'lucide-react';

const projects = [
  {
    title: 'Ambit Cares',
    description:
      'A full-featured website to receive and track donations.',
    image: './src/images/ambitcares-website.png',
    technologies: ['HTML', 'Javascript', 'RESTFUL API', 'PHP'],
    githubUrl: 'https://www.ambitcares.org',
    liveUrl: 'https://www.ambitcares.org',
  },
  {
    title: 'Events Center',
    description:
      'A collaborative task management application with real-time updates and team features.',
    image: './src/images/eventscenter-website.png',
    technologies: ['HTML/CSS', 'Expression Engine', 'PHP'],
    githubUrl: 'https://events.ambitenergy.com',
    liveUrl: 'https://events.ambitenergy.com',
  },
  {
    title: 'Ambitsuccess',
    description:
      'A secure healthcare portal for managing patient records and appointments.',
    image: './src/images/ambitsuccess-website.png',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC'],
    githubUrl: 'https://www.ambitsuccess.com',
    liveUrl: 'https://www.ambitsuccess.com',
  },
  {
    title: 'Ambit Energy Customer App.',
    description:
      'A Simple application to view/pay your bill and see your kwh usage.',
    image: './src/images/customer-app-feature-en.png',
    technologies: ['React', 'ReactNative', 'Node.js', 'Redux'],
    githubUrl: 'https://www.ambitenergy.com',
    liveUrl: 'https://www.ambitenergy.com',
  },
  {
    title: 'App Sense Website',
    description: 'A mobile app development website for a leading mobile app development compay.',
    image: './src/images/app-sense-website.png',
    technologies: ['React', 'Node.js', 'Axios'],
    github: '',
    liveUrl: 'https://www.app-sense.com'
  }
];

const Work: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My Work
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A collection of my recent projects, showcasing my expertise in full-stack
          development and modern web technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Github className="h-5 w-5 mr-1" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <LinkIcon className="h-5 w-5 mr-1" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Start a Project Together
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Work;