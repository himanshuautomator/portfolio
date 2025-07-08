'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'WordPress Plugin Development',
    description: 'Custom WordPress plugins for enhanced functionality and user experience.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Plugin Development'],
    image: '/images/wordpress-plugin.jpg',
    category: 'WordPress'
  },
  {
    title: 'Theme Customization',
    description: 'Responsive and customized WordPress themes for various business needs.',
    tags: ['WordPress', 'CSS', 'Theme Development', 'Responsive Design'],
    image: '/images/wordpress-theme.jpg',
    category: 'WordPress'
  },
  {
    title: 'n8n Workflow Automation',
    description: 'Automated business processes using n8n with custom integrations.',
    tags: ['n8n', 'Automation', 'API Integration', 'Workflow'],
    image: '/images/n8n-automation.jpg',
    category: 'n8n'
  },
  {
    title: 'Custom API Integration',
    description: 'Integration of multiple APIs to create seamless automated workflows.',
    tags: ['API', 'Integration', 'n8n', 'Automation'],
    image: '/images/api-integration.jpg',
    category: 'n8n'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              A showcase of my WordPress development and n8n automation projects
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-bold text-white px-4 text-center">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500">{project.description}</p>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center text-sm text-blue-600">
                    <span className="hover:text-blue-800 cursor-pointer flex items-center">
                      View Details
                      <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 