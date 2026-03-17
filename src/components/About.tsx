import { useMemo, useState } from "react";
import {
  User,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">(
    "experience",
  );

  const tabs = useMemo(
    () => [
      { id: "experience" as const, label: "Experience", icon: Briefcase },
      { id: "education" as const, label: "Education", icon: GraduationCap },
    ],
    [],
  );

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
                  I'm a MERN Stack Developer focused on building scalable,
                  production-grade web systems—multi-tenant SaaS, e-commerce
                  platforms, and real-time CRMs—using TypeScript, Next.js, Redux
                  Toolkit, Prisma, Supabase, and clean REST API architecture.
                </p>

                <div className="mt-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTab(tab.id)}
                          className={[
                            "inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 border",
                            isActive
                              ? "bg-blue-600 text-white border-blue-600 shadow-md"
                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500",
                          ].join(" ")}
                        >
                          <Icon
                            size={18}
                            className={`mr-2 ${isActive ? "text-white" : "text-blue-600"}`}
                          />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {activeTab === "experience" ? (
                 
                 <div className="space-y-6">
                 <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent">
                   
                   {/* Header Row */}
                   <div className="flex justify-between items-start gap-4">
                     <div>
                       <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                         MERN Stack Developer
                       </h4>
                       <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                         Kurm Infotech
                       </p>
                     </div>
                     <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                       <Calendar size={14} className="flex-shrink-0" />
                       <span>Jul 2025 – Present</span>
                     </div>
                   </div>
               
                   {/* Description — matches resume style */}
                   <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                     MERN Stack Developer specializing in scalable, production-grade web systems — multi-tenant SaaS, 
                     e-commerce platforms, and real-time CRMs — with proven expertise in TypeScript, Redux Toolkit, 
                     Next.js, Prisma, Supabase, Razorpay integration and REST API architecture.
                   </p>
               
                   {/* Tech Stack Pills */}
                   <div className="flex flex-wrap gap-2 mt-4">
                     {['TypeScript', 'Next.js', 'Redux Toolkit', 'Prisma', 'Supabase', 'Razorpay'].map((tech) => (
                       <span
                         key={tech}
                         className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-800"
                       >
                         {tech}
                       </span>
                     ))}
                   </div>
               
                 </div>
               </div>
                  ) : (
                    // ✅ EDUCATION content here
                    <div className="space-y-6">
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                            B.E. in Computer Engineering
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            S.S. Agrawal Institute of Engineering & Technology, Navsari
                          </p>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 flex-shrink-0 whitespace-nowrap">
                          <Calendar size={16} className="mr-1" />
                          <span>Sep 2020 - Jun 2024</span>
                        </div>
                      </div>
                    </div>
                  
                    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                            12th Science (HSC)
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            N.P. Jikadara U.MA.Shala
                          </p>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 flex-shrink-0 whitespace-nowrap">
                          <Calendar size={16} className="mr-1" />
                          <span>2018 - 2020</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  )}
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
