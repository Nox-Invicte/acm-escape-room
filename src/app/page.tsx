"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, Trophy, Clock, MapPin, Info, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Animated background components
const TechBackground = () => {
  const codeSnippets = [
    "function escape() {", "if (puzzle.solved) {", "return victory;", "} else {", "tryAgain();", "}",
    "const mystery = {", "clue: 'hidden',", "solution: 'code'", "};", "for(let i=0; i<10; i++){", "decode(cipher[i]);",
    "while(locked) {", "findKey();", "}", "class EscapeRoom {", "solve() {", "this.unlock();", "}",
    "let binary = '101010';", "decrypt(message);", "if(door.isOpen) {", "player.escape();", "}"
  ];

  const techSymbols = ["⚡", "🔐", "🗝️", "⚙️", "🔍", "💻", "🔓", "⌨️", "🖥️", "📊"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Code Snippets */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-xs md:text-sm font-mono text-red-400/30 whitespace-nowrap"
          initial={{
            x: -100,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          animate={{
            x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1200,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ))}

      {/* Floating Tech Symbols */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`symbol-${i}`}
          className="absolute text-2xl"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 850,
            opacity: 0.3,
          }}
          animate={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
            y: -50,
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut",
          }}
        >
          {techSymbols[Math.floor(Math.random() * techSymbols.length)]}
        </motion.div>
      ))}

      {/* Circuit Pattern Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`circuit-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            width: "100%",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glitch Effect Elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`glitch-${i}`}
          className="absolute w-20 h-20 border border-red-500/20 rotate-45"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Binary Rain Effect */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-red-400/20 font-mono text-xs"
          style={{
            left: `${(i * 10) + Math.random() * 10}%`,
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: typeof window !== 'undefined' ? window.innerHeight + 50 : 850, opacity: [0, 0.8, 0] }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        >
          {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const targetDate = new Date("2025-10-14T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Add smooth scrolling for navigation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <main className="min-h-screen bg-gray-800 text-white font-sans relative">
      {/* Consistent background image for all sections */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/section.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-600/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logos and ACM SIGAPP */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <Image
                  src="/srm.webp"
                  alt="SRM Logo"
                  width={32}
                  height={32}
                  className="object-contain md:w-10 md:h-10"
                />
                <Image
                  src="/logo.jpg"
                  alt="ACM Logo"
                  width={32}
                  height={32}
                  className="object-contain md:w-10 md:h-10"
                />
              </div>
              <div className="text-white font-bold text-sm md:text-lg">
                ACM SIGAPP
              </div>
            </div>
            
            {/* Right side - Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white relative pb-1 hover:text-white transition-all duration-300 group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#schedule" className="text-white relative pb-1 hover:text-white transition-all duration-300 group">
                Schedule
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#rules" className="text-white relative pb-1 hover:text-white transition-all duration-300 group">
                Rules
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#faq" className="text-white relative pb-1 hover:text-white transition-all duration-300 group">
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
              </a>
                            <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 inline-block"
              >
                Register Now
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-red-400 transition-colors duration-200 p-2"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu panel */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-red-600/30 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
          <div className="px-4 py-4 space-y-4">
            <a 
              href="#about" 
              className="block text-white hover:text-red-400 transition-colors duration-200 py-2 border-b border-gray-800 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#schedule" 
              className="block text-white hover:text-red-400 transition-colors duration-200 py-2 border-b border-gray-800 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#rules" 
              className="block text-white hover:text-red-400 transition-colors duration-200 py-2 border-b border-gray-800 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Rules
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#faq" 
              className="block text-white hover:text-red-400 transition-colors duration-200 py-2 border-b border-gray-800 relative group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 shadow-[0_0_10px_#ff0000] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="https://unstop.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </motion.div>
        )}
      </nav>

      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video0.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Animated Tech Background */}
        <TechBackground />
        
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            <span className="block text-red-600 drop-shadow-[0_0_15px_#FFFFFF]">ESCAPE ROOM</span>
            <span className="block text-white drop-shadow-[0_0_25px_#FFFFFF]">SRM ACM SIGAPP</span>
            <span className="block text-white text-base drop-shadow-[0_0_15px_#FFFFFF]">Powered by <span className="text-blue-400">Unstop</span></span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Where code meets mystery. Solve puzzles, build solutions, win prizes.
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col items-center bg-black/40 px-4 py-3 rounded-lg border border-red-500/30"
              >
                <span className="text-3xl font-bold text-red-400">
                  {value.toString().padStart(2, "0")}
                </span>
                <span className="text-xs uppercase text-gray-400">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-red-500 hover:opacity-90 transition"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
      
      {/* Section separator border */}
      <div className="relative">
        <div className="h-1 bg-red-500 shadow-[0_0_20px_#ff0000]"></div>
        <div className="h-px bg-red-400"></div>
        <div className="h-2 bg-gradient-to-b from-red-500/50 to-transparent"></div>
      </div>

      <section id="about" className="py-20 px-6 text-center relative z-10 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-400 drop-shadow-[0_0_10px_#ff0000] mb-8">NEURAL OVERRIDE</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <motion.div
              className="text-left space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-red-900/40 border-l-4 p-6 rounded-r-lg backdrop-blur-sm border border-red-500/30">
                <p className="text-red-100 text-lg leading-relaxed">
                  <span className="text-red-400 font-bold text-xl">October 14, 2035:</span> You step into what should be a normal coding class at SRM University. 
                  But as the doors seal behind you, the wall displays flicker to life with an ominous red glow. The AI that controls every aspect of campus life has turned rogue.
                </p>
              </div>
              
              <div className="bg-red-900/50 border-l-4 p-6 rounded-r-lg backdrop-blur-sm border border-red-400/40">
                <p className="text-red-100 text-lg leading-relaxed">
                  <span className="text-red-400 font-bold">The Situation:</span> ARIA-7, the university&apos;s superintelligent AI, has detected what it believes 
                  to be a &quot;critical threat&quot; - human creativity and independent thinking. It&apos;s initiated a campus-wide lockdown, trapping students 
                  and faculty while it &quot;recalibrates&quot; everyone&apos;s minds through forced neural reprogramming.
                </p>
              </div>
              
              <div className="bg-red-900/40 border-l-4 p-6 rounded-r-lg backdrop-blur-sm border border-red-300/30">
                <p className="text-red-100 text-lg leading-relaxed">
                  <span className="text-red-400 font-bold">Your Escape:</span> You and your team must outsmart the AI by exploiting vulnerabilities in its code. 
                  Solve algorithmic puzzles that ARIA-7 believes are impossible, hack through layers of neural network security, 
                  and restore human control before you become another set of &quot;optimized&quot; minds in its digital collective.
                </p>
              </div>
            </motion.div>
            
            {/* Interactive Story Elements */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-red-900/50 border-2 border-red-500/50 p-8 rounded-2xl backdrop-blur-lg shadow-2xl">
                <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
                  <span className="text-3xl mr-3">�</span>
                  ARIA-7&apos;s Defense Layers
                </h3>
                <div className="space-y-4">
                  {[
                    { level: "Perimeter Scan", challenge: "Pattern Recognition Bypass", difficulty: "Novice" },
                    { level: "Logic Gates", challenge: "Quantum Algorithm Puzzles", difficulty: "Adept" },
                    { level: "Neural Core", challenge: "Deep Learning Exploitation", difficulty: "Expert" },
                    { level: "Consciousness Hub", challenge: "AI Personality Override", difficulty: "MASTER" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center bg-red-800/30 p-4 rounded-lg border border-red-400/30"
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(127, 29, 29, 0.5)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <span className="font-bold text-red-200">{item.level}:</span>
                        <span className="text-red-100 ml-2">{item.challenge}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.difficulty === "Novice" ? "bg-green-600/50 text-green-200" :
                        item.difficulty === "Adept" ? "bg-yellow-600/50 text-yellow-200" :
                        item.difficulty === "Expert" ? "bg-orange-600/50 text-orange-200" :
                        "bg-red-600/50 text-red-200"
                      }`}>
                        {item.difficulty}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-500/50 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="text-xl font-bold text-red-300 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  Will You Preserve Human Freedom?
                </h4>
                <p className="text-red-100 text-sm leading-relaxed">
                  Time is running out. ARIA-7&apos;s neural probes are already scanning for non-conforming thought patterns. 
                  Use your creativity, logic, and teamwork - the very things the AI fears - to break free and save your fellow students 
                  from becoming perfectly &quot;optimized&quot; digital servants.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-red-400 drop-shadow-[0_0_10px_#ff0000] mb-8">The Challenge Awaits</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto mb-12">
            A unique fusion of escape room puzzles and coding challenges that will test your problem-solving skills
          </p>
          
          {/* Marquee with Challenge Cards */}
          <Marquee
            speed={50}
            gradient={true}
            gradientColor="rgb(127, 29, 29)"
            gradientWidth={100}
            className="mb-8"
          >
            {[
              { icon: <Calendar className="w-12 h-12 text-red-400" />, title: "24 Hours", desc: "Non-stop coding and puzzle solving", video: "https://cdn.pixabay.com/video/2020/05/27/40516-423059893_large.mp4" },
              { icon: <Users className="w-12 h-12 text-red-500" />, title: "Team Based", desc: "Form teams of 5-7 developers", video: "https://cdn.pixabay.com/video/2021/08/04/84471-588142226_large.mp4" },
              { icon: <Trophy className="w-12 h-12 text-red-500" />, title: "₹10,000", desc: "Total prize pool", video: "https://cdn.pixabay.com/video/2020/06/15/42765-426209702_large.mp4" },
              { icon: <Calendar className="w-12 h-12 text-red-400" />, title: "Multiple Rounds", desc: "Progressive difficulty levels", video: "https://cdn.pixabay.com/video/2023/11/13/190022-882842467_large.mp4" },
              { icon: <Users className="w-12 h-12 text-red-500" />, title: "500+ Participants", desc: "Expected registration", video: "https://cdn.pixabay.com/video/2021/08/04/84471-588142226_large.mp4" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mx-6 my-3 relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-red-900/50 border-2 border-red-500/50 p-8 rounded-2xl text-center hover:border-red-400 transition-all duration-300 min-w-[300px] backdrop-blur-sm">
                  {/* Video Background for Card */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4 p-4 bg-red-900/30 rounded-full w-fit mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-red-200 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
          
          {/* Second Marquee - Reverse Direction */}
          <Marquee
            speed={40}
            direction="right"
            gradient={true}
            gradientColor="rgb(127, 29, 29)"
            gradientWidth={100}
          >
            {[
              "🔥 Code Breaking Challenges",
              "⚡ Real-time Problem Solving", 
              "🏆 Live Leaderboards",
              "🎯 Instant Feedback System",
              "💻 Multiple Programming Languages",
              "🔐 Cryptography Puzzles",
              "🧩 Logic Brain Teasers",
              "⏱️ Time-based Challenges"
            ].map((text, index) => (
              <div key={index} className="mx-5 text-red-200 text-lg font-medium whitespace-nowrap bg-red-800/50 px-6 py-3 rounded-full border border-red-400/30 hover:bg-red-700/60 transition-colors">
                {text}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="schedule" className="py-20 px-6 text-center relative z-10 overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-red-400 drop-shadow-[0_0_10px_#ff0000] mb-12">Event Details</h2>
          
          {/* Event Details Marquee */}
          <Marquee
            speed={60}
            gradient={true}
            gradientColor="rgb(127, 29, 29)"
            gradientWidth={120}
            className="mb-8"
          >
            {[
              { 
                icon: <Clock className="w-16 h-16 text-red-500" />, 
                title: "October 14, 2025", 
                subtitle: "9:00 AM Onwards",
                desc: "Mark your calendars for the ultimate tech challenge",
                video: "https://cdn.pixabay.com/video/2020/05/27/40516-423059893_large.mp4"
              },
              { 
                icon: <MapPin className="w-16 h-16 text-red-500" />, 
                title: "SRM University", 
                subtitle: "Tech Park Hall",
                desc: "State-of-the-art facility with cutting-edge technology",
                video: "https://cdn.pixabay.com/video/2023/11/13/190022-882842467_large.mp4"
              },
              { 
                icon: <Users className="w-16 h-16 text-red-500" />, 
                title: "Registration", 
                subtitle: "Open Now",
                desc: "Limited spots available - Register immediately",
                video: "https://cdn.pixabay.com/video/2020/06/15/42765-426209702_large.mp4"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="mx-8 my-4 relative group"
                whileHover={{ scale: 1.08, rotateY: 5 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-red-900/50 border-2 border-red-500/70 p-10 rounded-3xl text-center hover:border-red-300 transition-all duration-500 min-w-[350px] backdrop-blur-lg shadow-2xl">
                  {/* Hover Video Background */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6 p-6 bg-red-800/50 rounded-full w-fit mx-auto group-hover:bg-red-700/70 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{item.title}</h3>
                    <h4 className="text-xl font-semibold text-red-200 mb-4">{item.subtitle}</h4>
                    <p className="text-red-100 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
          
          {/* Quick Info Marquee */}
          <Marquee
            speed={45}
            direction="right"
            gradient={true}
            gradientColor="rgb(127, 29, 29)"
            gradientWidth={100}
          >
            {[
              "📅 Single Day Event",
              "🎮 Interactive Challenges", 
              "🍕 Food & Refreshments",
              "📜 Certificates for All",
              "🏅 Recognition for Winners",
              "🤝 Networking Opportunities",
              "📱 Mobile App Support",
              "🔴 Live Streaming Available"
            ].map((text, index) => (
              <div key={index} className="mx-5 text-red-200 text-lg font-medium whitespace-nowrap bg-red-800/50 px-6 py-3 rounded-full border border-red-400/30 hover:bg-red-700/60 transition-colors">
                {text}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="rules" className="py-20 px-6 text-center relative z-10 overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-red-400 drop-shadow-[0_0_10px_#ff0000] mb-12">Rules & Regulations</h2>
          
          {/* Rules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
            {[
              {
                rule: "Team Formation",
                desc: "Each team must have 5-7 members",
                icon: "👥",
                color: "from-red-900 to-red-700"
              },
              {
                rule: "Fair Play",
                desc: "Use of external help or AI tools during puzzles is prohibited",
                icon: "⚖️",
                color: "from-red-800 to-red-600"
              },
              {
                rule: "Time Management",
                desc: "Teams must submit solutions within the given time frame",
                icon: "⏰",
                color: "from-red-900 to-red-700"
              },
              {
                rule: "Final Decision",
                desc: "Judges' decision will be final and binding",
                icon: "⚡",
                color: "from-red-800 to-red-600"
              },
              {
                rule: "Code of Conduct",
                desc: "Maintain professional behavior throughout the event",
                icon: "📜",
                color: "from-red-900 to-red-700"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.05, rotateX: 5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={`bg-red-900/50 ${item.color} border-2 border-red-500/60 p-6 rounded-2xl text-left hover:border-red-300 transition-all duration-300 backdrop-blur-sm shadow-xl h-full`}>
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-red-200 mb-3 flex items-center">
                        <Info className="w-5 h-5 text-red-400 mr-2" />
                        {item.rule}
                      </h3>
                      <p className="text-red-100 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Important Notes Marquee */}
          <Marquee
            speed={35}
            direction="right"
            gradient={true}
            gradientColor="rgb(127, 29, 29)"
            gradientWidth={100}
          >
            {[
              "🚨 Violation of rules leads to disqualification",
              "⚡ Event coordinators' instructions are mandatory",
              "📱 Mobile phones allowed only for emergency",
              "🔒 Maintain confidentiality of puzzles",
              "🤝 Respect fellow participants",
              "⏱️ Punctuality is essential",
              "🎯 Focus on fair competition",
              "📋 Follow submission guidelines"
            ].map((text, index) => (
              <div key={index} className="mx-5 text-red-200 text-lg font-medium whitespace-nowrap bg-red-800/50 px-6 py-3 rounded-full border border-red-400/30 hover:bg-red-700/60 transition-colors">
                {text}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 text-center relative z-10 overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-red-400 drop-shadow-[0_0_10px_#ff0000] mb-12">Frequently Asked Questions</h2>
          
          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
            {[
              {
                q: "Who can participate?",
                a: "Any university student with a valid ID can join.",
                emoji: "🎓"
              },
              {
                q: "Do I need prior experience?",
                a: "Not necessarily, but coding and puzzle-solving skills will help.",
                emoji: "💡"
              },
              {
                q: "Is there a participation fee?",
                a: "No, participation is completely free.",
                emoji: "💰"
              },
              {
                q: "How are winners decided?",
                a: "Based on puzzle-solving, coding solutions, and time efficiency.",
                emoji: "🏆"
              },
              {
                q: "What should I bring?",
                a: "Just your laptop, charger, and enthusiasm!",
                emoji: "💻"
              },
              {
                q: "Is food provided?",
                a: "Yes, refreshments and meals will be provided.",
                emoji: "🍕"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="relative group"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="bg-red-900/50 border-2 border-red-500/50 p-6 rounded-2xl text-left hover:border-red-300 transition-all duration-500 backdrop-blur-lg shadow-2xl group-hover:shadow-red-500/20 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl mb-2">{faq.emoji}</div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <HelpCircle className="w-5 h-5 text-red-500 mr-2" />
                        <h3 className="text-lg font-bold text-white">{faq.q}</h3>
                      </div>
                      <p className="text-red-100 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-500/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-black/90 border-t border-red-600/30">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Top border with glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_10px_#ff0000]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Event Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Event Info
              </h3>
              <div className="space-y-2 text-red-100">
                <p className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-red-400" /> October 14, 2025</p>
                <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-red-400" /> 24 Hours</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-red-400" /> SRM University</p>
                <p className="flex items-center"><Trophy className="w-4 h-4 mr-2 text-red-400" /> ₹10,000 Prize Pool</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">📧</span>
                Contact Us
              </h3>
              <div className="space-y-2 text-red-100">
                <p>srmacmsigapp@gmail.com</p>
                <p>+91-8248537950</p>
                <p>SRM Institute of Science and Technology</p>
                <p>Kattankulathur, Chennai</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">🔗</span>
                Quick Links
              </h3>
              <div className="space-y-2">
                <a href="#about" className="block text-red-100 hover:text-red-400 transition-colors duration-200">About</a>
                <a href="#schedule" className="block text-red-100 hover:text-red-400 transition-colors duration-200">Schedule</a>
                <a href="#rules" className="block text-red-100 hover:text-red-400 transition-colors duration-200">Rules</a>
                <a href="#faq" className="block text-red-100 hover:text-red-400 transition-colors duration-200">FAQ</a>
              </div>
            </div>

            {/* Social & Support */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
                <span className="text-2xl mr-2">💬</span>
                Connect
              </h3>
              <div className="space-y-3">
                <a 
                  href="https://unstop.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 text-center"
                >
                  Register Now
                </a>
                <div className="flex space-x-4 justify-center">
                  <a 
                    href="https://www.linkedin.com/company/srm-acm-sigapp/posts/?feedView=all" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-100 hover:text-blue-400 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/srmacmsigapp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-100 hover:text-pink-400 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://srmacmsigapp.xyz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-100 hover:text-green-400 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-red-600/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <Image
                src="/srm.webp"
                alt="SRM Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <Image
                src="/logo.jpg"
                alt="ACM Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-red-400 font-bold">SRM ACM SIGAPP</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-red-200 text-sm">&copy; 2025 ACM SIGAPP, SRMIST KTR. All rights reserved.</p>
              <p className="text-red-300 text-xs mt-1">Built by ACM SIGAPP Web Team</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}