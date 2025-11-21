import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, FileText, Terminal } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let's Build Something Together
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-zinc-200"
            >
              <a href="mailto:critik1704@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Say Hello
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-zinc-800 hover:bg-zinc-900 hover:text-white"
            >
              <a
                href="https://drive.google.com/file/d/1k80HG2Z_3UapvrhBiHnmyDroHGds4xN8/view?usp=sharing"
                target="_blank"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
