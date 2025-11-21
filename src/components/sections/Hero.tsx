import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-0 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
          backgroundImage: `radial-gradient(#333 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <div className="container max-w-5xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-zinc-400 border border-zinc-800 rounded-full bg-zinc-900/50 backdrop-blur-sm">
            Software Engineer | AI & Web3
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Ritik <br/>
            <span className="text-zinc-500">Chauhan</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
            I specialize in developing high-performance, full-stack applications, utilizing technologies like Next.js and FastAPI to drive efficiency and user experience. My expertise includes scaling LLM-powered applications and delivering robust, multi-chain solutions in the Web3 space using Rust and Solidity. I am a Codeforces Specialist committed to clean architecture and effective problem-solving.
            <br /><br />
            Let's connect if you're exploring the future of AI or decentralized technologies.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="outline" className="h-12 px-6 border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all">
              <a href="https://github.com/" target="_blank" rel="noreferrer" data-testid="link-github">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 px-6 border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" data-testid="link-linkedin">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild className="h-12 px-6 bg-white text-black hover:bg-zinc-200 transition-all font-medium">
              <a href="mailto:critik1704@gmail.com" data-testid="link-email">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-linear-to-tr from-zinc-800 to-zinc-900 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 ease-out"></div>
            <div className="absolute inset-0 bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden -rotate-3 group-hover:-rotate-2 transition-transform duration-300 ease-out">
              <img 
                src="/attached_assets/Gemini_Generated_Image_chy8idchy8idchy8_1763705205401.png" 
                alt="Ritik Chauhan" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                data-testid="img-profile"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}