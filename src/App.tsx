import React from "react";
import { motion } from "motion/react";
import { Bot, Zap, Cpu, CheckCircle2, Layout, Database, MessageSquare, Code, Globe, Mail } from "lucide-react";

const WorkflowStep = ({ icon: Icon, title, description, isLast }: { icon: any, title: string, description: string, isLast?: boolean }) => (
  <div className="relative flex flex-col items-center group">
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="w-16 h-16 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20 relative z-10 bg-[#0a0a0a]/80 backdrop-blur-sm"
    >
      <Icon size={28} />
    </motion.div>
    <h4 className="mt-4 font-bold text-sm text-center">{title}</h4>
    <p className="text-[10px] text-gray-400 text-center max-w-[120px] mt-1">{description}</p>
    
    {!isLast && (
      <div className="hidden lg:block absolute top-8 left-[100%] w-full h-[2px] bg-gradient-to-r from-[#00ff88]/50 to-transparent -translate-x-4 z-0">
        <motion.div 
          animate={{ x: ["0%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-4 h-full bg-[#00ff88] shadow-[0_0_10px_rgba(0,255,136,1)]"
        />
      </div>
    )}
  </div>
);

const CaseStudyCard = ({ title, results, description }: { title: string, results: string[], description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-8 border border-white/5 hover:border-[#00ff88]/30 transition-all"
  >
    <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-[10px] font-bold uppercase tracking-widest mb-4">
      Case Study
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>
    <div className="space-y-3">
      {results.map((result, i) => (
        <div key={i} className="flex items-center gap-2">
          <CheckCircle2 size={16} className="text-[#00ff88]" />
          <span className="text-sm font-medium">{result}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#00ff88] selection:text-black">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-6 px-6 md:px-20 lg:px-24 fixed top-0 left-0 w-full backdrop-blur-md z-50 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00ff88] rounded-xl flex items-center justify-center">
            <Bot className="text-black" size={24} />
          </div>
          <span className="text-lg font-bold">AI Sales Assistant</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="text-[#00ff88]">Demo</a>
          <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
          <a href="#cases" className="hover:text-white transition-colors">Case Studies</a>
          <a href="https://aq-dev-portfolio.vercel.app/" className="bg-[#00ff88]/10 text-[#00ff88] px-4 py-2 rounded-lg border border-[#00ff88]/20">Hire Me</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-20 lg:px-24 pt-40 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#00ff88]/5 blur-[120px] rounded-full -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#00ff88] font-bold text-xs uppercase tracking-widest mb-4 block">
            Powered by OpenAI & n8n
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            AI-Powered <span className="text-[#00ff88]">Sales Assistant</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A standalone intelligent agent that qualifies leads, answers FAQs, and books appointments 24/7. 
            Never miss a potential client again.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('workflow')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00ff88] text-black px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_25px_rgba(0,255,136,0.3)] transition-all"
            >
              Live Demo
            </button>
            <button 
              onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/10 px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all"
            >
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>

      {/* Workflow Visualizer */}
      <section id="workflow" className="py-20 px-6 md:px-20 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400">Automated end-to-end booking journey</p>
        </div>

        <div className="glass-card p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 0)`, backgroundSize: '30px 30px' }}>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4">
            <WorkflowStep 
              icon={MessageSquare} 
              title="User Interaction" 
              description="Customer asks a question via Chat or WhatsApp"
            />
            <WorkflowStep 
              icon={Cpu} 
              title="AI Analysis" 
              description="LLM processes intent & fetches business data"
            />
            <WorkflowStep 
              icon={Database} 
              title="Slot Checking" 
              description="Checks real-time availability in Calendar"
            />
            <WorkflowStep 
              icon={Zap} 
              title="Instant Booking" 
              description="Confirmation sent & CRM updated automatically"
              isLast
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 px-6 md:px-20 lg:px-24 bg-white/[0.01]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CaseStudyCard 
            title="Healthcare Clinic"
            description="Automated patient booking for a local dental clinic, handling after-hours inquiries."
            results={[
              "45% more bookings after-hours",
              "Zero manual work for receptionists",
              "Instant confirmation for patients"
            ]}
          />
          <CaseStudyCard 
            title="E-commerce Support"
            description="AI Agent handling order tracking and refund queries for a Shopify store."
            results={[
              "70% reduction in support tickets",
              "Average response time: 2 seconds",
              "Improved conversion by 15%"
            ]}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-20 lg:px-24 border-t border-white/5 text-center">
        <p className="text-gray-500 text-sm">
          Designed & Developed by <a href="https://qaiseradnan.com" className="text-[#00ff88]">Adnan Qaiser</a>
        </p>
      </footer>
    </div>
  );
};

export default App;
