"use client";

import React from 'react';

export default function ComputerScience() {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-12 text-center scroll-mt-28" id="top">Computer Science Internships: A Complete Guide</h1>
        
        <div className="bg-[#111827] rounded-2xl shadow-lg overflow-hidden p-8 mb-10">
          <p className="text-xl mb-8 leading-relaxed">
            Computer Science internships can open the door to roles in software development, data science, cybersecurity, and beyond. 
            But with high competition and rapid changes in tech, knowing how to prepare is critical. This guide helps you navigate 
            the journey from skill-building to getting hired.
          </p>
        </div>
        
        {/* 1. Internship Discovery */}
        <section className="mb-10 bg-[#111827] rounded-2xl shadow-lg overflow-hidden scroll-mt-28" id="discovery">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">1. Internship Discovery</h2>
            <p className="text-xl mb-6">Explore tech internship opportunities in:</p>
            
            <ul className="list-disc pl-5 space-y-3 mb-6">
              <li className="text-lg">Software Development</li>
              <li className="text-lg">Data Science & Analytics</li>
              <li className="text-lg">Cybersecurity</li>
              <li className="text-lg">Web & Mobile Development</li>
              <li className="text-lg">IT Support</li>
            </ul>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Where to look:</h3>
              <p className="text-lg mb-4">Try platforms like LinkedIn, Kabel, and CakeResume — they regularly feature tech roles open to students.</p>
              <p className="text-lg">Job demand for computing roles is high in Malaysia and globally due to the acceleration of digital transformation.</p>
            </div>
            
            <div className="border-t border-gray-700 pt-4 mt-6">
              <p className="text-sm text-gray-400">Source:</p>
              <p className="text-sm text-gray-400">https://eduspiral.com/about-us-eduspiral-consultant-services/advise-best-course-study-top-private-universities-malaysia/top-guides-choosing-the-best-course/top-job-demand-high-salary-reports-malaysia/computing-job-demand-salary/top-list-best-information-technology-it-computing-computer-science-jobs-in-demand-in-malaysia/</p>
            </div>
          </div>
        </section>
        
        {/* 2. Skill Guidance and Preparation */}
        <section className="mb-10 bg-[#111827] rounded-2xl shadow-lg overflow-hidden scroll-mt-28" id="skills">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">2. Skill Guidance and Preparation</h2>
            <p className="text-xl mb-6">Focus on in-demand technical skills:</p>
            
            <ul className="list-disc pl-5 space-y-4 mb-6">
              <li>
                <span className="text-lg font-semibold text-blue-400">Programming:</span>
                <span className="text-lg ml-2">Python, JavaScript, Java</span>
              </li>
              <li>
                <span className="text-lg font-semibold text-blue-400">Web Dev:</span>
                <span className="text-lg ml-2">HTML, CSS, React</span>
              </li>
              <li>
                <span className="text-lg font-semibold text-blue-400">Tools:</span>
                <span className="text-lg ml-2">Git, SQL, Linux</span>
              </li>
              <li>
                <span className="text-lg font-semibold text-blue-400">CS Fundamentals:</span>
                <span className="text-lg ml-2">Data Structures & Algorithms</span>
              </li>
            </ul>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Where to learn:</h3>
              <p className="text-lg">Use platforms like GitHub, LeetCode, HackerRank, Coursera, and YouTube tutorials.</p>
            </div>
            
            <div className="border-t border-gray-700 pt-4 mt-6">
              <p className="text-sm text-gray-400">Source:</p>
              <p className="text-sm text-gray-400">These skills are among the top ranked by global employers in LinkedIn's 2023 skills report.</p>
              <p className="text-sm text-gray-400">https://www.linkedin.com/pulse/top-skills-companies-need-most-2023-linkedin-news/</p>
            </div>
          </div>
        </section>
        
        {/* 3. Real-World Internship Experiences */}
        <section className="mb-10 bg-[#111827] rounded-2xl shadow-lg overflow-hidden scroll-mt-28" id="experiences">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">3. Real-World Internship Experiences</h2>
            <p className="text-xl mb-6">Learn from CS students who've interned at startups, banks, and tech companies:</p>
            
            <ul className="list-disc pl-5 space-y-4 mb-6">
              <li className="text-lg">What did they build? (Apps, APIs, dashboards)</li>
              <li className="text-lg">What tools did they use?</li>
              <li className="text-lg">What were the biggest challenges — and how did they solve them?</li>
            </ul>

            <div className="bg-gray-700/50 p-6 rounded-lg mb-6">
              <p className="text-lg italic">Bryan Ho, a CS student, applied to 100 internships and got 4 offers — a reminder that persistence and preparation matter.</p>
            </div>
            
            <div className="border-t border-gray-700 pt-4 mt-6">
              <p className="text-sm text-gray-400">Source:</p>
              <p className="text-sm text-gray-400">https://www.businessinsider.com/computer-science-major-myth-job-security-money-salary-2023-11</p>
            </div>
          </div>
        </section>
        
        {/* 4. Application Support */}
        <section className="mb-10 bg-[#111827] rounded-2xl shadow-lg overflow-hidden scroll-mt-28" id="application">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">4. Application Support</h2>
            <p className="text-xl mb-6">A clear application = better chances. Here's what to focus on:</p>
            
            <ul className="list-disc pl-5 space-y-4 mb-6">
              <li className="text-lg">Tailor your resume for tech: Focus on projects, GitHub links, and tools</li>
              <li className="text-lg">Write a concise cover letter that matches each company's mission</li>
              <li className="text-lg">Create a LinkedIn profile that highlights your skills and past work</li>
            </ul>

            <div className="bg-blue-900/20 p-6 rounded-lg mb-6 border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Bonus Tip:</h3>
              <p className="text-lg">Try cold emailing or DM-ing recruiters on LinkedIn with a friendly, personalized message.</p>
            </div>
          </div>
        </section>
        
        {/* 5. Interview Preparation */}
        <section className="mb-10 bg-[#111827] rounded-2xl shadow-lg overflow-hidden scroll-mt-28" id="interview">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">5. Interview Preparation</h2>
            <p className="text-xl mb-6">Practice common tech interview formats:</p>
            
            <ul className="list-disc pl-5 space-y-4 mb-6">
              <li className="text-lg">Online coding tests (LeetCode, HackerRank)</li>
              <li className="text-lg">Technical interviews (algorithms, system design)</li>
              <li className="text-lg">Behavioral interviews (project walkthroughs, problem-solving)</li>
            </ul>

            <div className="bg-orange-900/20 p-6 rounded-lg mb-6 border-l-4 border-orange-400">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">Tip:</h3>
              <p className="text-lg">When solving problems, explain your thought process clearly — communication matters as much as code.</p>
            </div>
          </div>
        </section>
        
        {/* 6. Confidence & Career Mindset */}
        <section className="mb-10 bg-[#111827] rounded-2xl shadow-lg overflow-hidden scroll-mt-28" id="mindset">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">6. Confidence & Career Mindset</h2>
            <p className="text-xl mb-6">Feeling lost is normal. That's why InternshipLah exists.</p>
            
            <ul className="list-disc pl-5 space-y-4 mb-6">
              <li className="text-lg">See what others did and realize you're not alone</li>
              <li className="text-lg">Get clarity on how to approach your path</li>
              <li className="text-lg">Understand that tech careers require skills, not just a degree</li>
            </ul>

            <div className="bg-gray-700/50 p-6 rounded-lg mb-6">
              <p className="text-lg italic">"Being a software engineer is like being a doctor or lawyer — it's a professional skill. Just getting a degree won't guarantee a job." — Leong, via Business Insider</p>
            </div>
            
            <div className="border-t border-gray-700 pt-4 mt-6">
              <p className="text-sm text-gray-400">Source:</p>
              <p className="text-sm text-gray-400">https://www.businessinsider.com/computer-science-major-myth-job-security-money-salary-2023-11</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
