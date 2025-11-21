import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "Hello Zelo",
    role: "Software Engineer",
    period: "Sep 2025 - Present",
    description: [
      "Centralized chat state management in Next.js frontend enabling seamless tab transitions without losing context.",
      "Developed a Gmail connector in FastAPI that dynamically adds incoming emails into the knowledge base via webhooks.",
      "Added automated knowledge-refresh functionality for Google Drive, Play Store, and Intercom connectors.",
    ],
    tech: ["Next.js", "FastAPI", "Tailwind", "PostgreSQL", "Qdrant"],
  },
  {
    company: "AI Stealth Startup",
    role: "Software Engineering Intern",
    period: "June 2024 – July 2024",
    description: [
      "Designed and deployed a high-performance real-time chat system for 50+ users using WebSockets and Supabase.",
      "Refactored Gmail parser with OOP principles, improving email ingestion speed by 50% and reducing LLM token cost by 30%.",
    ],
    tech: ["Next.js", "FastAPI", "Tailwind", "Supabase", "Sentry", "LangSmith"],
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-zinc-950/50" id="experience">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-zinc-800"></div>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border-4 border-background bg-zinc-800 text-zinc-400 flex items-center justify-center shadow-md transform -translate-x-1/2 z-10 group-hover:bg-white group-hover:text-black transition-colors">
                <span className="text-xs font-bold">{index + 1}</span>
              </div>

              {/* Content Card */}
              <Card className="w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <CardTitle className="text-xl font-bold text-white">
                      {job.role}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="w-fit font-mono text-xs"
                    >
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-zinc-400 font-medium">{job.company}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-400 text-sm mb-6">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 bg-transparent text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
