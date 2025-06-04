"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  DollarSign, 
  TrendingUp, 
  Building2, 
  Users,
  Settings,
  ExternalLink,
  ChevronUp,
  BookOpen,
  Target,
  Lightbulb,
  Star,
  Briefcase,
  Network,
  MessageSquare
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

export default function Business() {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative flex justify-center">
      
      {/* Scroll to Top */}
      <ScrollToTop />

      <div className="w-full max-w-5xl lg:max-w-4xl xl:max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Briefcase size={48} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-blue-500 mb-6 scroll-mt-28" id="top">
            Business & Finance Internships: Success Stories
          </h1>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-xl overflow-hidden p-8 mb-10 border border-gray-700/50">
            <p className="text-xl mb-8 leading-relaxed">
              Learn from real success stories of students who landed multiple internship offers in business and finance. 
              Discover proven strategies for networking, authentic interviewing, and strategic application processes 
              that led to opportunities at top firms like Bank of America, Blackstone, and hedge funds.
            </p>
          </div>
        </div>        
        
        {/* 1. Abigayle Peterson */}
        <AdviceBlock
          id="abigayle"
          icon={<Network size={24} className="text-orange-400" />}
          title="Abigayle Peterson — 8 Offers Through Networking"
          number="1"
          isEven={false}
        >
          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <Briefcase size={20} />
              Internship Experience:
            </h3>
            <p className="text-lg">Abigayle landed eight offers, including roles at Bank of America and SeekOut, entirely through strategic networking.</p>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Target size={20} />
              Preparation Strategies:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <MessageSquare size={18} className="text-blue-400" />
                <span className="text-lg">Mastered cold outreach</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <Users size={18} className="text-green-400" />
                <span className="text-lg">Attended niche tech/finance networking events</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Star size={18} className="text-purple-400" />
                <span className="text-lg">Used a "go-giver" mindset — offering value before asking for help</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-6 rounded-xl mb-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <Lightbulb size={20} />
              Interview Tips:
            </h3>
            <p className="text-lg">Most of her interviews came through referrals, not job boards. She focused on being authentic and relationship-driven.</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <span className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-2">
                <Settings size={18} />
                Application Platforms:
              </span>
              <div className="grid md:grid-cols-3 gap-3 ml-6">
                <span className="text-lg">LinkedIn</span>
                <span className="text-lg">Cold emails</span>
                <span className="text-lg">Slack/Discord communities</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.businessinsider.com/landed-8-internships-jobs-through-networking-tips-2025-5</p>
          </div>
        </AdviceBlock>
        
        {/* 2. Yi Ke Cao */}
        <AdviceBlock
          id="yike"
          icon={<DollarSign size={24} className="text-orange-400" />}
          title="Yi Ke Cao — Started at 16 with a Hedge Fund"
          number="2"
          isEven={true}
        >
          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <Briefcase size={20} />
              Internship Experience:
            </h3>
            <p className="text-lg">Began working at a hedge fund at 16, gaining early exposure to the finance world. She stood out through initiative and curiosity.</p>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Target size={20} />
              Preparation Strategies:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <BookOpen size={18} className="text-blue-400" />
                <span className="text-lg">Self-taught trading and valuation fundamentals</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <MessageSquare size={18} className="text-green-400" />
                <span className="text-lg">Asked questions and requested feedback frequently</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-6 rounded-xl mb-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <Lightbulb size={20} />
              Interview Tips:
            </h3>
            <p className="text-lg">Demonstrating a genuine hunger to learn and interest in finance mattered more than having all the answers.</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
              <span className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-2">
                <Settings size={18} />
                Application Platforms:
              </span>
              <div className="grid md:grid-cols-2 gap-3 ml-6">
                <span className="text-lg">Direct outreach via email</span>
                <span className="text-lg">Community connections</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.businessinsider.com/i-started-interning-at-16-wished-did-more-internships-2024-9</p>
          </div>
        </AdviceBlock>
        
        {/* 3. Elian Hilario */}
        <AdviceBlock
          id="elian"
          icon={<Building2 size={24} className="text-orange-400" />}
          title="Elian Hilario — Community College to Blackstone"
          number="3"
          isEven={false}
        >
          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <Briefcase size={20} />
              Internship Experience:
            </h3>
            <p className="text-lg">Went from community college to an internship at Blackstone via the LaunchPad program — a testament to preparation and authenticity.</p>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Target size={20} />
              Preparation Strategies:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Search size={18} className="text-blue-400" />
                <span className="text-lg">Researched Blackstone's deals, values, and team culture</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <MessageSquare size={18} className="text-green-400" />
                <span className="text-lg">Practiced clear, personal storytelling in mock interviews</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-6 rounded-xl mb-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <Lightbulb size={20} />
              Interview Tips:
            </h3>
            <p className="text-lg">He focused on being genuine and humble, showing resilience in how he communicated his background.</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
              <span className="text-lg font-semibold text-purple-400 flex items-center gap-2 mb-2">
                <Settings size={18} />
                Application Platforms:
              </span>
              <div className="grid md:grid-cols-2 gap-3 ml-6">
                <span className="text-lg">Blackstone LaunchPad</span>
                <span className="text-lg">College career offices</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.businessinsider.com/blackstone-internship-college-student-launchpad-program-2023-11</p>
          </div>
        </AdviceBlock>
        
        {/* 4. Katie Hickman */}
        <AdviceBlock
          id="katie"
          icon={<TrendingUp size={24} className="text-orange-400" />}
          title="Katie Hickman — Spring Internships as a Strategic Move"
          number="4"
          isEven={true}
        >
          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <Briefcase size={20} />
              Internship Experience:
            </h3>
            <p className="text-lg">Secured a spring internship at LSE, highlighting a growing trend in early internships as gateways to summer or graduate programs.</p>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Target size={20} />
              Preparation Strategies:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <BookOpen size={18} className="text-blue-400" />
                <span className="text-lg">Wrote tailored cover letters</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <Search size={18} className="text-green-400" />
                <span className="text-lg">Studied the structure of spring and insight programmes</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-6 rounded-xl mb-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <Lightbulb size={20} />
              Interview Tips:
            </h3>
            <p className="text-lg">Start early. Understanding company expectations in Year 1 or 2 gives a major edge.</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-lg border border-green-500/20">
              <span className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-2">
                <Settings size={18} />
                Application Platforms:
              </span>
              <div className="grid md:grid-cols-2 gap-3 ml-6">
                <span className="text-lg">University portals</span>
                <span className="text-lg">Employer-specific sites</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.thetimes.co.uk/article/spring-internships-2025-student-work-experience-vwlggtgd6</p>
          </div>
        </AdviceBlock>
        
        {/* 5. Millie */}
        <AdviceBlock
          id="millie"
          icon={<Briefcase size={24} className="text-orange-400" />}
          title="Millie (University of Sydney) — Summer Internships for Credit Analysis"
          number="5"
          isEven={false}
        >
          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-3 flex items-center gap-2">
              <Briefcase size={20} />
              Internship Experience:
            </h3>
            <p className="text-lg">Applied for summer internships in preparation for a career in credit analysis, using the internship as a dry run for full-time hiring.</p>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Target size={20} />
              Preparation Strategies:
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <BookOpen size={18} className="text-blue-400" />
                <span className="text-lg">Documented her entire application journey</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <Search size={18} className="text-green-400" />
                <span className="text-lg">Deconstructed each stage of the interview process</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-6 rounded-xl mb-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 flex items-center gap-2">
              <Lightbulb size={20} />
              Interview Tips:
            </h3>
            <p className="text-lg">Understanding what the company values helped tailor her responses to align with role expectations.</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500/10 to-green-500/10 rounded-lg border border-purple-500/20">
              <span className="text-lg font-semibold text-purple-400 flex items-center gap-2 mb-2">
                <Settings size={18} />
                Application Platforms:
              </span>
              <div className="grid md:grid-cols-2 gap-3 ml-6">
                <span className="text-lg">University services</span>
                <span className="text-lg">Direct company websites</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.studentsuper.com.au/learning-hub/acing-your-summer-internship-interviews/</p>
          </div>
        </AdviceBlock>

        {/* Industry Insights */}
        <div id="insights" className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20 scroll-mt-28">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center flex items-center justify-center gap-3">
            <TrendingUp size={32} />
            Industry Insights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-500/10 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Star size={24} className="text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-400">Investment Banking Pipeline</h3>
              </div>
              <p className="text-lg mb-3">Over 60% of graduate hires in investment banking are sourced from internship programs.</p>
              <div className="border-t border-gray-700 pt-3">
                <p className="text-sm text-gray-400">
                  <span className="flex items-center gap-2 mb-1">
                    <ExternalLink size={12} />
                    Source:
                  </span>
                  <span className="break-all">https://www.hsbc.com/careers/students-and-graduates</span>
                </p>
              </div>
            </div>
            
            <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Network size={24} className="text-green-400" />
                <h3 className="text-xl font-semibold text-green-400">Networking Impact</h3>
              </div>
              <p className="text-lg mb-3">More than 70% of finance professionals report getting jobs through referrals or direct networking.</p>
              <div className="border-t border-gray-700 pt-3">
                <p className="text-sm text-gray-400">
                  <span className="flex items-center gap-2 mb-1">
                    <ExternalLink size={12} />
                    Source:
                  </span>
                  <span className="break-all">https://www.forbes.com/sites/forbescoachescouncil/2023/07/05/referral-hiring-in-finance/</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
