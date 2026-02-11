import { useNavigate } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  BarChart3, PlayCircle, Link2, Layout, Users2, Monitor, CheckCircle2, ArrowRight 
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const features = [
    { title: "Visual Test Dashboards", desc: "Gain clear insights into test coverage, results, and execution timelines across all environments.", icon: <BarChart3 className="w-8 h-8" /> },
    { title: "One-Click Execution", desc: "Run tests across multiple stages instantly. Eliminate reproducibility issues with visual logs.", icon: <PlayCircle className="w-8 h-8" /> },
    { title: "Requirement Traceability", desc: "Link every test to business objectives and maintain system evolution with confidence.", icon: <Link2 className="w-8 h-8" /> },
    { title: "No-Code Test Builder", desc: "Create and manage test cases using intuitive interfaces. No technical knowledge needed.", icon: <Layout className="w-8 h-8" /> },
    { title: "Collaboration Tools", desc: "Enable seamless communication and feedback between testers, developers, and stakeholders.", icon: <Users2 className="w-8 h-8" /> },
    { title: "Cross-Browser Testing", desc: "Ensure your application works flawlessly across all major browsers with automated compatibility tests.", icon: <Monitor className="w-8 h-8" /> },
  ];

  const benefits = [
    { title: "Speed & Efficiency", desc: "Reduce test creation time by up to 80% with our intuitive no-code interface." },
    { title: "Cost-Effective", desc: "Lower your testing overhead by minimizing the need for specialized coding skills." },
    { title: "Enhanced Collaboration", desc: "Bridge the gap between technical and non-technical team members with a shared platform." },
    { title: "Scalable Solution", desc: "Whether you're a small team or a large enterprise, InfoQA scales with your needs." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 overflow-x-hidden">
      {/* 0. Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      {/* 1. Header Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 sticky top-0 bg-white/70 backdrop-blur-xl z-[60] border-b border-slate-200/50">
        <div className="flex items-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">I</div>
            <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">InfoQA</span>
          </motion.div>
          <div className="hidden lg:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors relative group">
              Intro feature
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-100 origin-left transition-transform" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors relative group">
              Release Notes
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all"
        >
          Login <ArrowRight size={18} />
        </motion.button>
      </nav>

      {/* 2. Animated Hero Section */}
      <header className="relative pt-32 pb-10 px-6 text-center overflow-hidden">
        {/* Background Decorative Elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/2 -right-24 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl -z-10"
        />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            The Future of Quality Assurance
          </motion.span>
          <h1 className="text-6xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
            No-Code Test <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient">Automation for Everyone</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            Empower your team to automate tests without writing code. Streamline execution, 
            traceability, and visibility with ease.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">Get Started Free</button>
            <button className="px-10 py-5 bg-white border border-slate-200 rounded-2xl font-bold text-lg hover:border-blue-400 transition-all shadow-sm">View Live Demo</button>
          </motion.div>
        </motion.div>
      </header>

      {/* 3. Key Features Grid */}
      <section className="max-w-7xl mx-auto py-32 px-6 relative">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Key Features
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">Discover the powerful tools that make InfoQA the ideal solution for your testing needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="group p-10 rounded-[2.5rem] border border-slate-200 bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/30 transition-all duration-500 flex flex-col items-center text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] hover:border-blue-200"
            >
              <div className="text-blue-600 mb-8 p-5 bg-blue-50 rounded-[2rem] group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 shadow-inner">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 tracking-tight">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Section - Modern Glass Checklist */}
      <section className="bg-slate-900 py-32 px-6 relative overflow-hidden">
        {/* Abstract background for dark section */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500 blur-[150px] rounded-full translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white mb-6">Why Choose InfoQA?</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">We provide unique advantages to accelerate your testing process and improve quality.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="mb-6 flex items-center justify-between">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  <span className="text-slate-700 font-mono text-4xl font-black">0{i+1}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{b.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm font-medium">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;