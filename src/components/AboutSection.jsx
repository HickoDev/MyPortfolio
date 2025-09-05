import { Code, Terminal, Gamepad, Cpu, Server } from "lucide-react";
import cvPdf from "../../Ali Dridi cv - INSAT.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-5" >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              4th-year ICT Engineer at INSAT
            </h3>

            <p className="text-muted-foreground">
              I'm a 4th-year ICT engineering student at INSAT with experience
              in web development, DevOps & automation, and game development.
              I build responsive web apps, automate deployment pipelines,
              and develop interactive game systems.
            </p>

            <p className="text-muted-foreground">
              I also have a strong foundation in AI and data science and enjoy
              applying machine learning and data-driven techniques to real
              projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={cvPdf}
                download="Ali-Dridi-CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible web applications using
                    modern frameworks and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">DevOps</h4>
                  <p className="text-muted-foreground">
                    Managing CI/CD, infrastructure, and release workflows to
                    ensure reliable deployments and system health.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Automation</h4>
                  <p className="text-muted-foreground">
                    Creating automation scripts and tooling to streamline
                    repetitive tasks, testing, and deployment processes.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Game Development</h4>
                  <p className="text-muted-foreground">
                    Developing gameplay systems, prototypes, and interactive
                    experiences using modern engines.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Data Science</h4>
                  <p className="text-muted-foreground">
                    Good foundation in machine learning and data analysis;
                    comfortable prototyping models and working with datasets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};