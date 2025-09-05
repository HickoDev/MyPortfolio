import { useState } from "react";
import { cn } from "@/lib/utils";

const capitalize = (s) =>
  typeof s === "string" && s.length
    ? s.charAt(0).toUpperCase() + s.slice(1)
    : s;

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  {name: "MySQL", category: "Backend" },
{ name: "Flask /FastAPI", category: "Backend" },

  // DevOps
  { name: "Docker", category: "Devops" },
  { name: "AWS (EC2 / S3 / IAM)", category: "Devops" },
  { name: "Kubernetes", category: "Devops" },
  { name: "Git / GitHub", category: "Devops" },
  { name: "CI/CD (GitHub Actions)", category: "Devops" },
  { name: "Linux / Bash", category: "Devops" },
  { name: "Jenkins", category: "Devops" },

  // Automation
  { name: "Python scripting", category: "Automation" },
  { name: "Bash scripts", category: "Automation" },
  { name: "Ansible", category: "Automation" },
  { name: "Web scraping (BeautifulSoup / Puppeteer / Selenium)", category: "Automation" },

  // Game Dev
  { name: "Unity", category: "Gamedev" },
  { name: "Godot", category: "Gamedev" },
  { name: "C#", category: "Gamedev" },

  // AI / Data
  { name: "Python", category: "AI & Data Science" },
  { name: "NumPy", category: "AI & Data Science" },
  { name: "Gurobi", category: "AI & Data Science" },
  { name: "scikit-learn", category: "AI & Data Science" },
  { name: "PyTorch", category: "AI & Data Science" },

  // Cloud (skills rather than just certificate)

  // Networks
  { name: "CCNA 1 — Introduction to Networks", category: "Networks" },
  { name: "CCNA 2 — Switching, Routing, and Wireless Essentials", category: "Networks" },
  { name: "CCNA 3 — Enterprise Networking, Security, and Automation", category: "Networks" },
];

// ordered categories: frontend, backend, devops, automation, gamedev, ai, networks
const categories = [
  "All",
  "Frontend",
  "Backend",
  "Devops",
  "Automation",
  "Gamedev",
  "AI & Data Science",
  "Networks",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );
  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 9);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {capitalize(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-between"
            >
              <div className="text-left">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="ml-4">
                <span className="px-3 py-1 rounded-full bg-secondary/70 text-sm">
                  {capitalize(skill.category)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length > 9 && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-200"
            >
              {showAll ? "Show less" : "Show more"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};