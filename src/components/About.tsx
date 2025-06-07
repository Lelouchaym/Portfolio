import React from 'react';
import { GraduationCap, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated cybersecurity student at the National Institute of Posts and Telecommunications (INPT), 
                where I'm developing expertise in protecting digital infrastructures and understanding the evolving 
                landscape of cyber threats.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion lies in ethical hacking, network security analysis, and digital forensics. I believe in 
                the power of proactive security measures and continuous learning to stay ahead of emerging threats.
              </p>

              <div className="flex items-center space-x-3 text-cyan-400">
                <GraduationCap className="h-6 w-6" />
                <span className="text-lg font-semibold">INPT - Cybersecurity Student</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                <Target className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
                <p className="text-gray-400 text-sm">Network Security, Penetration Testing, Vulnerability Assessment</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-colors duration-300">
                <Users className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-400 text-sm">Team Projects, Security Research, Knowledge Sharing</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-colors duration-300">
                <Award className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                <p className="text-gray-400 text-sm">Security Projects, CTF Participation, Continuous Learning</p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-colors duration-300">
                <GraduationCap className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-gray-400 text-sm">INPT, Cybersecurity Program, Hands-on Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;