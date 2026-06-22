import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiApachehadoop,
  SiApachespark,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaReact size={28} />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs size={28} />,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: <FaDatabase size={28} />,
    skills: ["MongoDB", "SQL"],
  },
  {
    title: "Programming",
    icon: <FaPython size={28} />,
    skills: ["Python", "Java"],
  },
  {
    title: "Cybersecurity & AI",
    icon: <FaShieldAlt size={28} />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Cybersecurity",
      "Data Analysis",
    ],
  },
  {
    title: "Design Tools",
    icon: <FaPalette size={28} />,
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD",
      "Adobe InDesign",
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 text-white">

      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-cyan-400 font-semibold">
          Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Technical Skills
        </h2>

        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Technologies and tools that I use to design,
          develop, and deploy modern software solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
          >

            <div className="text-cyan-400 mb-4">
              {category.icon}
            </div>

            <h3 className="text-xl font-semibold mb-5">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">

              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-sm"
                >
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}