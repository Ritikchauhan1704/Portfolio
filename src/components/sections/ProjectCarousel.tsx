import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "GVC - Go Version Control",
    description: "A Git-compatible version control system written in Go. Supports init, add, commit, and object inspection. Implemented SHA-1 and zlib compression for efficient storage.",
    tech: ["Golang", "System Programming", "Algorithms"],
    link: "#",
    github: "#"
  },
  {
    title: "AI MathCanvas",
    description: "Interactive math solver using Gemini API. Draw complex equations on a canvas and get instant step-by-step solutions. Features handwriting recognition.",
    tech: ["React.js", "FastAPI", "Gemini API", "Canvas API"],
    link: "#",
    github: "#"
  },
  {
    title: "Real-time Chat System",
    description: "High-performance chat application handling 50+ concurrent users. Built with WebSockets for instant messaging and Supabase for reliable persistence.",
    tech: ["Next.js", "WebSockets", "Supabase", "TypeScript"],
    link: "#",
    github: "#"
  },
  {
    title: "Gmail Knowledge Connector",
    description: "Automated pipeline that ingests emails into a vector database (Qdrant) for RAG applications. Updates knowledge base in real-time via webhooks.",
    tech: ["FastAPI", "Qdrant", "Python", "RAG"],
    link: "#",
    github: "#"
  },
  {
    title: "E-commerce Dashboard",
    description: "Modern admin dashboard for managing products and orders. Features data visualization with Recharts and full dark mode support.",
    tech: ["Next.js", "Tailwind CSS", "Recharts", "PostgreSQL"],
    link: "#",
    github: "#"
  }
];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-20 px-6 bg-zinc-950" id="projects">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-between items-end"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <div className="h-1 w-20 bg-zinc-800"></div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={scrollPrev} className="rounded-full border-zinc-800 hover:bg-zinc-800 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} className="rounded-full border-zinc-800 hover:bg-zinc-800 hover:text-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="overflow-hidden -mx-6 px-6 py-4" ref={emblaRef}>
          <div className="flex gap-6 touch-pan-y">
            {projects.map((project, index) => (
              <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col bg-zinc-900/30 border-zinc-800 hover:border-zinc-600 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/20">
                    <CardHeader>
                      <CardTitle className="text-xl text-white group-hover:text-zinc-100 transition-colors flex items-center justify-between">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grow">
                      <p className="text-zinc-400 mb-6 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary" className="bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 border border-zinc-800">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-zinc-800/50 flex gap-4">
                      <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-white p-0 hover:bg-transparent h-auto font-normal">
                        <Github className="mr-2 h-4 w-4" />
                        Source
                      </Button>
                      <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-white p-0 hover:bg-transparent ml-auto h-auto font-normal">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}