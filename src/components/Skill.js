import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaPalette,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

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
    <section className="mx-auto max-w-7xl bg-white px-6 py-10 text-[#1A1616]">

      <div className="text-center mb-16">
        <p className="font-semibold uppercase tracking-widest text-[#D91A3A]">
          Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Technical Skills
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[#403939]">
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
            className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10 transition hover:border-[#D91A3A]/30"
          >

            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FCDF4C] text-[#801426]">
              {category.icon}
            </div>

            <h3 className="mb-5 text-xl font-semibold text-[#1A1616]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">

              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#801426]/10 bg-[#403939]/5 px-3 py-2 text-sm text-[#403939] transition hover:border-[#D91A3A]/30 hover:bg-[#FCDF4C]/35"
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



