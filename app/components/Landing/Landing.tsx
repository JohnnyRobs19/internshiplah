import Link from 'next/link';
import Image from 'next/legacy/image';

export default function Landing() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex flex-col p-8 bg-gray-800">
        <div className="flex items-center justify-center mb-8">
          <Link href="#home" className="text-5xl font-bold">
            <span className="text-blue-500">Internship</span><span className="text-orange-400">Lah</span>
          </Link>
        </div>
        <div className="flex justify-center space-x-16 text-xl">
          <Link href="#advice" className="hover:text-blue-400">General Advice</Link>
          <Link href="#specific" className="hover:text-blue-400">Specific Advice</Link>
          <Link href="#about" className="hover:text-blue-400">About Us</Link>
          <Link href="#contribute" className="hover:text-blue-400">Contribute</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="text-center py-40 min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">
          <span className="text-blue-500">Internship</span><span className="text-orange-400">Lah</span>
          <br />
          <span className="text-3xl text-gray-300 font-normal mt-4 block">like an honest Malaysian</span>
        </h1>
        <p className="text-3xl mt-8">Your Internship Hunting Journey Starts Here!</p>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 px-16 bg-gray-800 text-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-400 mb-6">Our Philosophy</h2>

          <p className="text-xl leading-relaxed mb-4">
            University is more than just exams and assignments—it&apos;s a journey filled with sleepless nights, endless
            deadlines, and the occasional &quot;I can&apos;t do this anymore.&quot; Yet, despite the grind, it&apos;s also the
            foundation for what&apos;s next: the real world.
          </p>

          <p className="text-xl leading-relaxed mb-4">
            At <span className="text-orange-400 font-semibold">InternshipLah</span>, we understand the anxiety that
            comes with preparing for your first internship. The questions, the uncertainties, the fear of not
            measuring up—we&apos;ve been there. That&apos;s why our mission is simple: to bridge the gap between university
            life and the professional world with honest, practical, and experience-driven advice.
          </p>

          <p className="text-xl leading-relaxed">
            Whether you&apos;re hustling to polish your resume, practicing for interviews, or just trying to figure out
            where to start, we&apos;ve got you covered. Here, you&apos;ll find real stories from students who made it,
            step-by-step guides, and all the insider tips you need to land that first opportunity.
          </p>
        </div>
      </section>

      {/* General Advice Preview */}
      <section id="advice" className="py-24 px-16 bg-gray-900 text-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-blue-400 mb-6">General Advice</h2>

          <p className="text-xl leading-relaxed mb-4">
            Starting your internship journey can be overwhelming—applications, resumes, interviews—it&apos;s a lot to
            take in. But you don&apos;t have to go through it alone.
          </p>

          <p className="text-xl leading-relaxed mb-4">
            Our collection of tried-and-tested tips is designed to help you every step of the way. Learn how to
            craft the perfect resume, ace your interviews, and navigate workplace expectations like a pro.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            From finding the right opportunities to mastering the application process, we&apos;ve got you covered.
            Discover what it takes to stand out and secure that dream internship.
          </p>

          <Link 
            href="/general-advice" 
            className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Explore More →
          </Link>
        </div>
      </section>

      {/* Specific Advice Preview */}
      <section id="specific" className="py-24 px-16 bg-gray-900 text-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-orange-400 mb-8">Specific Advice</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Computer Science */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">              <div className="relative w-full h-48">
                <Image 
                  src="/assets/fsktm.jpg" 
                  alt="Computer Science" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Computer Science</h3>
                <p className="text-lg mb-4">Navigate the fast-paced world of technology internships with essential tips
                  on coding interviews, technical assessments, and project portfolios.</p>
                <Link 
                  href="/cs-details" 
                  className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Business & Finance */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image 
                  src="/assets/finance.jpg" 
                  alt="Business & Finance" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Business & Finance</h3>
                <p className="text-lg mb-4">Discover how to master the art of networking, ace corporate interviews, and
                  excel in finance and business-related internships.</p>
                <Link 
                  href="/business-finance" 
                  className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Law */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image 
                  src="/assets/law.jpg" 
                  alt="Law" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Law</h3>
                <p className="text-lg mb-4">Understand the requirements for law internships, from legal writing to
                  courtroom exposure, and learn how to stand out in the legal field.</p>
                <Link 
                  href="/law-internship" 
                  className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Engineering */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image 
                  src="/assets/engine.jpg" 
                  alt="Engineering" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">Engineering</h3>
                <p className="text-lg mb-4">Get practical advice for engineering internships, from technical tests to
                  hands-on project experiences and teamwork strategies.</p>
                <Link 
                  href="/engineering" 
                  className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-16 bg-gray-800 text-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-400 mb-6">About Us</h2>

          <p className="text-xl leading-relaxed mb-8">
            We are a group of passionate students from <span className="text-blue-400 font-semibold">University of
              Malaya</span> who believe in the power of knowledge-sharing. We created <span
                className="text-orange-400 font-semibold">InternshipLah</span> with one goal in mind—to help fellow
            students navigate the complex and sometimes overwhelming process of landing an internship.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            Our mission is to break down barriers, share real experiences, and provide honest, practical advice so
            you can step confidently into the professional world. Together, let&apos;s turn ambition into action and
            dreams into reality.
          </p>

          <Link 
            href="/about" 
            className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Find Out More →
          </Link>
        </div>
      </section>

      {/* How to Contribute Section */}
      <section id="contribute" className="py-24 px-16 bg-gray-900 text-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-orange-400 mb-6">How to Contribute</h2>

          <p className="text-xl leading-relaxed mb-8">
            Want to help other students succeed? Share your internship experiences, application tips, and interview
            journeys with us. Your story can be the spark that inspires others to achieve their goals.
          </p>

          <p className="text-xl leading-relaxed mb-8">
            Whether you secured a role in tech, finance, law, engineering, or any other field, your unique
            perspective matters. Join our mission to make internship hunting transparent, honest, and accessible to
            all.
          </p>

          <Link 
            href="/contribute" 
            className="bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition"
          >
            Explore More →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center text-lg">
        <p>InternshipLah © {currentYear} - <a href="https://github.com/JohnnyRobs19/internshiplah"
          className="text-blue-400 hover:underline">GitHub</a> | <a href="https://github.com/JohnnyRobs19/InternshiplahWireframe"
            className="text-blue-400 hover:underline">WireFrame</a>
        </p>
      </footer>
    </div>
  );
}
