import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
const projects = [
  {
    title: "Android Malware Variant Detection Using Static Features",
    shortDescription:
      "Android malware detection using static analysis and machine learning.",
    description:
      "Designed a malware detection framework that performs static analysis on Android applications to identify malicious software and malware variants. The system extracts security-related features from APK files, including permissions, API calls, intent filters, and AndroidManifest.xml information. Machine learning models are then trained to classify applications as benign or malicious while identifying malware variants.",
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Android Analysis",
      "Pandas",
    ],
    tags: ["Cybersecurity", "Machine Learning"],
    id:1
  },

  {
    title: "Stock Market Trend Analysis Using Apache Spark",
    shortDescription:
      "Big data analytics platform for stock trend prediction.",
    description:
      "Built a stock market trend analysis platform using Apache Spark and PySpark to process large-scale historical stock datasets. The system performs distributed processing, moving average calculations, trend detection, and visualization to provide insights into stock market behavior.",
    technologies: [
      "Apache Spark",
      "PySpark",
      "Hadoop",
      "Hive",
      "Python",
    ],
    tags: ["Big Data Analytics", "Data Science"],
    id:2
  },

  {
    title:
      "Real-Time Click Fraud Detection in Online Advertising Using Advanced Predictive Models",
    shortDescription:
      "AI-powered click fraud detection for digital advertising.",
    description:
      "Developed an intelligent fraud detection system capable of identifying invalid and fraudulent advertisement clicks in affiliate marketing and PPC environments. Behavioral analysis, feature engineering, and machine learning algorithms were used to distinguish genuine interactions from suspicious activities.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "Deep Learning",
    ],
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Deep Learning",
    ],
    id:3
  },
];
  
const [selectedProject, setSelectedProject] = useState(null);

return ( 
<section className="mx-auto min-h-[80vh] max-w-7xl bg-white px-6 py-16 text-[#1A1616]">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-10 max-w-3xl"
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D91A3A]">
      Selected Work
    </p>

    <h1 className="text-4xl font-bold text-[#1A1616] sm:text-5xl">
      Projects
    </h1>

    <p className="mt-4 text-lg leading-relaxed text-[#403939]">
      Showcasing my work in Artificial Intelligence,
      Cybersecurity, Big Data Analytics, and Full Stack
      Development.
    </p>
  </motion.div>

  <div className="grid gap-6 md:grid-cols-3">

    {projects.map((project, index) => (

      <motion.article
        key={project.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="rounded-2xl border border-[#801426]/10 bg-white p-6 shadow-lg shadow-[#801426]/10 backdrop-blur-lg transition hover:border-[#D91A3A]/35"
      >

        <h2 className="text-xl font-semibold text-[#1A1616]">
          {project.title}
        </h2>

        <p className="mt-3 text-[#403939]">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#801426]/10 bg-[#FCDF4C]/50 px-3 py-1 text-xs text-[#801426]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D91A3A] hover:text-[#801426]"
        >
          View Details
          <FaArrowRight />
        </Link>

      </motion.article>
    ))}

  </div>

  <AnimatePresence>

    {selectedProject && (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1616]/80 p-6"
      >

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="relative w-full max-w-3xl rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-2xl"
        >

          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-6 top-6 text-[#403939] hover:text-[#D91A3A]"
          >
            <FaTimes size={22} />
          </button>

          <h2 className="mb-6 text-3xl font-bold text-[#1A1616]">
            {selectedProject.title}
          </h2>

          <p className="leading-8 text-[#403939]">
            {selectedProject.description}
          </p>

          <h3 className="mb-4 mt-8 text-xl font-semibold text-[#D91A3A]">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-3">

            {selectedProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#FCDF4C]/45 px-4 py-2 text-[#801426]"
              >
                {tech}
              </span>
            ))}

          </div>

        </motion.div>

      </motion.div>

    )}

  </AnimatePresence>

</section>
);
}




