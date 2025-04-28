import React from 'react';
import { User, MapPin, Phone, Mail, GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 inline-flex items-center">
                <User className="mr-3 text-blue-600" />
                About Me
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                  <span>Surat, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-600 flex-shrink-0" />
                  <span>+91 6351237684</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-600 flex-shrink-0" />
                  <span>dhruvghinaiya90@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                  I'm a passionate Computer Engineering student with a strong foundation in full-stack development. Through my academic projects and self-directed learning, I've gained hands-on experience in building web applications using modern technologies.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                    <GraduationCap className="mr-2 text-blue-600" />
                    Education
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">B.E. in Computer Engineering</h4>
                          <p className="text-gray-600 dark:text-gray-400">S.S. Agrawal Institute of Engineering & Technology, Navsari</p>
                          <p className="text-blue-600 dark:text-blue-400 mt-2">Current CGPA: 6.84</p>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar size={16} className="mr-1" />
                          <span>2020 - 2024</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">12th Science (HSC)</h4>
                          <p className="text-gray-600 dark:text-gray-400">N.P. Jikadara U.MA.Shala</p>
                          <p className="text-blue-600 dark:text-blue-400 mt-2">Percentage: 54%</p>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar size={16} className="mr-1" />
                          <span>2018 - 2020</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;