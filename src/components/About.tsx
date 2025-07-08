'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Passionate about creating efficient digital solutions
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Education & Background */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Education & Background</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Bachelor in Computer Science</h4>
                  <p className="text-gray-600 mt-1">
                    Strong foundation in computer science principles and programming concepts
                  </p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">Professional Journey</h4>
                  <p className="text-gray-600 mt-1">
                    Years of experience in web development, specializing in WordPress and automation solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Skills & Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <CodeBracketIcon className="h-8 w-8 text-blue-600 mr-4" />
                <h3 className="text-xl font-bold text-gray-900">Skills & Expertise</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">WordPress</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Custom Themes
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Plugin Development
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Performance Tuning
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Security Hardening
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">n8n & Automation</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Workflow Design
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      API Integration
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Custom Nodes
                    </li>
                    <li className="flex items-center text-gray-600">
                      <span className="mr-2">•</span>
                      Process Optimization
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 