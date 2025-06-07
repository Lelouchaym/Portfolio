import React from 'react';
import { ExternalLink, Github, Shield, Wifi, Search } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Secure File Sharing Platform",
      description: "Developed a comprehensive secure file sharing platform featuring end-to-end encryption, role-based access control, and administrative management capabilities. The platform ensures data integrity and confidentiality while providing a seamless user experience.",
      technologies: ["Python", "Flask", "SQLite", "JWT"],
      icon: Shield,
      gradient: "from-cyan-500 to-blue-600",
      features: [
        "End-to-end encryption",
        "Role-based access control",
        "Admin dashboard",
        "Secure authentication"
      ]
    },
    {
      title: "IoT Monitoring with MQTT and AWS",
      description: "Built a sophisticated IoT monitoring system using Raspberry Pi devices connected through MQTT protocol to AWS IoT Core. The system provides real-time data visualization and monitoring capabilities for various IoT sensors and devices.",
      technologies: ["Raspberry Pi", "Python", "MQTT", "AWS IoT Core"],
      icon: Wifi,
      gradient: "from-blue-500 to-purple-600",
      features: [
        "Real-time monitoring",
        "MQTT protocol implementation",
        "AWS IoT Core integration",
        "Data visualization dashboard"
      ]
    },
    {
      title: "Network Analysis and Intrusion Detection",
      description: "Performed comprehensive network traffic analysis using industry-standard tools like Wireshark and Suricata to identify potential security threats and detect intrusion attempts. Developed custom scripts for automated threat detection.",
      technologies: ["Python", "Wireshark", "Suricata"],
      icon: Search,
      gradient: "from-purple-500 to-pink-600",
      features: [
        "Traffic analysis",
        "Threat identification",
        "Automated detection",
        "Security reporting"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                        <Github className="h-4 w-4" />
                        <span className="text-sm">View Code</span>
                      </button>
                      <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">Live Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="https://github.com/Lelouchaym"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Github className="h-5 w-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;