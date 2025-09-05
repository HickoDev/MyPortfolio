import { Linkedin, Mail, MapPin, Phone, Facebook } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-8 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-8 justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:ali.dridi@insat.ucar"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ali.dridi@insat.ucar
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+21692147733"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +216 92147733
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">
                  Cité Olympique, Ariana, Tunis
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/ali-dridi-065235140/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.facebook.com/ali.dridi.319/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};