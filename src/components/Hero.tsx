import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

const GithubIcon = ({ size = 24, ...props }: IconSvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.087-.744.084-.729.084-.729 1.203.084 1.836 1.234 1.836 1.234 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.574C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
};

const LinkedinIcon = ({ size = 24, ...props }: IconSvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      {...props}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-0 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#333 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
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
            Ritik <br />
            <span className="text-zinc-500">Chauhan</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
            Full-stack developer specializing in AI and Web3. I build scalable
            applications with Next.js, FastAPI, and Rust. Passionate about clean
            architecture and solving complex problems.
            <br />
            <br />
            Let's connect to explore the future of technology together.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              variant="outline"
              className="h-12 px-6 border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all"
            >
              <a
                href="https://github.com/ritikchauhan1704"
                target="_blank"
                rel="noreferrer"
                data-testid="link-github"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-6 border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all"
            >
              <a
                href="https://www.linkedin.com/in/ritik-chauhan-8b1864280/"
                target="_blank"
                rel="noreferrer"
                data-testid="link-linkedin"
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              className="h-12 px-6 bg-white text-black hover:bg-zinc-200 transition-all font-medium"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=critik1704@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-email"
              >
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
                src="/dp.png"
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
