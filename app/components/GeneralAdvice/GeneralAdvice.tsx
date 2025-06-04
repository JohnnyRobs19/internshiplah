"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Users, 
  Linkedin, 
  Building, 
  Search,
  ExternalLink,
  ChevronUp,
  Briefcase,
  BookOpen,
  Star,
  Settings
} from 'lucide-react';

// Reusable AdviceBlock component
interface AdviceBlockProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  number: string;
  children: React.ReactNode;
  isEven?: boolean;
}

const AdviceBlock: React.FC<AdviceBlockProps> = ({ id, icon, title, number, children, isEven = false }) => {
  return (
    <section 
      className={`mb-10 scroll-mt-28 transition-all duration-300 hover:scale-[1.01] ${
        isEven ? 'bg-slate-800/50' : 'bg-[#111827]'
      } rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-700/50`} 
      id={id}
    >
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-orange-400/10 rounded-lg border border-orange-400/20">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-orange-400">{number}. {title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 z-50 p-3 bg-slate-700 text-white rounded-full shadow-lg hover:bg-slate-600 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default function GeneralAdvice() {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative flex justify-center">
      <div className="w-full max-w-5xl lg:max-w-4xl xl:max-w-5xl">
        
        {/* Scroll to Top */}
        <ScrollToTop />

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Briefcase size={48} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-blue-500 mb-6 scroll-mt-28" id="top">
            General Advice for Internships
          </h1>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-xl overflow-hidden p-8 mb-10 border border-gray-700/50">
            <p className="text-xl mb-8 leading-relaxed">
              Your internship journey starts with preparation. From resume crafting to networking and professional profiles, 
              these essential strategies will help you stand out, make connections, and land opportunities that align with your career goals.
            </p>
          </div>
        </div>
        
        {/* 1. Craft a Standout Resume */}
        <AdviceBlock
          id="resume"
          icon={<FileText size={24} className="text-orange-400" />}
          title="Craft a Standout Resume"
          number="1"
          isEven={false}
        >
          <p className="text-xl mb-6">Your resume is your first impression—make it count.</p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Highlight Achievements</h3>
              <p className="text-lg">Focus on measurable accomplishments like "Increased club membership by 30%" or "Developed a budgeting app using React Native and Firebase."</p>
            </div>
            
            <div className="p-4 bg-green-900/20 rounded-lg border-l-4 border-green-400">
              <h3 className="text-xl font-semibold text-green-400 mb-2">Tailor to Each Role</h3>
              <p className="text-lg">Customize your resume for each application by including keywords from the job description to improve relevance and visibility.</p>
            </div>
            
            <div className="p-4 bg-purple-900/20 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Include Relevant Projects</h3>
              <p className="text-lg">Highlight academic, freelance, or personal projects that showcase your abilities.</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400 break-all">https://www.linkedin.com/pulse/looking-internship-start-here-rebecca-lubelski</p>
          </div>
        </AdviceBlock>
        
        {/* 2. Engage in Extracurricular Activities */}
        <AdviceBlock
          id="extracurricular"
          icon={<Users size={24} className="text-orange-400" />}
          title="Engage in Extracurricular Activities"
          number="2"
          isEven={true}
        >
          <p className="text-xl mb-6">Extracurriculars reflect initiative and a well-rounded skill set.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
              <Star size={24} className="text-blue-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-blue-400 mb-1">Pursue Your Passions</h3>
              <p>Activities like music, sports, or the arts demonstrate creativity and dedication.</p>
            </div>
            
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 text-center">
              <Users size={24} className="text-green-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-green-400 mb-1">Join Relevant Clubs</h3>
              <p>Participate in societies related to your field to gain experience and leadership.</p>
            </div>
            
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
              <BookOpen size={24} className="text-purple-400 mx-auto mb-2" />
              <h3 className="text-lg font-medium text-purple-400 mb-1">Volunteer</h3>
              <p>Volunteering highlights teamwork, empathy, and real-world problem-solving.</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400 break-all">https://www.resumegiants.com/blog/extracurricular-activities-resume</p>
          </div>
        </AdviceBlock>
        
        {/* 3. Build a Professional LinkedIn Profile */}
        <AdviceBlock
          id="linkedin"
          icon={<Linkedin size={24} className="text-orange-400" />}
          title="Build a Professional LinkedIn Profile"
          number="3"
          isEven={false}
        >
          <p className="text-xl mb-6">LinkedIn is essential for modern job searching and networking.</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="p-2 bg-blue-500/20 rounded-full flex-shrink-0">
                <Briefcase size={18} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-400 mb-1">Professional Photo & Headline</h3>
                <p>Use a clear headshot and write a headline that reflects your career goals.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="p-2 bg-green-500/20 rounded-full flex-shrink-0">
                <FileText size={18} className="text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-400 mb-1">Experience & Projects</h3>
                <p>Include internships, part-time roles, and meaningful projects with well-written descriptions.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <div className="p-2 bg-purple-500/20 rounded-full flex-shrink-0">
                <Users size={18} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-400 mb-1">Engage with Content</h3>
                <p>Post, share, and comment on relevant industry topics to improve your visibility.</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Sources:
            </p>
            <p className="text-sm text-gray-400 break-all">https://www.linkedin.com/pulse/looking-internship-start-here-rebecca-lubelski</p>
            <p className="text-sm text-gray-400 break-all">https://time.com/4214193/career-search-tips</p>
          </div>
        </AdviceBlock>
        
        {/* 4. Participate in Industrial Visits */}
        <AdviceBlock
          id="industrial-visits"
          icon={<Building size={24} className="text-orange-400" />}
          title="Participate in Industrial Visits"
          number="4"
          isEven={true}
        >
          <p className="text-xl mb-6">Industrial visits connect your studies to the professional world.</p>
          
          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Benefits of Industrial Visits:</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Building size={18} className="text-blue-400" />
                <span className="text-lg">Understand Industry Practices: Get firsthand exposure to how real-world companies operate</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <Users size={18} className="text-green-400" />
                <span className="text-lg">Network with Professionals: Use these visits to interact with experts and learn about career paths</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <BookOpen size={18} className="text-purple-400" />
                <span className="text-lg">Reflect on Learnings: Write down observations—great material for resumes and interviews</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400 break-all">https://www.sharda.ac.in/blog/reasons-why-industrial-visits-are-key-to-student-development</p>
          </div>
        </AdviceBlock>
        
        {/* 5. Utilize Job Matching Platforms */}
        <AdviceBlock
          id="job-platforms"
          icon={<Search size={24} className="text-orange-400" />}
          title="Utilize Job Matching Platforms"
          number="5"
          isEven={false}
        >
          <p className="text-xl mb-6">Job platforms help you find the right internship efficiently.</p>
          
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <span className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-2">
                <Settings size={18} />
                Malaysian Platforms for Students:
              </span>
              <div className="grid md:grid-cols-3 gap-3 ml-6">
                <span className="text-lg">Kabel</span>
                <span className="text-lg">Hiredly</span>
                <span className="text-lg">Jobstreet</span>
                <span className="text-lg">LinkedIn</span>
                <span className="text-lg">Indeed Malaysia</span>
                <span className="text-lg">Mudah</span>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-blue-900/20 rounded-xl border-l-4 border-blue-400">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Effective Platform Use:</h3>
                <ul className="space-y-2 ml-6 list-disc">
                  <li className="text-lg">Set up alerts to be first to apply when relevant roles appear</li>
                  <li className="text-lg">Focus on internships that match your goals and skills</li>
                  <li className="text-lg">Personalize each application to the company and role</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Key Resources:
            </p>
            <div className="grid md:grid-cols-2 gap-2 mt-2">
              <p className="text-sm text-gray-400 break-all">https://kabel.web.app/</p>
              <p className="text-sm text-gray-400 break-all">https://www.hiredly.com/jobs?experience=Internship</p>
              <p className="text-sm text-gray-400 break-all">https://www.jobstreet.com.my/en/job-search/internship-jobs/</p>
              <p className="text-sm text-gray-400 break-all">https://www.linkedin.com/jobs/internship-jobs/</p>
            </div>
          </div>
        </AdviceBlock>
      </div>
    </div>
  );
}
