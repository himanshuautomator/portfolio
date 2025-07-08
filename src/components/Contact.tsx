'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  message: string;
  _subject: string;
  _replyto: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    _subject: 'New Contact Form Submission',
    _replyto: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const contactInfo = [
    {
      title: 'Email',
      value: 'himanshu.automator@gmail.com',
      icon: EnvelopeIcon,
      href: 'mailto:himanshu.automator@gmail.com'
    },
    {
      title: 'Phone',
      value: '+91 8219042054',
      icon: PhoneIcon,
      href: 'tel:+918219042054'
    },
    {
      title: 'Skype',
      value: 'himanshuthakursolan',
      icon: EnvelopeIcon,
      href: 'skype:himanshuthakursolan?chat'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      if (name === 'email') {
        return { ...prev, [name]: value, _replyto: value };
      }
      return { ...prev, [name]: value };
    });
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (validateForm()) {
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...formData
          })
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            message: '',
            _subject: 'New Contact Form Submission',
            _replyto: ''
          });
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        setSubmitStatus('error');
      }
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Ready to start your next project? Get in touch with me today.
            </p>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center space-x-4 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <item.icon className="h-6 w-6" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                Send Me a Message
              </h3>
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                      errors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 