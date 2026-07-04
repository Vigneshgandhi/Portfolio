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
    credential: "../../Certificates/NPTEL CERTIFICATE.pdf",
  },
  {
    title: "Nasa International space apps",
    issuer: "Nasa",
    duration: "2025",
    description:
      "Studied cloud architecture, virtualization, service models, deployment models, and distributed computing concepts.",
    credential: "../../Certificates/Certficate from Nasaspaceapps.pdf",
  },
];

export default function Certifications() {
  return (
    <section className="min-h-screen bg-white py-20 text-[#1A1616]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="font-semibold uppercase tracking-widest text-[#D91A3A]">
            Professional Learning
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Certifications
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[#403939]">
            Certifications and professional courses that
            strengthened my knowledge in software engineering,
            machine learning, cloud technologies, and data science.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">

          <div className="rounded-3xl border border-[#801426]/10 bg-[#1A1616] p-8 text-white text-center shadow-lg shadow-[#801426]/10">
            <FaCertificate
              size={40}
              className="mx-auto mb-4 text-[#FCDF4C]"
            />
            <h3 className="text-4xl font-bold">2</h3>
            <p className="mt-2 text-white/75">
              Certifications
            </p>
          </div>

          <div className="rounded-3xl border border-[#801426]/10 bg-[#1A1616] p-8 text-center text-white shadow-lg shadow-[#801426]/15">
            <FaAward
              size={40}
              className="mx-auto mb-4 text-[#FCDF4C]"
            />
            <h3 className="text-4xl font-bold">2</h3>
            <p className="mt-2 text-white/75">
              Platforms
            </p>
          </div>

          <div className="rounded-3xl border border-[#FCDF4C]/70 bg-[#1A1616] p-8 text-center text-white shadow-lg shadow-[#FCDF4C]/25">
            <FaCertificate
              size={40}
              className="mx-auto mb-4 text-[#FCDF4C]"
            />
            <h3 className="text-4xl font-bold">100%</h3>
            <p className="mt-2 text-white/75">
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
              className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10 transition hover:border-[#D91A3A]/35"
            >

              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-2xl font-semibold">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-[#D91A3A]">
                    {cert.issuer}
                  </p>
                </div>

                <span className="rounded-full bg-[#FCDF4C]/60 px-4 py-2 text-sm text-[#801426]">
                  {cert.duration}
                </span>

              </div>

              <p className="mt-6 leading-7 text-[#403939]">
                {cert.description}
              </p>

              <div className="mt-8">
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#D91A3A] hover:text-[#801426]"
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



