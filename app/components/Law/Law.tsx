"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  FileText, 
  Users, 
  MessageCircle, 
  Brain,
  Scale,
  BookOpen,
  Target,
  Lightbulb,
  Star,
  ExternalLink,
  ChevronUp,
  Mail,
  Calendar,
  Award,
  Briefcase,
  Building,
  Gavel
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

// Table of Contents component
const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'gameplan', title: 'Year-by-Year Game Plan', icon: <Calendar size={16} /> },
    { id: 'cold-email', title: 'Cold Email Template', icon: <Mail size={16} /> },
    { id: 'interview', title: 'Interview Preparation', icon: <MessageCircle size={16} /> },
    { id: 'experiences', title: 'Real Student Voices', icon: <Users size={16} /> },
    { id: 'application', title: 'Application Requirements', icon: <FileText size={16} /> },
    { id: 'resources', title: 'Resources & Industry Insights', icon: <Target size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hidden lg:block sticky top-24 float-right ml-4 z-40">
      <div className="bg-slate-800 rounded-2xl shadow-xl border border-gray-700/50 p-4 max-w-xs opacity-90 hover:opacity-100 transition-all duration-300 ease-in-out">
        <h3 className="text-sm font-semibold text-blue-400 mb-4">
          Table of Contents
        </h3>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 ${
                activeSection === section.id
                  ? 'bg-blue-500/20 text-blue-400 border-l-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
              }`}
              title={section.title}
            >
              {section.icon}
              <span className="truncate">{section.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
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

export default function Law() {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative flex justify-center">
      <div className="w-full max-w-5xl lg:max-w-4xl xl:max-w-5xl">
        {/* Table of Contents */}
        <TableOfContents />
        
        {/* Scroll to Top */}
        <ScrollToTop />

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Scale size={48} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-blue-500 mb-6 scroll-mt-28" id="top">
            Law Internships: A Practical Guide for Malaysian Students
          </h1>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-xl overflow-hidden p-8 mb-10 border border-gray-700/50">
            <p className="text-xl mb-8 leading-relaxed">
              You can stand out with smart preparation and real strategies. This guide will show you exactly how to 
              navigate the journey from law student to legal intern, with clear steps and real examples.
            </p>
          </div>
        </div>        
        
        {/* 1. Year-by-Year Law Internship Game Plan */}
        <AdviceBlock
          id="gameplan"
          icon={<Calendar size={24} className="text-orange-400" />}
          title="Year-by-Year Law Internship Game Plan"
          number="1"
          isEven={false}
        >
          <div className="space-y-8">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <BookOpen size={20} />
                Year 1-2: Foundation Building
              </h3>
              <div className="space-y-3">
                <p className="text-lg">• Join your university's law society and legal aid clinic</p>
                <p className="text-lg">• Compete in a moot court or client interview competition</p>
                <p className="text-lg">• Write a short legal blog post or case commentary and post it on LinkedIn</p>
                <p className="text-lg">• Attend court hearings or public legal events</p>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <p className="text-lg text-yellow-200">
                  <Lightbulb size={18} className="inline mr-2" />
                  Even informal internships at legal NGOs or smaller firms can make a difference early on.
                </p>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                <Target size={20} />
                Year 3: Preparation & Branding
              </h3>
              <div className="space-y-3">
                <p className="text-lg">• Draft your resume and write a basic cover letter</p>
                <p className="text-lg">• Cold-email firms and ask about internship slots for your semester break</p>
                <p className="text-lg">• Optimize your LinkedIn to highlight legal experience, moots, and articles</p>
              </div>
              <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-lg">
                  <strong>Useful resource:</strong> LinkedIn Cheat Sheet for Interns
                </p>
                <a 
                  href="https://www.linkedin.com/posts/devanshiparashar_cheat-sheet-for-law-students-planning-to-activity-7199007176428777472-AXvR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1 mt-2"
                >
                  <ExternalLink size={14} />
                  View LinkedIn Post
                </a>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-400">
              <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <Award size={20} />
                Year 4: The Application Sprint
              </h3>
              <div className="space-y-3">
                <p className="text-lg">• Apply to a mix of top-tier, mid-sized, and smaller firms</p>
                <p className="text-lg">• Prepare for interviews using common legal Q&A (see below)</p>
                <p className="text-lg">• Submit writing samples (e.g. a case brief or research memo)</p>
                <p className="text-lg">• Track your applications with a simple spreadsheet or Notion table</p>
              </div>
            </div>

            <div className="bg-orange-900/20 p-6 rounded-xl border border-orange-500/20">
              <h3 className="text-xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <Building size={20} />
                Target internship types:
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
                  <Gavel size={24} className="text-blue-400 mx-auto mb-2" />
                  <p className="text-lg">Litigation and corporate law firms</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 text-center">
                  <Scale size={24} className="text-green-400 mx-auto mb-2" />
                  <p className="text-lg">High Court registry placements</p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
                  <Briefcase size={24} className="text-purple-400 mx-auto mb-2" />
                  <p className="text-lg">Legal departments in banks, telcos, or GLCs</p>
                </div>
              </div>
            </div>
          </div>
        </AdviceBlock>
        
        {/* 2. Cold Email Template for Legal Internships */}
        <AdviceBlock
          id="cold-email"
          icon={<Mail size={24} className="text-orange-400" />}
          title="Cold Email Template for Legal Internships"
          number="2"
          isEven={true}
        >
          <div className="bg-slate-700/50 p-6 rounded-xl border border-gray-600/50">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Professional Email Template</h3>
            <div className="bg-gray-800/80 p-4 rounded-lg border border-gray-600/30 font-mono text-sm">
              <p className="text-blue-300 mb-2"><strong>Subject:</strong> Application for Internship (May–July) – Law Student at [University Name]</p>
              <br />
              <p className="text-gray-300 mb-2">Dear [Mr./Ms. Partner or HR Officer],</p>
              <br />
              <p className="text-gray-300 mb-2">I am a [Year] law student at [University] currently active in [moot court/legal aid/etc.]. I'm interested in applying for an internship position at your firm from [start date] to [end date].</p>
              <br />
              <p className="text-gray-300 mb-2">Attached are my resume and a writing sample. I would be grateful for the opportunity to contribute and learn from your team.</p>
              <br />
              <p className="text-gray-300 mb-2">Sincerely,</p>
              <p className="text-gray-300 mb-1">[Your Full Name]</p>
              <p className="text-gray-300 mb-1">[Phone Number]</p>
              <p className="text-gray-300">[LinkedIn Profile URL]</p>
            </div>
            <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <p className="text-lg text-yellow-200">
                <Lightbulb size={18} className="inline mr-2" />
                Keep it concise, professional, and personalized to each firm. Research the firm's practice areas before sending.
              </p>
            </div>
          </div>
        </AdviceBlock>
        
        {/* 3. Interview Preparation */}
        <AdviceBlock
          id="interview"
          icon={<MessageCircle size={24} className="text-orange-400" />}
          title="Interview Preparation"
          number="3"
          isEven={false}
        >
          <div className="space-y-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <MessageCircle size={20} />
                Common Interview Questions
              </h3>
              <div className="space-y-3">
                <p className="text-lg">• "Why did you choose law?"</p>
                <p className="text-lg">• "Which area of law are you most interested in?"</p>
                <p className="text-lg">• "Tell us about a recent legal issue that interested you."</p>
                <p className="text-lg">• "Describe a time you handled pressure or deadlines."</p>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                <Target size={20} />
                Tips to Prepare
              </h3>
              <div className="space-y-3">
                <p className="text-lg">• Research the firm's practice areas and major cases</p>
                <p className="text-lg">• Practice your answers with a mentor or peer</p>
                <p className="text-lg">• Read up on current Malaysian legal developments from The Edge or Malaysian Bar</p>
              </div>
            </div>
          </div>
        </AdviceBlock>
        
        {/* 4. Real Student Voices */}
        <AdviceBlock
          id="experiences"
          icon={<Users size={24} className="text-orange-400" />}
          title="Real Student Voices"
          number="4"
          isEven={true}
        >
          <p className="text-xl mb-6">Learn from students who've navigated the competitive legal internship landscape:</p>
          
          <div className="space-y-6">
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400">
              <div className="flex items-start gap-3">
                <Users size={24} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg italic mb-2">"I feared applying to big firms because I didn't think I was good enough."</p>
                  <p className="text-green-300">→ Start with legal aid centers or smaller firms. Every experience counts.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 p-6 rounded-xl border-l-4 border-yellow-400">
              <div className="flex items-start gap-3">
                <Users size={24} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg italic mb-2">"Most of my prep came from speaking to seniors — not formal workshops."</p>
                  <p className="text-green-300">→ Connect with alumni or law society seniors for tips.</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-start gap-3">
                <Users size={24} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg italic mb-2">"I didn't know where to apply, so I just sent my resume to every firm I could find."</p>
                  <p className="text-green-300">→ Use a tracker and prioritize by interest or training quality.</p>
                </div>
              </div>
            </div>
          </div>
        </AdviceBlock>
        
        {/* 5. Application Requirements */}
        <AdviceBlock
          id="application"
          icon={<FileText size={24} className="text-orange-400" />}
          title="What You Need to Apply"
          number="5"
          isEven={false}
        >
          <p className="text-xl mb-6">Essential documents and requirements for legal internship applications:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <FileText size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-blue-400 mb-1">Resume</h4>
                  <p className="text-gray-300">Highlights skills (moots, writing, societies)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <Mail size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-green-400 mb-1">Cover Letter</h4>
                  <p className="text-gray-300">Short, well-structured (keep it to 1 page)</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <BookOpen size={20} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-1">Writing Sample</h4>
                  <p className="text-gray-300">Simple case brief (1–2 pages)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <Users size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-medium text-yellow-400 mb-1">LinkedIn Profile</h4>
                  <p className="text-gray-300">Updated to show activities, not just grades</p>
                </div>
              </div>
            </div>
          </div>
        </AdviceBlock>
        
        {/* 6. Resources & Industry Insights */}
        <AdviceBlock
          id="resources"
          icon={<Target size={24} className="text-orange-400" />}
          title="Resources & Industry Insights"
          number="6"
          isEven={true}
        >
          <div className="space-y-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <Search size={20} />
                Where to Find Legal Internships
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ExternalLink size={16} className="text-blue-400" />
                  <a href="https://www.kabel.my/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Kabel
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink size={16} className="text-blue-400" />
                  <a href="https://www.jobstreet.com.my/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    JobStreet – Legal Internships
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink size={16} className="text-blue-400" />
                  <a href="https://www.hiredly.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    Hiredly (Early Career Legal Jobs)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink size={16} className="text-blue-400" />
                  <a href="https://www.linkedin.com/jobs/search/?keywords=legal%20internship%20malaysia" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    LinkedIn Keyword Search
                  </a>
                </div>
                <p className="text-lg">• Law Firm Websites (look for "Careers" or "Internships" tab)</p>
              </div>
              <div className="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-lg">
                  <strong>Use this firm directory for leads:</strong>
                </p>
                <a 
                  href="https://themalaysianlawyer.com/2023/12/19/largest-law-firms-in-malaysia-2023/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-1 mt-2"
                >
                  <ExternalLink size={14} />
                  Largest Law Firms in Malaysia 2023
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-xl border-l-4 border-yellow-400">
              <div className="flex items-start gap-3">
                <Star size={24} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Legal Industry Snapshot</h3>
                  <div className="space-y-2">
                    <p className="text-lg">As of February 2023, Malaysia has <strong>21,570+</strong> practicing lawyers</p>
                    <p className="text-lg">There are <strong>37</strong> large firms with more than 30 lawyers nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://themalaysianlawyer.com/2023/12/19/largest-law-firms-in-malaysia-2023/</p>
          </div>
        </AdviceBlock>
      </div>
    </div>
  );
}
