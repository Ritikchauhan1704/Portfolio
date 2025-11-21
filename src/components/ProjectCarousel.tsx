import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Github as GithubIcon,
} from "lucide-react";
import { getPinnedRepos } from "@/lib/github";


const staticProjects = [
  {
    name: "LeetCode AI Assistant",
    description:
      "Chrome extension that enhances LeetCode with AI-powered assistance. Get instant problem explanations, code solutions in multiple languages, and debugging help with real-time streaming responses using Gemini Flash.",
    topics: ["Chrome Extension", "React", "TypeScript", "Gemini API", "Tailwind CSS"],
    html_url: "https://github.com/Ritikchauhan1704/leetcodeAIAssistant",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Math Canvas",
    description:
      "Interactive web app to draw math equations on canvas and get instant solutions. Uses Gemini 2.0 Flash for handwriting recognition, supports variable assignment, and displays results with draggable LaTeX rendering.",
    topics: ["React", "TypeScript", "FastAPI", "Gemini API", "LaTeX", "Canvas"],
    html_url: "https://github.com/Ritikchauhan1704/Math_Canvas",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Unified LLM",
    description:
      "TypeScript package providing a unified interface for multiple LLM providers (OpenAI, Anthropic, Gemini, Groq). Features agent framework with tool support, LangGraph workflows, type-safe tools with Zod, and streaming capabilities.",
    topics: ["TypeScript", "LLM", "Agents", "OpenAI", "Anthropic", "Gemini", "Zod"],
    html_url: "https://github.com/Ritikchauhan1704/Unified-LLm",
    homepage: "https://www.npmjs.com/package/unified-llm",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Go Shell",
    description:
      "Feature-rich interactive shell written in Go with advanced line editing, command history, tab completion, I/O redirection (>, >>, 2>, 2>>), and quote handling. Includes built-in commands and external command execution.",
    topics: ["Go", "Shell", "CLI", "System Programming", "Terminal"],
    html_url: "https://github.com/Ritikchauhan1704/go_shell",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "GVC - Go Version Control",
    description:
      "Git-inspired version control system written in Go. Implements core Git features: hash-object, cat-file, write-tree, ls-tree, staging area, commits with metadata, and log history. Uses SHA-1 hashing and zlib compression.",
    topics: ["Go", "Version Control", "Git", "CLI", "System Programming"],
    html_url: "https://github.com/Ritikchauhan1704/Gvc-Go-version-control",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
  },
];

interface Project {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
}

export default function ProjectCarousel() {
  const [projects, setProjects] = useState<Project[]>(staticProjects);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  

  // This doesn't look good for now 
  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const githubUsername = "Ritikchauhan1704";
  //       const repos = await getPinnedRepos(githubUsername);
  //       console.log(repos);
  //       if (repos && repos.length > 0) {
  //         setProjects(repos);
  //       }
  //     } catch (error) {
  //       console.error("Using fallback projects:", error);
  //       setProjects(staticProjects);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-zinc-800"></div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-zinc-800 hover:bg-zinc-800 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-zinc-800 hover:bg-zinc-800 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="overflow-hidden -mx-6 px-6 py-4" ref={emblaRef}>
          <div className="flex gap-6 touch-pan-y">
            {projects.map((project, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 first:pl-0"
                key={index}
              >
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
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grow">
                      <p className="text-zinc-400 mb-6 leading-relaxed text-sm line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.topics?.slice(0, 3).map((topic) => (
                          <Badge
                            key={topic}
                            variant="secondary"
                            className="bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 border border-zinc-800"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-4 border-t border-zinc-800/50 flex gap-4">
                      {project.html_url && (
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="text-zinc-400 hover:text-white p-0 hover:bg-transparent h-auto font-normal"
                        >
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon className="h-4 w-4 mr-2" />
                            Source
                          </a>
                        </Button>
                      )}
                      {project.homepage && (
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="text-zinc-400 hover:text-white p-0 hover:bg-transparent ml-auto h-auto font-normal"
                        >
                          <a
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
