import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "GVC - Go Version Control",
    description: "Created support for 9+ Git-like commands (init, add, commit, ls-tree, log). Implemented SHA-1 and zlib compression achieving 45% storage efficiency.",
    tech: ["Golang", "System Programming", "Algorithms"],
    link: "#",
    github: "#"
  },
  {
    title: "AI MathCanvas",
    description: "Built a math calculator using Gemini API to solve 30+ complex mathematical expressions. Integrated a multi-functional canvas that recognizes hand-drawn symbols.",
    tech: ["React.js", "FastAPI", "Gemini API", "Canvas API"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-zinc-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 transition-all group">
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-zinc-200 transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="grow">
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4 border-t border-zinc-800/50 flex gap-4">
                  <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-white p-0 hover:bg-transparent">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-white p-0 hover:bg-transparent ml-auto">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}