"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Zap, 
  Wrench, 
  FlaskConical, 
  Activity, 
  Settings,
  ExternalLink,
  ChevronUp,
  BookOpen,
  Target,
  Lightbulb,
  Star,
  HardHat,
  Cog,
  Building
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

export default function Engineering() {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8 relative flex justify-center">
      
      {/* Scroll to Top */}
      <ScrollToTop />

      <div className="w-full max-w-5xl lg:max-w-4xl xl:max-w-5xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <HardHat size={48} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-blue-500 mb-6 scroll-mt-28" id="top">
            Engineering Internships: A Complete Guide
          </h1>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl shadow-xl overflow-hidden p-8 mb-10 border border-gray-700/50">
            <p className="text-xl mb-8 leading-relaxed">
              Engineering internships provide hands-on experience across diverse fields from circuit design to infrastructure development. 
              These roles combine theoretical knowledge with practical application, offering exposure to industry tools, 
              real-world problem-solving, and professional engineering practices.
            </p>
          </div>
        </div>        
        
        {/* 1. Electrical Engineering */}
        <AdviceBlock
          id="electrical"
          icon={<Zap size={24} className="text-orange-400" />}
          title="Electrical Engineering"
          number="1"
          isEven={false}
        >
          <p className="text-xl mb-6">Electrical engineering internships give you direct experience in:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">            <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Wrench size={20} className="text-blue-400" />
              <span className="text-lg">Circuit design, PCB (Printed Circuit Board) layout, and embedded systems (small computers built into devices)</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <Zap size={20} className="text-green-400" />
              <span className="text-lg">Power distribution (delivering electricity safely) and signal processing (filtering and analyzing electronic signals)</span>
            </div>
          </div>          <div className="bg-blue-900/20 p-6 rounded-xl mb-6 border-l-4 border-blue-400">
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <Target size={20} />
              Tools commonly used:
            </h3>
            <div className="space-y-2 mb-4">
              <p className="text-lg"><strong>MATLAB</strong> - Mathematical computing software for analysis and simulation</p>
              <p className="text-lg"><strong>Simulink</strong> - Graphical programming environment for modeling dynamic systems</p>
              <p className="text-lg"><strong>LabVIEW</strong> - Laboratory Virtual Instrument Engineering Workbench for data acquisition</p>
              <p className="text-lg"><strong>PSpice</strong> - Circuit simulation software for electronic design</p>
            </div>
            
            <h3 className="text-xl font-semibold text-blue-400 mb-3 flex items-center gap-2">
              <BookOpen size={20} />
              What to expect:
            </h3>            <p className="text-lg mb-4">Work on prototyping circuits (building and testing electronic components), testing embedded devices (small computers in everyday products), or supporting automation projects (making machines work automatically).</p>
            <p className="text-lg">In energy and electronics firms, interns often assist with hardware-software integration (making physical components work with computer programs) or control systems diagnostics (troubleshooting automated systems).</p>
          </div>

          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Star size={20} />
              Why it matters:
            </h3>
            <p className="text-lg mb-4">Internships over 10 weeks often lead to pre-placement offers due to the steep learning curve of tools and lab procedures.</p>
            <p className="text-lg">The electrical and electronics sector continues to lead Malaysia's exports and is a major employer for engineering graduates.</p>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.mida.gov.my/industries/electrical-electronics/</p>
          </div>
        </AdviceBlock>
        
        {/* 2. Chemical Engineering */}
        <AdviceBlock
          id="chemical"
          icon={<FlaskConical size={24} className="text-orange-400" />}
          title="Chemical Engineering"
          number="2"
          isEven={true}
        >
          <p className="text-xl mb-6">Chemical engineering internships are often found in:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Building size={20} className="text-blue-400" />
              <span className="text-lg">Petrochemical plants</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <FlaskConical size={20} className="text-green-400" />
              <span className="text-lg">Pharmaceutical companies</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <Settings size={20} className="text-purple-400" />
              <span className="text-lg">Food processing factories</span>
            </div>
          </div>          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <span className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-2">
                <Wrench size={18} />
                Tools commonly used:
              </span>
              <div className="space-y-1 ml-6">
                <p className="text-lg"><strong>Aspen Plus</strong> - Computer software that helps engineers design and simulate chemical processes</p>
                <p className="text-lg"><strong>HYSYS</strong> - Software that creates virtual models of oil and gas processing systems</p>
                <p className="text-lg"><strong>MATLAB</strong> - Mathematical software that helps solve complex problems and analyze data</p>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
              <span className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-2">
                <Target size={18} />
                Common intern tasks:
              </span>
              <span className="text-lg">Computer modeling of chemical processes, testing product quality, ensuring safety rules are followed, and running laboratory tests</span>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-6 rounded-xl mb-6 border-l-4 border-yellow-400">
            <p className="text-lg">Longer internships can involve working on making small-scale processes work at industrial size (scale-up), testing new ideas in small experimental plants (pilot studies), or finding ways to reduce production costs</p>
          </div>

          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Lightbulb size={20} />
              Why it matters:
            </h3>
            <p className="text-lg mb-4">Working in real factories helps you learn important safety practices and understand how production processes work — skills essential for both research and manufacturing jobs.</p>
            <p className="text-lg">Chemical engineers are in high demand in Malaysia's growing palm oil, biofuel, and pharmaceutical industries.</p>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.jobstreet.com.my/en/cms/employer/chemical-engineering-career-path/</p>
          </div>
        </AdviceBlock>
        
        {/* 3. Biomedical Engineering */}
        <AdviceBlock
          id="biomedical"
          icon={<Activity size={24} className="text-orange-400" />}
          title="Biomedical Engineering"
          number="3"
          isEven={false}
        >
          <p className="text-xl mb-6">Biomedical engineering internships combine engineering with healthcare.</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
              <Wrench size={24} className="text-blue-400 mx-auto mb-2" />
              <p className="text-lg">Medical device prototyping</p>
            </div>
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20 text-center">
              <Activity size={24} className="text-green-400 mx-auto mb-2" />
              <p className="text-lg">Clinical trials support</p>
            </div>
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 text-center">
              <BookOpen size={24} className="text-purple-400 mx-auto mb-2" />
              <p className="text-lg">Regulatory document preparation</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
              <span className="text-lg font-semibold text-blue-400 flex items-center gap-2 mb-2">
                <Settings size={18} />
                Tools commonly used:
              </span>
              <span className="text-lg">SolidWorks, MATLAB, ImageJ</span>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-500/20">
              <span className="text-lg font-semibold text-green-400 flex items-center gap-2 mb-2">
                <Building size={18} />
                Typical placements:
              </span>
              <span className="text-lg">Hospital labs, biotech startups, medical device companies (e.g., Medtronic, Boston Scientific)</span>
            </div>
          </div>

          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Star size={20} />
              Why it matters:
            </h3>
            <p className="text-lg mb-4">10+ week internships give students more hands-on validation work, clinical exposure, or compliance processes (e.g., FDA or CE mark).</p>
            <p className="text-lg">Biomedical engineering is one of the fastest growing sectors globally, with strong internship-to-hiring conversion in med-tech.</p>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.bls.gov/ooh/architecture-and-engineering/biomedical-engineers.htm</p>
          </div>
        </AdviceBlock>
        
        {/* 4. Civil Engineering */}
        <AdviceBlock
          id="civil"
          icon={<Building size={24} className="text-orange-400" />}
          title="Civil Engineering"
          number="4"
          isEven={true}
        >
          <p className="text-xl mb-6">Civil engineering internships put you on-site for real infrastructure work.</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <HardHat size={20} className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-blue-400 mb-1">Intern responsibilities:</h4>
                <p className="text-gray-300">Site inspections, surveying, AutoCAD drafting, quantity takeoffs, and project reports</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <Settings size={20} className="text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-green-400 mb-1">Tools commonly used:</h4>
                <p className="text-gray-300">AutoCAD, Civil 3D, STAAD.Pro</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <Building size={20} className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-purple-400 mb-1">Where they intern:</h4>
                <p className="text-gray-300">Construction firms, local councils, or government engineering departments</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Lightbulb size={20} />
              Why it matters:
            </h3>
            <p className="text-lg mb-4">Interns who participate in actual field supervision or project tracking develop strong communication and project management skills.</p>
            <p className="text-lg">Malaysia's infrastructure push under 12MP is generating civil engineering internship demand in rail, road, and water sectors.</p>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.thestar.com.my/news/nation/2021/09/28/12mp-2021-2025-full-document</p>
          </div>
        </AdviceBlock>
        
        {/* 5. Mechanical Engineering */}
        <AdviceBlock
          id="mechanical"
          icon={<Cog size={24} className="text-orange-400" />}
          title="Mechanical Engineering"
          number="5"
          isEven={false}
        >
          <p className="text-xl mb-6">Mechanical engineering internships are diverse and practical.</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Cog size={20} className="text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-blue-400 mb-1">Interns often work on:</h4>
                <p className="text-gray-300">CAD modeling, stress simulation, HVAC layouts, or prototyping for robotics or automotive</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
              <Wrench size={20} className="text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-green-400 mb-1">Tools commonly used:</h4>
                <p className="text-gray-300">SolidWorks, ANSYS, CATIA, MATLAB</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <Building size={20} className="text-purple-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-medium text-purple-400 mb-1">Where they intern:</h4>
                <p className="text-gray-300">Aerospace, manufacturing, HVAC, automotive, or automation firms</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 p-6 rounded-xl mb-6 border-l-4 border-green-400">
            <h3 className="text-xl font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Star size={20} />
              Why it matters:
            </h3>
            <p className="text-lg mb-4">Interns involved in complete product cycles — from concept to test — are more confident, job-ready, and often retained post-graduation.</p>
            <p className="text-lg">Mechanical engineers remain among the top 10 most hired STEM graduates in Malaysia.</p>
          </div>
          
          <div className="border-t border-gray-700 pt-4 mt-6">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <ExternalLink size={14} />
              Source:
            </p>
            <p className="text-sm text-gray-400">https://www.topuniversities.com/university-subject-rankings/2024/engineering-mechanical</p>
          </div>
        </AdviceBlock>
      </div>
    </div>
  );
}
