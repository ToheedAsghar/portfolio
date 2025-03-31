import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState(''); // Tracks submission status

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission (page reload)
    setStatus('sending'); // Update status to indicate sending

    const form = e.target;
    const formData = new FormData(form); // Collect form data

    try {
      const response = await fetch('https://formspree.io/f/xnnpbrgg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success'); // Submission successful
        form.reset(); // Clear the form fields
      } else {
        setStatus('error'); // Submission failed
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error'); // Handle network errors
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Interested in working together? Feel free to reach out!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-sm text-white mb-6">Contact Information</h3>
            
            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-glow-blue/10 rounded-lg text-glow-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <a 
                    href="mailto:john@example.com" 
                    className="text-white hover:text-glow-blue transition-colors"
                  >
                    toheedasghar@hotmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-glow-blue/10 rounded-lg text-glow-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-white">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
            
            <h3 className="heading-sm text-white mb-4">Connect With Me</h3>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/toheedasghar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-dark-100 text-gray-300 rounded-lg hover:bg-glow-blue/10 hover:text-glow-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://linkedin.com/in/toheed-asghar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-dark-100 text-gray-300 rounded-lg hover:bg-glow-blue/10 hover:text-glow-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              
              <a 
                href="mailto:toheedasghar@hotmail.com" 
                className="p-3 bg-dark-100 text-gray-300 rounded-lg hover:bg-glow-blue/10 hover:text-glow-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="glass-card p-6 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-gray-300 text-sm">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="bg-dark-100 border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-glow-blue transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-gray-300 text-sm">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="bg-dark-100 border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-glow-blue transition-colors"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="subject" className="text-gray-300 text-sm">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="bg-dark-100 border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-glow-blue transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2 mb-6">
                <label htmlFor="message" className="text-gray-300 text-sm">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="bg-dark-100 border border-gray-700 rounded-lg p-3 text-white outline-none focus:border-glow-blue transition-colors resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-glow-blue text-white rounded-lg font-medium hover:bg-glow-blue/90 transition-all shadow-glow-blue flex items-center gap-2 w-full justify-center"
                disabled={status === 'sending'} // Disable button while sending
              >
                <Send size={18} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* User feedback */}
              {status === 'success' && (
                <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center mt-4">Error sending message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;