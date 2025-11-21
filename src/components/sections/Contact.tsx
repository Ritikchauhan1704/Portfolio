import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 px-6 border-t border-zinc-900" id="contact">
      <div className="container max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mx-auto mb-6 border border-zinc-800">
            <Terminal className="text-zinc-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Build Something Together</h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200">
              <a href="mailto:critik1704@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Say Hello
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zinc-800 hover:bg-zinc-900 hover:text-white">
              <a href="/attached_assets/Ritik_Chauhan_SDE_Resume_2025_1763705213079.pdf" target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-900/50 flex justify-center gap-8">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          
          <p className="mt-8 text-xs text-zinc-600 font-mono">
            © 2025 Ritik Chauhan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}