import React from "react"

import "./style.css"

export const Component = () => {
    return (
        <div id="webcrumbs">
            <div className="w-full max-w-full bg-gray-900 text-gray-300 font-mono min-h-screen">
                <div className="flex h-screen">
                    <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
                        <div className="p-4 border-b border-gray-700">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <h1 className="text-lg font-bold text-primary-400">PORTFOLIO</h1>
                        </div>

                        <nav className="flex-1 p-2">
                            <div className="space-y-1">
                                <details className="group" open>
                                    <summary className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded cursor-pointer transition-colors">
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
                                        <span className="material-symbols-outlined text-sm">folder</span>
                                        <span className="text-sm">EXPLORER</span>
                                    </summary>
                                    <div className="ml-6 mt-1 space-y-1">
                                        <a
                                            href="#hero"
                                            className="flex items-center gap-2 p-1 hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xs">home</span>
                                            <span className="text-sm">hero.js</span>
                                        </a>
                                        <a
                                            href="#about"
                                            className="flex items-center gap-2 p-1 hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xs">person</span>
                                            <span className="text-sm">About Me</span>
                                        </a>
                                        <a
                                            href="#projects"
                                            className="flex items-center gap-2 p-1 hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xs">code</span>
                                            <span className="text-sm">projects.js</span>
                                        </a>
                                        <a
                                            href="#experience"
                                            className="flex items-center gap-2 p-1 hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xs">work</span>
                                            <span className="text-sm">experience.js</span>
                                        </a>
                                        <a
                                            href="#contact"
                                            className="flex items-center gap-2 p-1 hover:bg-gray-700 rounded transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-xs">mail</span>
                                            <span className="text-sm">contact.js</span>
                                        </a>
                                    </div>
                                </details>
                            </div>
                        </nav>

                        <div className="p-4 border-t border-gray-700">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs">Online</span>
                                </div>
                                <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                                    <span className="material-symbols-outlined text-sm">settings</span>
                                </button>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 flex flex-col overflow-hidden">
                        <header className="bg-gray-800 border-b border-gray-700 p-2">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 rounded">
                                    <span className="material-symbols-outlined text-sm text-primary-400">terminal</span>
                                    <span className="text-sm">shalin-portfolio</span>
                                    <button className="text-gray-500 hover:text-gray-300 transition-colors">
                                        <span className="material-symbols-outlined text-xs">close</span>
                                    </button>
                                </div>
                                <div className="flex-1"></div>
                                <button className="p-2 hover:bg-gray-700 rounded transition-colors group">
                                    <span className="material-symbols-outlined text-sm group-hover:rotate-180 transition-transform">
                                        landscape
                                    </span>
                                </button>
                            </div>
                        </header>

                        <div className="flex-1 overflow-y-auto">
                            <div className="flex flex-col gap-4">
                                <section
                                    id="hero"                                    className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden animate-gradient"
                                >
                                    <style>{`
                                        .animate-gradient {
                                            position: relative;
                                            background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #252525);
                                            background-size: 400% 400%;
                                            animation: gradient 15s ease infinite;
                                        }
                                        .animate-gradient::before {
                                            content: '';
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            right: 0;
                                            bottom: 0;
                                            background: linear-gradient(45deg, 
                                                rgba(66, 133, 244, 0.15),
                                                rgba(219, 68, 55, 0.15), 
                                                rgba(244, 180, 0, 0.15),
                                                rgba(15, 157, 88, 0.15));
                                            background-size: 400% 400%;
                                            animation: gradient 8s ease infinite;
                                            filter: blur(3px);
                                        }
                                        .animate-gradient::after {
                                            content: '';
                                            position: absolute;
                                            top: 0;
                                            left: 0;
                                            right: 0;
                                            bottom: 0;
                                            background: radial-gradient(circle at 50% 50%, 
                                                rgba(29, 78, 216, 0.2), 
                                                transparent 70%);
                                            opacity: 0.7;
                                            animation: pulse 5s ease-in-out infinite alternate;
                                        }
                                        @keyframes gradient {
                                            0% {
                                                background-position: 0% 50%;
                                            }
                                            50% {
                                                background-position: 100% 50%;
                                            }
                                            100% {
                                                background-position: 0% 50%;
                                            }
                                        }
                                        @keyframes pulse {
                                            0% {
                                                opacity: 0.5;
                                                transform: scale(1);
                                            }
                                            100% {
                                                opacity: 0.8;
                                                transform: scale(1.1);
                                            }
                                        }
                                        @keyframes float {
                                            0% {
                                                transform: translateY(0px);
                                            }
                                            50% {
                                                transform: translateY(-20px);
                                            }
                                            100% {
                                                transform: translateY(0px);
                                            }
                                        }
                                    `}</style>                                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] mix-blend-overlay"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a2e]/90"></div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.3)_100%)]"></div>
                                    <div className="text-center max-w-4xl relative z-10">
                                        <div className="mb-8 inline-block">
                                            <div className="w-32 h-32 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                                                SS
                                            </div>
                                        </div>
                                        <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                            <span className="text-gray-300">Hey, I'm </span>
                                            <span className="text-primary-400">Shalin</span>
                                            <span className="animate-pulse">👋</span>
                                        </h1>
                                        <p className="text-xl md:text-2xl text-gray-400 mb-8">
                                            Flutter & MERN Stack Dev | Building Smart Apps with AI
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                                            <span className="px-4 py-2 bg-primary-500 bg-opacity-20 text-primary-300 rounded-full border border-primary-500">
                                                Computer Science B.Tech
                                            </span>
                                            <span className="px-4 py-2 bg-green-500 bg-opacity-20 text-green-300 rounded-full border border-green-500">
                                                Full Stack Developer
                                            </span>
                                            <span className="px-4 py-2 bg-purple-500 bg-opacity-20 text-purple-300 rounded-full border border-purple-500">
                                                UI/UX Designer
                                            </span>
                                        </div>
                                        <div className="flex justify-center gap-4">
                                            <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-all transform hover:scale-105 flex items-center gap-2">
                                                <span className="material-symbols-outlined">download</span>
                                                Download Resume
                                            </button>
                                            <button className="px-6 py-3 border border-gray-600 hover:border-primary-500 text-gray-300 hover:text-primary-300 rounded-lg transition-all transform hover:scale-105 flex items-center gap-2">
                                                <span className="material-symbols-outlined">mail</span>
                                                Get In Touch
                                            </button>
                                        </div>
                                    </div>
                                    {/* Next: "Add animated code snippets background" */}
                                </section>
                                <div className="relative w-full h-32 overflow-hidden">
                                    <div className="luffy-container">
                                        <div className="luffy-sprite"></div>
                                    </div>
                                    <style>{`
                                        .luffy-container {
                                            position: absolute;
                                            bottom: 0;
                                            left: -100px;
                                            animation: walkAcross 15s linear infinite;
                                        }
                                        .luffy-sprite {
                                            width: 180px;
                                            height: 180px;
                                            background: url('https://media.tenor.com/Yw6m7rGHCCUAAAAi/luffy.gif') no-repeat;
                                            background-size: contain;
                                            transform: scaleX(1);
                                            filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5));
                                        }
                                        @keyframes walkAcross {
                                            0% {
                                                transform: translateX(-100px);
                                            }
                                            45% {
                                                transform: translateX(calc(50vw - 50px));
                                            }
                                            50% {
                                                transform: translateX(calc(50vw - 50px)) scaleX(-1);
                                            }
                                            95% {
                                                transform: translateX(-100px) scaleX(-1);
                                            }
                                            100% {
                                                transform: translateX(-100px) scaleX(1);
                                            }
                                        }
                                    `}</style>
                                </div>
                                <section id="about" className="py-16 px-8 bg-gray-900">
                                    <div className="max-w-6xl mx-auto">
                                        <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-2">
                                            <span className="material-symbols-outlined">person</span>
                                            About Me
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-12">
                                            <div>
                                                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">                                                    <h3 className="text-xl font-semibold text-gray-200 mb-4">
                                                        {"// Background"}
                                                    </h3>
                                                    <p className="text-gray-400 leading-relaxed">
                                                        Passionate Computer Science B.Tech student with a strong
                                                        foundation in full-stack development. I specialize in creating
                                                        innovative mobile and web applications using modern technologies
                                                        like Flutter, React, and AI integration. My journey combines
                                                        technical expertise with creative problem-solving to build
                                                        user-centric solutions.
                                                    </p>
                                                </div>

                                                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">                                                    <h3 className="text-xl font-semibold text-gray-200 mb-4">
                                                        {"// What I Do"}
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3">
                                                            <span className="material-symbols-outlined text-primary-400">
                                                                smartphone
                                                            </span>
                                                            <span>Mobile App Development (Flutter)</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="material-symbols-outlined text-green-400">
                                                                web
                                                            </span>
                                                            <span>Full Stack Web Development (MERN)</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="material-symbols-outlined text-purple-400">
                                                                palette
                                                            </span>
                                                            <span>UI/UX Design & Prototyping</span>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="material-symbols-outlined text-yellow-400">
                                                                smart_toy
                                                            </span>
                                                            <span>AI Integration & Machine Learning</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">                                                    <h3 className="text-xl font-semibold text-gray-200 mb-4">
                                                        {"// Technical Skills"}
                                                    </h3>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-primary-300 mb-2">
                                                                Languages
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-sm border border-blue-500">
                                                                    Python
                                                                </span>
                                                                <span className="px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded text-sm border border-cyan-500">
                                                                    Dart
                                                                </span>
                                                                <span className="px-3 py-1 bg-yellow-500 bg-opacity-20 text-yellow-300 rounded text-sm border border-yellow-500">
                                                                    JavaScript
                                                                </span>
                                                                <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-sm border border-green-500">
                                                                    Java
                                                                </span>
                                                                <span className="px-3 py-1 bg-red-500 bg-opacity-20 text-red-300 rounded text-sm border border-red-500">
                                                                    C++
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-primary-300 mb-2">
                                                                Frameworks & Tools
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-sm border border-blue-500">
                                                                    Flutter
                                                                </span>
                                                                <span className="px-3 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded text-sm border border-cyan-500">
                                                                    React
                                                                </span>
                                                                <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-sm border border-green-500">
                                                                    Node.js
                                                                </span>
                                                                <span className="px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded text-sm border border-orange-500">
                                                                    Firebase
                                                                </span>
                                                                <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-sm border border-purple-500">
                                                                    MongoDB
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">                                                    <h3 className="text-xl font-semibold text-gray-200 mb-4">
                                                        {"// Soft Skills"}
                                                    </h3>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                                                            <span className="text-sm">Problem Solving</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                                            <span className="text-sm">Team Management</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                                            <span className="text-sm">Creative Thinking</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                                            <span className="text-sm">Communication</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Next: "Add interactive skill level bars with animations" */}
                                </section>
                            </div>

                            <section id="projects" className="py-16 px-8 bg-gray-800">
                                <div className="max-w-6xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-2">
                                        <span className="material-symbols-outlined">code</span>
                                        Featured Projects
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-xl font-semibold text-gray-200">💬 HelpNexus – Feedback Management System</h3>
                                                    <div className="flex gap-2">
                                                        <button className="p-2 bg-primary-500 hover:bg-primary-600 rounded-full transition-colors">
                                                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 mb-2">
                                                    <span className="font-semibold">Role:</span> Full Stack Developer<br/>
                                                    <span className="font-semibold">Duration:</span> May 2025 – Present<br/>
                                                    <span className="font-semibold">Type:</span> Individual Project / Capstone
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-xs border border-blue-500">React.js</span>
                                                    <span className="px-2 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded text-xs border border-orange-500">Firebase Auth</span>
                                                    <span className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-xs border border-green-500">Node.js</span>
                                                    <span className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-xs border border-purple-500">Express.js</span>
                                                    <span className="px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-300 rounded text-xs border border-yellow-500">MongoDB</span>
                                                    <span className="px-2 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded text-xs border border-cyan-500">Material UI</span>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Project Overview:</h4>
                                                    <p className="text-gray-400">
                                                        HelpNexus is a real-time feedback management system designed for institutions and organizations to gather, manage, and analyze user feedback effectively.
                                                    </p>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Key Features:</h4>
                                                    <ul className="list-disc ml-6 text-gray-400 space-y-1">
                                                        <li>Role-based access control with Firebase Authentication (Users & Admins)</li>
                                                        <li>Submit feedback with sentiment-aware analysis using AI APIs (Hugging Face / Gemini)</li>
                                                        <li>Admin dashboard for viewing categorized feedback (positive/negative/neutral)</li>
                                                        <li>MongoDB backend for persistent data storage and efficient query performance</li>
                                                        <li>Clean and responsive UI built with React and Material UI</li>
                                                    </ul>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Highlights:</h4>
                                                    <ul className="list-disc ml-6 text-gray-400 space-y-1">
                                                        <li>Implemented sentiment analysis integration to classify and visualize user feedback using external AI models.</li>
                                                        <li>Built secure REST APIs with Node.js & Express for feedback handling and admin-level data access.</li>
                                                        <li>Designed responsive frontend with authentication flows, feedback forms, and dynamic dashboards.</li>
                                                    </ul>
                                                </div>
                                                <div className="border-t border-gray-700 pt-4">
                                                    <div className="text-xs text-gray-500">
                                                        <span className="material-symbols-outlined text-xs">star</span>
                                                        Capstone Project
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-xl font-semibold text-gray-200">Profil-AI (Resume-AI)</h3>
                                                    <div className="flex gap-2">
                                                        <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                                                            <i className="fab fa-github text-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 mb-2">
                                                    <span className="font-semibold">Role:</span> Full Stack Developer<br/>
                                                    <span className="font-semibold">Duration:</span> May 2025 – May 2025<br/>
                                                    <span className="font-semibold">Type:</span> Individual Project
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-xs border border-green-500">MERN</span>
                                                    <span className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-xs border border-purple-500">Gemini API</span>
                                                    <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-xs border border-blue-500">AI/ML</span>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Project Overview:</h4>
                                                    <p className="text-gray-400">
                                                        Developer of Profil-AI, a MERN stack-based (MongoDB, Express.js, React, Node.js) resume intelligence platform that uses Google's Gemini API for extracting skills, education, and experience from resumes.
                                                    </p>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Key Features:</h4>
                                                    <ul className="list-disc ml-6 text-gray-400 space-y-1">
                                                        <li>Built without Python — relied entirely on JavaScript-based technologies for both frontend and backend development.</li>
                                                        <li>Implemented Google Authentication with MongoDB to manage secure user login and profile storage.</li>
                                                        <li>Used Gemini Pro Vision with prompt engineering to extract and structure data from PDF and image-based resumes.</li>
                                                        <li>Developed a modular backend with Node.js and Express, exposing APIs for parsing, storing, and accessing resume intelligence.</li>
                                                        <li>Frontend built with React, offering a clean UI for users to upload resumes and view AI-parsed profiles.</li>
                                                        <li>Focused solely on resume analysis, avoiding job-resume matching to maintain a clear scope and performance efficiency.</li>
                                                        <li>Demonstrates strong skills in AI integration, secure authentication, and cloud-based full-stack architecture.</li>
                                                    </ul>
                                                </div>
                                                <div className="border-t border-gray-700 pt-4">
                                                    <div className="text-xs text-gray-500">
                                                        <span className="material-symbols-outlined text-xs">star</span>
                                                        Resume Intelligence Platform
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-xl font-semibold text-gray-200">FitSync</h3>
                                                    <div className="flex gap-2">
                                                        <a href="https://tinyurl.com/y6kax7yf" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                                                            <i className="fab fa-github text-sm"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 mb-2">
                                                    <span className="font-semibold">Role:</span> Mobile App Developer<br/>
                                                    <span className="font-semibold">Duration:</span> January 2025 – May 2025<br/>
                                                    <span className="font-semibold">Type:</span> Individual Project
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-xs border border-blue-500">Flutter</span>
                                                    <span className="px-2 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded text-xs border border-orange-500">Firebase</span>
                                                    <span className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-xs border border-purple-500">Node.js</span>
                                                    <span className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-xs border border-green-500">Express.js</span>
                                                    <span className="px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-300 rounded text-xs border border-yellow-500">MongoDB</span>
                                                    <span className="px-2 py-1 bg-cyan-500 bg-opacity-20 text-cyan-300 rounded text-xs border border-cyan-500">DeepSeek AI</span>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Key Features:</h4>
                                                    <ul className="list-disc ml-6 text-gray-400 space-y-1">
                                                        <li>Implemented Firebase Authentication and Firestore to securely manage user data, workout logs, dietary plans, and health metrics.</li>
                                                        <li>Built a Flutter-based fitness tracking app with features like custom workout collections, calorie tracking, AI-generated workout plans, and exercise guides.</li>
                                                        <li>Integrated DeepSeek AI for personalized workout and nutrition plans based on user goals and fitness levels.</li>
                                                        <li>Implemented reminder notifications, AI voice coaching, and gamified streaks & badges to boost user engagement.</li>
                                                        <li>Added support for push notifications, allowing real-time alerts for workout reminders and health tips.</li>
                                                        <li>Designed a clean and responsive UI using Flutter widgets and animation packages to enhance usability and engagement.</li>
                                                    </ul>
                                                </div>
                                                <div className="border-t border-gray-700 pt-4">
                                                    <div className="text-xs text-gray-500">
                                                        <span className="material-symbols-outlined text-xs">fitness_center</span>
                                                        Fitness Tracking App
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-xl font-semibold text-gray-200">PlantSnap</h3>
                                                    <div className="flex gap-2">
                                                        <a href="https://tinyurl.com/3f5ur4vb" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                                                            <i className="fab fa-github text-sm"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 mb-2">
                                                    <span className="font-semibold">Role:</span> Mobile App Developer<br/>
                                                    <span className="font-semibold">Duration:</span> June 2024 – September 2024<br/>
                                                    <span className="font-semibold">Type:</span> Individual Project
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-xs border border-blue-500">Flutter</span>
                                                    <span className="px-2 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded text-xs border border-orange-500">Firebase</span>
                                                    <span className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-xs border border-purple-500">Gemini API</span>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Key Features:</h4>
                                                    <ul className="list-disc ml-6 text-gray-400 space-y-1">
                                                        <li>Engineered a Flutter app incorporating an AI-powered chatbot to identify plants and deliver detailed information using Firebase for backend services and Gemini API.</li>
                                                        <li>Crafted features like QR code scanning, plant collection management, and real-time weather updates, enhancing the user experience.</li>
                                                        <li>Implemented Firebase for user authentication and data storage, ensuring efficient retrieval of plant-related information.</li>
                                                        <li>Designed a responsive, user-friendly UI enabling seamless exploration and sharing of plant species.</li>
                                                        <li>Integrated real-time weather updates, allowing users to receive personalized plant care recommendations based on current local weather conditions, enhancing user experience and promoting plant health.</li>
                                                        <li>Optimized Firebase for user authentication, ensuring a secure and seamless sign-in experience, and used Firestore for fast, scalable data storage, enabling efficient retrieval and storage of plant-related information.</li>
                                                        <li>Collaborated with cross-functional teams to ensure the app meets both technical and user-experience requirements, ensuring a high level of satisfaction among users.</li>
                                                    </ul>
                                                </div>
                                                <div className="border-t border-gray-700 pt-4">
                                                    <div className="text-xs text-gray-500">
                                                        <span className="material-symbols-outlined text-xs">landscape</span>
                                                        Plant Identification App
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden hover:border-primary-500 transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/20">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="text-xl font-semibold text-gray-200">CanteenOp</h3>
                                                    <div className="flex gap-2">
                                                        <a href="https://tinyurl.com/2seme2nx" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                                                            <i className="fab fa-github text-sm"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 mb-2">
                                                    <span className="font-semibold">Role:</span> Mobile App Developer<br/>
                                                    <span className="font-semibold">Duration:</span> November 2024 – January 2025<br/>
                                                    <span className="font-semibold">Type:</span> College Project
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-xs border border-blue-500">Flutter</span>
                                                    <span className="px-2 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded text-xs border border-orange-500">Firebase</span>
                                                    <span className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-xs border border-green-500">Payment Gateway</span>
                                                </div>
                                                <div className="mb-2">
                                                    <h4 className="text-sm font-semibold text-primary-300 mb-1">Key Features:</h4>
                                                    <ul className="list-disc ml-6 text-gray-400 space-y-1">
                                                        <li>Built a Flutter-based college canteen app with features such as user registration, menu display, order customization, and payment integration.</li>
                                                        <li>Integrated Firebase Authentication for secure login and Firestore for real-time data updates.</li>
                                                        <li>Enhanced app performance and responsiveness using efficient layout management and dynamic UI updates.</li>
                                                    </ul>
                                                </div>
                                                <div className="border-t border-gray-700 pt-4">
                                                    <div className="text-xs text-gray-500">
                                                        <span className="material-symbols-outlined text-xs">restaurant</span>
                                                        College Project
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Next: "Add project filtering by technology stack" */}
                            </section>

                            <section id="experience" className="py-16 px-8 bg-gray-900">
                                <div className="max-w-6xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-2">
                                        <span className="material-symbols-outlined">work</span>
                                        Experience
                                    </h2>
                                    <div className="relative">
                                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-500"></div>
                                        <div className="relative">
                                            <div className="flex items-start gap-6 pb-12">
                                                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center relative z-10">
                                                    <span className="material-symbols-outlined text-sm text-white">
                                                        work
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors">
                                                        <div className="flex items-start justify-between mb-4">
                                                            <div>
                                                                <h3 className="text-xl font-semibold text-gray-200">
                                                                    Flutter Developer Intern
                                                                </h3>
                                                                <p className="text-primary-400 font-medium">
                                                                    Sparks to Ideas
                                                                </p>
                                                                <p className="text-gray-500 text-sm">
                                                                    March 2024 - April 2024
                                                                </p>
                                                            </div>
                                                            <div className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded-full text-sm border border-green-500">
                                                                Completed
                                                            </div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h4 className="text-sm font-semibold text-gray-300 mb-2">
                                                                Key Contributions:
                                                            </h4>
                                                            <ul className="space-y-2 text-gray-400">
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>
                                                                        Developed cross-platform mobile applications
                                                                        using Flutter framework
                                                                    </span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>
                                                                        Integrated Firebase services for real-time data
                                                                        synchronization and authentication
                                                                    </span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>
                                                                        Collaborated with design team to implement
                                                                        pixel-perfect UI/UX designs
                                                                    </span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>
                                                                        Optimized app performance and implemented state
                                                                        management solutions
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-sm border border-blue-500">
                                                                Flutter
                                                            </span>
                                                            <span className="px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded text-sm border border-orange-500">
                                                                Firebase
                                                            </span>
                                                            <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-sm border border-purple-500">
                                                                State Management
                                                            </span>
                                                            <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-sm border border-green-500">
                                                                UI/UX
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-6 pb-12">
                                                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center relative z-10">
                                                    <span className="material-symbols-outlined text-sm text-white">work</span>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary-500 transition-colors">
                                                        <div className="flex items-start justify-between mb-4">
                                                            <div>
                                                                <h3 className="text-xl font-semibold text-gray-200">Software Developer Intern</h3>
                                                                <p className="text-primary-400 font-medium">Fettle Health</p>
                                                                <p className="text-gray-500 text-sm">May 2025 – Present | Remote / Anand, Gujarat, India</p>
                                                            </div>
                                                            <div className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded-full text-sm border border-green-500">
                                                                Live Project
                                                            </div>
                                                        </div>
                                                        <div className="mb-4">
                                                            <h4 className="text-sm font-semibold text-gray-300 mb-2">Responsibilities & Achievements:</h4>
                                                            <ul className="space-y-2 text-gray-400">
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>Contributed to the Fettle Health mobile application, a real-time wellness platform built using Flutter and Firebase, targeted at promoting mental and physical health.</span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>Worked on core modules including:</span>
                                                                </li>
                                                                <ul className="ml-6 space-y-2 text-gray-400 list-disc">
                                                                    <li>User authentication (Firebase Auth)</li>
                                                                    <li>Post creation and feed system using Firestore Posts and Users collections</li>
                                                                    <li>Interactive homepage UI focused on personalized content and health tips</li>
                                                                </ul>
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>Implemented state management using Provider and ensured smooth UX across modules.</span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>Collaborated with senior developers and UI/UX designers to improve performance and reduce redundant Firestore reads by optimizing data structures.</span>
                                                                </li>
                                                                <li className="flex items-start gap-2">
                                                                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                                                                    <span>Gained hands-on experience in writing production-ready code, debugging complex issues, and working with agile methodologies in a real-world team environment.</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            <span className="px-3 py-1 bg-blue-500 bg-opacity-20 text-blue-300 rounded text-sm border border-blue-500">Flutter</span>
                                                            <span className="px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-300 rounded text-sm border border-orange-500">Firebase</span>
                                                            <span className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded text-sm border border-purple-500">Provider</span>
                                                            <span className="px-3 py-1 bg-green-500 bg-opacity-20 text-green-300 rounded text-sm border border-green-500">UI/UX</span>
                                                            <span className="px-3 py-1 bg-yellow-500 bg-opacity-20 text-yellow-300 rounded text-sm border border-yellow-500">Agile</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Next: "Add more experience entries or certifications section" */}
                            </section>

                            <section id="contact" className="py-16 px-8 bg-gray-800">
                                <div className="max-w-6xl mx-auto">
                                    <h2 className="text-3xl font-bold text-primary-400 mb-8 flex items-center gap-2">
                                        <span className="material-symbols-outlined">terminal</span>
                                        Contact Terminal
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
                                            <div className="bg-gray-800 p-3 border-b border-gray-700 flex items-center gap-2">
                                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-gray-400 ml-2">contact@shalin.dev</span>
                                            </div>
                                            <div className="p-6 font-mono">
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex">
                                                        <span className="text-green-400">shalin@portfolio</span>
                                                        <span className="text-gray-500">:</span>
                                                        <span className="text-blue-400">~</span>
                                                        <span className="text-gray-300">$ whoami</span>
                                                    </div>
                                                    <div className="text-gray-400">
                                                        Shalin Shah - Full Stack Developer
                                                    </div>

                                                    <div className="flex mt-4">
                                                        <span className="text-green-400">shalin@portfolio</span>
                                                        <span className="text-gray-500">:</span>
                                                        <span className="text-blue-400">~</span>
                                                        <span className="text-gray-300">$ ls -la contact/</span>
                                                    </div>
                                                    <div className="text-gray-400 space-y-1 ml-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="material-symbols-outlined text-sm text-primary-400">
                                                                mail
                                                            </span>
                                                            <span>email: 2002shalin@gmail.com</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <i className="fab fa-linkedin text-sm text-blue-400"></i>
                                                            <span>linkedin: /in/shalin-shah</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <i className="fab fa-github text-sm text-gray-400"></i>
                                                            <span>github: /shalin-shah</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="material-symbols-outlined text-sm text-green-400">
                                                                location_on
                                                            </span>
                                                            <span>location: India</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex mt-4">
                                                        <span className="text-green-400">shalin@portfolio</span>
                                                        <span className="text-gray-500">:</span>
                                                        <span className="text-blue-400">~</span>
                                                        <span className="text-gray-300">$ cat status.txt</span>
                                                    </div>
                                                    <div className="text-green-400">
                                                        Available for internships and collaborations
                                                    </div>

                                                    <div className="flex mt-4">
                                                        <span className="text-green-400">shalin@portfolio</span>
                                                        <span className="text-gray-500">:</span>
                                                        <span className="text-blue-400">~</span>
                                                        <span className="text-gray-300 animate-pulse">$ _</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Component