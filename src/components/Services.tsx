'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CubeIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'WordPress Development',
    description: 'Custom theme and plugin development, site optimization, and maintenance for WordPress websites.',
    icon: CodeBracketIcon,
    skills: ['Custom Theme Development', 'Plugin Development', 'Performance Optimization', 'Security Implementation']
  },
  {
    title: 'n8n Automation',
    description: 'Creating efficient automation workflows to streamline your business processes and boost productivity.',
    icon: CommandLineIcon,
    skills: ['Workflow Automation', 'API Integration', 'Custom Nodes Development', 'Process Optimization']
  },
  {
    title: 'Technical Solutions',
    description: 'End-to-end technical solutions combining WordPress and automation for maximum efficiency.',
    icon: CubeIcon,
    skills: ['System Integration', 'Technical Consulting', 'Solution Architecture', 'Performance Analysis']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Services & Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Delivering high-quality solutions in WordPress development and process automation
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div>
                  <service.icon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-gray-500">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.skills.map((skill) => (
                      <li key={skill} className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">•</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 