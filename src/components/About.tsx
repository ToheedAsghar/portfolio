
import React from 'react';
import SectionTitle from './SectionTitle';
import { Terminal, BookOpen, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-400/50">
      <div className="container mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="A passionate software developer specializing in .NET technologies and machine learning solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-gray-300">

              I am Toheed Asghar, a passionate Full-Stack Developer with expertise in building dynamic
              and scalable web applications using Angular and ASP.NET Core. With a strong foundation in
              computer science from Punjab University College of Information Technology (PUCIT), I am
              committed to delivering innovative solutions that blend functionality with user-friendly design.
            </p>

            <p className="text-gray-300">
              My journey as a developer has been shaped by hands-on experience, including a .NET Developer Internship
              at Netsol Technologies, where I collaborated with cross-functional teams to design and deploy efficient
              software solutions. I thrive in agile environments, leveraging my skills in problem-solving, teamwork,
              and rapid technology adoption to tackle complex challenges effectively.
            </p>

            <p className="text-gray-300">
              Beyond work, I am deeply invested in learning new technologies, solving programming challenges (300+ problems on platforms like Leetcode and Codeforces),
              and mentoring aspiring developers.
            </p>

            <p className="text-gray-300">
              My technical journey began with a degree in Computer Science, followed by
              specialization in software development and machine learning algorithms. I'm
              continuously learning and improving my skills to stay at the cutting edge of
              technology.
            </p>

            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new ML research papers, contributing
              to open-source projects, or sharing knowledge through technical blogs and community
              meetups.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="https://drive.google.com/file/d/1TTKWwR2MLOjrAvCwZ-fPJVyeLy8OtMhv/view?usp=sharing"
                className="px-6 py-3 bg-dark-100 text-white rounded-lg font-medium border border-glow-blue/30 hover:border-glow-blue transition-all flex items-center gap-2"
              >
                <BookOpen size={18} />
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="glass-card p-6 rounded-xl border-l-4 border-glow-blue hover:shadow-glow-blue transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-glow-blue/10 rounded-lg text-glow-blue">
                  <Terminal size={24} />
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Software Development</h3>
                  <p className="text-gray-400">
                  Eager to apply .NET Core, C#, ASP.NET MVC, Web API, and modern frontend
                  frameworks in developing innovative solutions.
                  Open to collaborative projects to expand skills.  
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border-l-4 border-glow-purple hover:shadow-glow-purple transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-glow-purple/10 rounded-lg text-glow-purple">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Machine Learning</h3>
                  <p className="text-gray-400">
                    Passionate about machine learning and computer vision. Eager to contribute to projects
                    leveraging Python, TensorFlow, and PyTorch, while expanding expertise in building AI-driven solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border-l-4 border-glow-blue hover:shadow-glow-blue transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-glow-blue/10 rounded-lg text-glow-blue">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="heading-sm text-white mb-2">Certifications</h3>
                  <p className="text-gray-400">
                    Certified in Digital Marketing (Google Digital Unlocked) and honored for Coursera presentations.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
