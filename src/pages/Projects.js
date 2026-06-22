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
<section className="mx-auto min-h-[80vh] max-w-7xl px-6 py-16 text-slate-100">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-10 max-w-3xl"
  >
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-300">
      Selected Work
    </p>

    <h1 className="text-4xl font-bold text-white sm:text-5xl">
      Projects
    </h1>

    <p className="mt-4 text-lg leading-relaxed text-slate-400">
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
        className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-lg"
      >

        <h2 className="text-xl font-semibold text-white">
          {project.title}
        </h2>

        <p className="mt-3 text-slate-400">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="mt-6 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
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
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      >

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="max-w-3xl w-full bg-slate-900 border border-slate-700 rounded-3xl p-8 relative"
        >

          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-6 top-6 text-slate-400 hover:text-white"
          >
            <FaTimes size={22} />
          </button>

          <h2 className="text-3xl font-bold text-white mb-6">
            {selectedProject.title}
          </h2>

          <p className="leading-8 text-slate-300">
            {selectedProject.description}
          </p>

          <h3 className="mt-8 mb-4 text-xl font-semibold text-cyan-400">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-3">

            {selectedProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-800 px-4 py-2"
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
