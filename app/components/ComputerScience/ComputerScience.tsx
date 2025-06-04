"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Code, 
  Users, 
  FileText, 
  MessageCircle, 
  Brain,
  Cpu,
  Database,
  Shield,
  Smartphone,
  Headphones,
  Github,
  ExternalLink,
  ChevronUp,
  BookOpen,
  Target,
  Lightbulb,
  Star
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

export default function ComputerScience() {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative flex justify-center">
      
      {/* Scroll to Top */}
      <ScrollToTop />

      <div className="w-full max-w-5xl lg:max-w-4xl xl:max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Cpu size={48} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-blue-500 mb-6 scroll-mt-28" id="top">
            Computer Science Internships: A Complete Guide
          </h1>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-xl overflow-hidden p-8 mb-10 border border-gray-700/50">
            <p className="text-xl mb-8 leading-relaxed">
              Computer Science internships can open the door to roles in software development, data science, cybersecurity, and beyond. 
              But with high competition and rapid changes in tech, knowing how to prepare is critical. This guide helps you navigate 
              the journey from skill-building to getting hired.
            </p>
          </div>
        </div>        
        {/* 1. Internship Discovery */}
        <AdviceBlock
          id="discovery"
          icon={<Search size={24} className="text-orange-400" />}
          title="Internship Discovery"
          number="1"
          isEven={false}
        >
          <p className="text-xl mb-6">Explore tech internship opportunities in:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Code size={20} className="text-blue-400" />
              <span className="text-lg">Software Development (building apps, websites, and programs)</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <Database size={20} className="text-green-400" />
              <span className="text-lg">Data Science & Analytics (finding patterns in large amounts of data)</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
              <Shield size={20} className="text-red-400" />
              <span className="text-lg">Cybersecurity (protecting computer systems from attacks)</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <Smartphone size={20} className="text-purple-400" />
              <span className="text-lg">Web & Mobile Development (creating websites and smartphone apps)</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20 md:col-span-2">
              <Headphones size={20} className="text-yellow-400" />
              <span className="text-lg">IT Support (helping people solve computer and technology problems)</span>
            </div>
          </div>            <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Target size={20} />
              Where to look for internships:
            </h3>
            <div className="space-y-2 mb-4">
              <p className="text-lg"><strong>LinkedIn:</strong> Professional networking platform where companies post job openings</p>
              <p className="text-lg"><strong>Kabel:</strong> Malaysian job platform connecting students with local companies</p>
              <p className="text-lg"><strong>CakeResume:</strong> Resume builder and job search platform popular in Asia</p>
            </div>
            <p className="text-lg">Job demand for computing roles is high in Malaysia and globally due to the acceleration of digital transformation.</p>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://eduspiral.com/about-us-eduspiral-consultant-services/advise-best-course-study-top-private-universities-malaysia/top-guides-choosing-the-best-course/top-job-demand-high-salary-reports-malaysia/computing-job-demand-salary/top-list-best-information-technology-it-computing-computer-science-jobs-in-demand-in-malaysia/</p>
          </div>
        </AdviceBlock>
        
        {/* 2. Skill Guidance and Preparation */}
        <AdviceBlock
          id="skills"
          icon={<Code size={24} className="text-orange-400" />}
          title="Skill Guidance and Preparation"
          number="2"
          isEven={true}
        >
          <p className="text-xl mb-6">Focus on in-demand technical skills:</p>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-6">            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <span className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-2">
                  <Code size={18} />
                  Programming Languages:
                </span>                <div className="space-y-1">
                  <p className="text-lg"><strong>Python:</strong> Beginner-friendly language for data analysis, automation, and web development</p>
                  <p className="text-lg"><strong>JavaScript:</strong> The language that makes websites interactive and dynamic</p>
                  <p className="text-lg"><strong>TypeScript:</strong> JavaScript with type safety - helps catch errors before code runs and makes large projects more maintainable</p>
                  <p className="text-lg"><strong>Java:</strong> Popular language for building large-scale applications and Android apps</p>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
                <span className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-2">
                  <Smartphone size={18} />
                  Web Development:
                </span>
                <div className="space-y-1">
                  <p className="text-lg"><strong>HTML:</strong> The structure and content of web pages (like the skeleton of a website)</p>
                  <p className="text-lg"><strong>CSS:</strong> The styling that makes websites look beautiful (colors, fonts, layouts)</p>
                  <p className="text-lg"><strong>React:</strong> A JavaScript library for building user interfaces and interactive web applications</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                <span className="text-lg font-semibold text-yellow-400 flex items-center gap-2 mb-2">
                  <Github size={18} />
                  Essential Tools:
                </span>
                <div className="space-y-1">
                  <p className="text-lg"><strong>Git:</strong> Version control system that tracks changes in your code (like "save" with history)</p>
                  <p className="text-lg"><strong>SQL:</strong> Language for managing and querying databases (asking questions to data)</p>
                  <p className="text-lg"><strong>Linux:</strong> Operating system widely used in servers and development environments</p>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                <span className="text-lg font-semibold text-purple-400 flex items-center gap-2 mb-2">
                  <Brain size={18} />
                  Computer Science Fundamentals:
                </span>
                <p className="text-lg"><strong>Data Structures & Algorithms:</strong> Efficient ways to organize and process information (the foundation of good programming)</p>
              </div>
            </div>
          </div>          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <BookOpen size={20} />
              Where to learn these skills:
            </h3>
            <div className="space-y-2">
              <p className="text-lg"><strong>GitHub:</strong> Platform to store code projects and collaborate with other developers</p>
              <p className="text-lg"><strong>LeetCode:</strong> Website with coding challenges to practice problem-solving skills</p>
              <p className="text-lg"><strong>HackerRank:</strong> Coding practice platform with tutorials and competitions</p>
              <p className="text-lg"><strong>Coursera:</strong> Online courses from universities and companies</p>
              <p className="text-lg"><strong>YouTube tutorials:</strong> Free video lessons on programming concepts and projects</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">These skills are among the top ranked by global employers in LinkedIn's 2023 skills report.</p>
            <p className="text-sm text-gray-400">https://www.linkedin.com/pulse/top-skills-companies-need-most-2023-linkedin-news/</p>
          </div>
        </AdviceBlock>
        
        {/* 3. Real-World Internship Experiences */}
        <AdviceBlock
          id="experiences"
          icon={<Users size={24} className="text-orange-400" />}
          title="Real-World Internship Experiences"
          number="3"
          isEven={false}
        >
          <p className="text-xl mb-6">Learn from CS students who've interned at startups, banks, and tech companies:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-slate-700/50 rounded-lg text-center">
              <div className="mb-2 text-2xl">🏗️</div>
              <p className="text-lg font-medium">What did they build?</p>
              <p className="text-sm text-gray-400">(Mobile apps, web applications, data dashboards, automated systems)</p>
            </div>
            <div className="p-4 bg-slate-700/50 rounded-lg text-center">
              <div className="mb-2 text-2xl">🛠️</div>
              <p className="text-lg font-medium">What tools did they use?</p>
              <p className="text-sm text-gray-400">(Programming languages, frameworks, databases, cloud platforms)</p>
            </div>
            <div className="p-4 bg-slate-700/50 rounded-lg text-center">
              <div className="mb-2 text-2xl">💡</div>
              <p className="text-lg font-medium">How did they solve challenges?</p>
              <p className="text-sm text-gray-400">(Breaking down complex problems, debugging code, learning new technologies)</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-xl mb-6 border-l-4 border-yellow-400">
            <div className="flex items-start gap-3">
              <Star size={24} className="text-yellow-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">Student Success Story</h3>
                <p className="text-lg italic">Bryan Ho, a CS student, applied to 100 internships and got 4 offers — a reminder that persistence and preparation matter.</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.businessinsider.com/computer-science-major-myth-job-security-money-salary-2023-11</p>
          </div>
        </AdviceBlock>
        
        {/* 4. Application Support */}
        <AdviceBlock
          id="application"
          icon={<FileText size={24} className="text-orange-400" />}
          title="Application Support"
          number="4"
          isEven={true}
        >
          <p className="text-xl mb-6">A clear application = better chances. Here's what to focus on:</p>
          
          <div className="space-y-4 mb-6">            <div className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <FileText size={20} className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-blue-400 mb-1">Tailor your resume for tech</h4>
                <p className="text-gray-300">Focus on coding projects, GitHub portfolio links, and technical tools you've used</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <MessageCircle size={20} className="text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-green-400 mb-1">Write a concise cover letter</h4>
                <p className="text-gray-300">Research each company's mission and explain why you want to work there specifically</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <Users size={20} className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-purple-400 mb-1">Create a professional LinkedIn profile</h4>
                <p className="text-gray-300">Showcase your technical skills, projects, and connect with professionals in tech</p>
              </div>
            </div>
          </div>          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center gap-2">
              <Lightbulb size={20} />
              Bonus Tip:
            </h3>
            <p className="text-lg">Try cold emailing or sending direct messages to recruiters on LinkedIn with a friendly, personalized message explaining your interest in their company.</p>
          </div>
        </AdviceBlock>
        
        {/* 5. Interview Preparation */}
        <AdviceBlock
          id="interview"
          icon={<MessageCircle size={24} className="text-orange-400" />}
          title="Interview Preparation"
          number="5"
          isEven={false}
        >
          <p className="text-xl mb-6">Practice common tech interview formats:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 text-center">
              <Code size={32} className="text-blue-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Online Coding Tests</h4>
              <p className="text-sm text-gray-400 mb-2">Platforms: LeetCode, HackerRank</p>
              <p className="text-xs text-gray-500">Solve programming problems within time limits</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20 text-center">
              <Brain size={32} className="text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-green-400 mb-2">Technical Interviews</h4>
              <p className="text-sm text-gray-400 mb-2">Topics: Algorithms, system design</p>
              <p className="text-xs text-gray-500">Explain how you would build or optimize systems</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/20 text-center">
              <MessageCircle size={32} className="text-yellow-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">Behavioral Interviews</h4>
              <p className="text-sm text-gray-400 mb-2">Focus: Project walkthroughs, problem-solving</p>
              <p className="text-xs text-gray-500">Discuss your past projects and how you work in teams</p>
            </div>
          </div>

          <div className="bg-orange-900/20 p-6 rounded-xl mb-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-semibold text-orange-400 mb-2 flex items-center gap-2">
              <Lightbulb size={20} />
              Tip:
            </h3>
            <p className="text-lg">When solving problems, explain your thought process clearly — communication matters as much as code.</p>
          </div>
        </AdviceBlock>
        
        {/* 6. Confidence & Career Mindset */}
        <AdviceBlock
          id="mindset"
          icon={<Brain size={24} className="text-orange-400" />}
          title="Confidence & Career Mindset"
          number="6"
          isEven={true}
        >
          <p className="text-xl mb-6">Feeling lost is normal. That's why InternshipLah exists.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
              <Users size={24} className="text-blue-400 mx-auto mb-2" />
              <p className="text-lg">See what others did and realize you're not alone</p>
            </div>
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 text-center">
              <Target size={24} className="text-green-400 mx-auto mb-2" />
              <p className="text-lg">Get clarity on how to approach your path</p>
            </div>
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
              <Brain size={24} className="text-purple-400 mx-auto mb-2" />
              <p className="text-lg">Understand that tech careers require skills, not just a degree</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 p-6 rounded-xl mb-6 border border-slate-600/50">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-yellow-400/20 rounded-full">
                <Star size={20} className="text-yellow-400" />
              </div>
              <blockquote className="text-lg italic text-gray-200">
                "Being a software engineer is like being a doctor or lawyer — it's a professional skill. Just getting a degree won't guarantee a job." 
                <cite className="block text-sm text-gray-400 mt-2">— Leong, via Business Insider</cite>
              </blockquote>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.businessinsider.com/computer-science-major-myth-job-security-money-salary-2023-11</p>
          </div>
        </AdviceBlock>
      </div>
    </div>
  );
}
