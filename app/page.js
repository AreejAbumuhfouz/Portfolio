"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Server, Globe, Zap, Users } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'Python', 'Java Spring Boot'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Sequelize', 'Knex.js'],
    tools: ['Git', 'Postman', 'UiPath', 'Figma', 'Canva', 'WordPress', 'GitHub Actions'],
    cloud: ['Google Cloud', 'Firebase', 'Vercel', 'Netlify']
  };

  const projects = [
    {
      name: 'BeeWise',
      description: 'A comprehensive platform designed to empower individuals in starting and thriving in the beekeeping business.',
      role: 'Owner',
      tech: ['MERN Stack', 'Tailwind CSS', 'Firebase', 'Stripe', 'Google Auth'],
      features: ['Community support', 'Resource management', 'Payment integration', 'User authentication']
    },
    {
      name: 'Entakheb',
      description: 'Jordanian election simulation platform allowing users to vote, create lists, request debates, and display ads.',
      role: 'Full Stack Developer',
      tech: ['PERN Stack', 'Tailwind CSS', 'Knex.js'],
      features: ['Voting system', 'List creation', 'Debate requests', 'Advertisement display']
    },
    {
      name: 'Festiva JO',
      description: 'Platform for discovering and purchasing tickets to festivals in Jordan.',
      role: 'Scrum Master',
      tech: ['React.js', 'Firebase', 'Tailwind CSS'],
      features: ['Event discovery', 'Ticket purchasing', 'Festival information', 'User-friendly interface']
    }
  ];

  const experiences = [
    {
      title: 'Node.js Developer – Chatbot Team',
      company: 'Orange Jordan',
      period: 'Feb 2025 - Present',
      description: [
        'Built backend APIs (Java Spring Boot) and frontend features (Node.js) for Smartly.ai',
        'Integrated various APIs and optimized chatbot performance',
        'Collaborated with team to resolve frontend issues in Node.js'
      ]
    },
    {
      title: 'RPA Developer – Automation Team',
      company: 'Orange Jordan',
      period: 'Nov 2024 - Present',
      description: [
        'Developed RPA solutions using UiPath, automating manual business processes',
        'Worked with business analysts to understand process requirements',
        'Translated requirements into efficient automated workflows'
      ]
    },
    {
      title: 'Full Stack Web Development Trainee',
      company: 'Coding Academy by Orange',
      period: 'May 2024 – Nov 2024',
      description: [
        'Enhanced user engagement through UX/UI design',
        'Improved soft skills focusing on communication and teamwork',
        'Collaborated with IT team on short-term projects',
        'Participated in database management solutions design'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Areej Abumuhfouz
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === item 
                      ? 'text-purple-400 border-b-2 border-purple-400' 
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-purple-500/20">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-purple-400"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack
            </span>
            <br />
            <span className="text-white">Web Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Motivated developer with expertise in MERN stack, RPA automation, and modern web technologies. 
            Based in Jordan, creating impactful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Professional Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Web Developer with a B.Sc. in Computer Science from Al al-Bayt University. 
                My journey includes comprehensive training at Orange Coding Academy and hands-on experience in both 
                web development and Robotic Process Automation (RPA).
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Currently working at Orange Jordan as a Node.js Developer on the Chatbot team and RPA Developer on the 
                Automation team. I've built over 10 real-world projects and have a strong foundation in the MERN stack, 
                Python, and automation tools like UiPath.
              </p>
              <div className="flex gap-4">
                <a href="mailto:areejabumahfouz@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Mail size={24} />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Github size={24} />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Leader of BeeWise project incubated by Ministry of Digital Economy</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Co-founder of Solar Eye & Solar Geek climate innovation projects</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Winner of first place in CTCN MENA Youth Climate Innovation Academy</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Co-Coordinator at Hult Prize Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="bg-purple-800/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Server className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="bg-purple-800/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="bg-purple-800/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Cloud & Deploy</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, index) => (
                  <span key={index} className="bg-purple-800/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Tools & RPA</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-purple-800/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Team Collaboration', 'Communication', 'Agile/Scrum', 'Critical Thinking'].map((skill, index) => (
                  <span key={index} className="bg-purple-800/50 text-purple-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative pl-8 border-l-2 border-purple-500/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-purple-400 text-sm mb-4">Role: {project.role}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-purple-800/50 text-purple-200 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="w-1 h-1 bg-purple-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition-colors">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-4 py-2 rounded-full text-sm transition-colors">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm always interested in new opportunities and collaborations. 
                  Whether you have a project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-purple-400" size={24} />
                    <span className="text-gray-300">areejabumahfouz@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-purple-400" size={24} />
                    <span className="text-gray-300">+962 782907153</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-purple-400" size={24} />
                    <span className="text-gray-300">Zarqa, Jordan</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20">
                <div className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Areej Abumuhfouz.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;