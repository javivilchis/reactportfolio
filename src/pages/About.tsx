import React from 'react';
import { Award, BookOpen, Code, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Hi, I'm a passionate web developer, machine learning and AI connoisseur with expertise in multimedia design and extensive experience in building the best customer experience. My background encompasses numerous successful projects creating beautiful, functional, and user-friendly applications, specializing in modern web technologies while maintaining a keen eye for design.
          
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and technical workshops. My combination of technical skills and design sensibility allows me to craft exceptional digital experiences that truly engage users.
          </p>
        </div>
        <div className="relative">
          <img
            src="./src/images/javier_vilchis_duo_purple.png"
            alt="Developer at work"
            className=""
          />
          <div className="absolute inset-0 xbg-indigo-600 opacity-10 rounded-lg"></div>
        </div>
      </div>

      {/* Skills & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Code className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Technical Expertise
          </h3>
          <p className="text-gray-600">
            Proficient in React, Node.js, TypeScript, and modern web technologies
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Award className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Awards & Recognition
          </h3>
          <p className="text-gray-600">
            Received multiple awards for outstanding project contributions
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Continuous Learning
          </h3>
          <p className="text-gray-600">
            Always staying updated with the latest industry trends and technologies
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Coffee className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Project Delivery
          </h3>
          <p className="text-gray-600">
            Successfully delivered 50+ projects for clients worldwide
          </p>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-8">
          {[
            {
              year: '2011 - Present',
              role: 'Senior Full Stack Developer',
              company: 'Vistra',
              description:
                'Leading development of front-end applications to suppor our Ambit Energy brand.',
            },
            {
              year: '2008 - 2011',
              role: 'Brand Manager / Developer',
              company: 'Broadvox',
              description:
                'Developed and maintained multiple websites using multiple coding languages including Js and PHP.',
            },
           
          ].map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-8 p-6 bg-white rounded-lg shadow-md"
            >
              <div className="md:w-1/4">
                <span className="text-indigo-600 font-semibold">
                  {experience.year}
                </span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {experience.role}
                </h3>
                <h4 className="text-gray-600 font-medium mb-2">
                  {experience.company}
                </h4>
                <p className="text-gray-600">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-20">
        
        <div class="mt-10 flex items-center justify-center gap-x-6">
       
          <a href="https://docs.google.com/document/d/1OjbUH7w5kuK9svLJa0JIeNcQbp8Jt_HDnLYCcGjn2-M/edit?tab=t.0" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">full resume : Javier Vilchis</a>
          </div>
       
      </div>
    </div>
  );
};

export default About;