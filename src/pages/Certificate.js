import { motion } from "framer-motion";
import {
  FaCertificate,
  FaAward,
  FaExternalLinkAlt,
} from "react-icons/fa";

const certifications = [
  {
    title: "Introduction to IOT",
    issuer: "NPTEL",
    duration: "2026",
    description:
      "Learned fundamental machine learning concepts including supervised learning, classification, regression, model evaluation, and feature engineering.",
    credential: "#",
  },
  {
    title: "Nasa International space apps",
    issuer: "Nasa",
    duration: "2025",
    description:
      "Studied cloud architecture, virtualization, service models, deployment models, and distributed computing concepts.",
    credential: "#",
  },
];

export default function Certifications() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-widest text-cyan-400 font-semibold">
            Professional Learning
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Certifications
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">
            Certifications and professional courses that
            strengthened my knowledge in software engineering,
            machine learning, cloud technologies, and data science.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
            <FaCertificate
              size={40}
              className="mx-auto text-cyan-400 mb-4"
            />
            <h3 className="text-4xl font-bold">2</h3>
            <p className="text-slate-400 mt-2">
              Certifications
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
            <FaAward
              size={40}
              className="mx-auto text-cyan-400 mb-4"
            />
            <h3 className="text-4xl font-bold">2</h3>
            <p className="text-slate-400 mt-2">
              Platforms
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">
            <FaCertificate
              size={40}
              className="mx-auto text-cyan-400 mb-4"
            />
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="text-slate-400 mt-2">
              Completed
            </p>
          </div>

        </div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >

              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {cert.title}
                  </h3>

                  <p className="text-cyan-400 mt-2">
                    {cert.issuer}
                  </p>
                </div>

                <span className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full text-sm">
                  {cert.duration}
                </span>

              </div>

              <p className="text-slate-400 mt-6 leading-7">
                {cert.description}
              </p>

              <div className="mt-8">
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  View Credential
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}