import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      "JavaScript / TypeScript",
      "Python",
      "Golang",
      "Rust",
      "Kotlin",
      "Java",
      "C/C++",
    ],
  },
  {
    name: "Frontend",
    skills: [
      "Next.js",
      "ReactJS",
      "React Native",
      "TailwindCSS",
      "HTMX",
      "HTML/CSS",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "SpringBoot",
      "Firebase",
      "Hono.js",
    ],
  },
  {
    name: "Databases & Tools",
    skills: [
      "PostgreSQL",
      "Redis",
      "MongoDB",
      "MySQL",
      "Git",
      "GitHub",
      "Docker",
      "Kafka",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-zinc-950/50" id="skills">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-zinc-800"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium text-zinc-200 font-mono border-l-2 border-zinc-700 pl-3">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-all py-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
