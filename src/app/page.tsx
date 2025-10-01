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
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/srm.webp"
                  alt="SRM Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <Image
                  src="/logo.jpg"
                  alt="ACM Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-white font-bold text-lg">
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
              <button className="text-white hover:text-red-400 transition-colors duration-200">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
            <span className="block text-red-600 drop-shadow-[0_0_15px_#00e5ff]">ESCAPE ROOM</span>
            <span className="block text-white drop-shadow-[0_0_25px_#00e5ff]">SRM ACM SIGAPP</span>
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
          
          {/* Help & Support Marquee */}
          <Marquee
            speed={40}
            direction="right"
            gradient={true}
            gradientColor="rgb(127, 29, 29)"
            gradientWidth={100}
          >
            {[
              "❓ Still have questions? Contact us!",
              "📧 acm.sigapp@srm.edu",
              "📞 +91-XXXX-XXXXXX",
              "💬 Join our Discord server",
              "📱 Follow us on social media",
              "🔔 Enable notifications for updates",
              "📋 Check our detailed guidelines",
              "🆘 24/7 support available"
            ].map((text, index) => (
              <div key={index} className="mx-5 text-red-200 text-lg font-medium whitespace-nowrap bg-red-800/50 px-6 py-3 rounded-full border border-red-400/30 hover:bg-red-700/60 transition-colors">
                {text}
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </main>
  );
}