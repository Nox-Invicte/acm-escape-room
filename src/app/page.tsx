import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background YouTube Video */}
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/rfP_6Ieczek?autoplay=1&mute=1&loop=1&playlist=rfP_6Ieczek&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          title="Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>
      
      {/* Dark overlay for better readability */}
      <div className="overlay"></div>

      {/* Top Left Logos */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-4">
        <Image
          src="/srm.webp"
          alt="SRM Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <Image
          src="/logo.jpg"
          alt="ACM Logo"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 text-center py-12 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide">
          ACM SIGAPP
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-blue-200 mb-6">
          ESCAPE ROOM
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Challenge your mind, test your skills, and escape the unknown
        </p>
      </header>

      {/* Main Content - Event Cards */}
      <main className="relative z-10 px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Event Details Card */}
          <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">What is it?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              An immersive escape room experience organized by ACM SIGAPP. Work in teams to solve puzzles, 
              crack codes, and escape before time runs out. Perfect for testing your problem-solving skills 
              and teamwork abilities.
            </p>
          </div>

          {/* Event Info Card */}
          <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Event Details</h3>
            </div>
            <div className="text-gray-300 space-y-3">
              <div className="flex items-center">
                <span className="font-semibold text-blue-300 mr-2">Date:</span>
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-blue-300 mr-2">Time:</span>
                <span>TBA</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-blue-300 mr-2">Duration:</span>
                <span>60 Minutes</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-blue-300 mr-2">Team Size:</span>
                <span>4-6 Members</span>
              </div>
            </div>
          </div>

          {/* Prizes Card */}
          <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Rewards</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Exciting prizes for winners
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Certificates for all participants
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Networking opportunities
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Learning experience
              </li>
            </ul>
          </div>

          {/* Skills Card */}
          <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Skills Needed</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Logical thinking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Problem solving
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Team collaboration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Time management
              </li>
            </ul>
          </div>

          {/* Rules Card */}
          <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Rules</h3>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Teams must work together to solve all puzzles</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>No external devices or resources allowed</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Respect the game props and environment</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Follow organizer instructions at all times</span>
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="glass-card p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
            </div>
            <div className="text-gray-300 space-y-3">
              <p className="text-center">
                Have questions? Need more information?
              </p>
              <div className="text-center">
                <p className="text-blue-300 font-semibold">ACM SIGAPP Team</p>
                <p className="text-sm">acm.sigapp@university.edu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Register Button */}
        <div className="text-center mt-16">
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            Register on Unstop
          </a>
          <p className="text-gray-400 mt-4 text-sm">
            Registration opens soon. Don&apos;t miss out!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-4 border-t border-gray-700">
        <p className="text-gray-400">
          © 2025 ACM SIGAPP. All rights reserved. | 
          <span className="text-blue-300 ml-2">Ready to escape?</span>
        </p>
      </footer>
    </div>
  );
}
