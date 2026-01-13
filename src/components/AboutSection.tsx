import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-30 scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 glow-effect">
                <img
                  src={profileImage}
                  alt="Amaike Bright"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Passionate about creating{" "}
              <span className="gradient-text">beautiful web experiences</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm Amaike Bright, a frontend developer and web designer with a deep passion 
              for crafting exceptional digital experiences. I specialize in building 
              responsive, user-friendly websites that not only look stunning but also 
              deliver outstanding performance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With a keen eye for design and a solid foundation in modern web technologies, 
              I bridge the gap between aesthetics and functionality. Every project I take on 
              is an opportunity to push creative boundaries while maintaining clean, 
              maintainable code.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
