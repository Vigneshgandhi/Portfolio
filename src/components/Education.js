import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "Master of Engineering",
    specialization: "Computer Science and Engineering",
    institution: "National Engineering College (Autonomous)",
    period: "2025 - 2027",
    cgpa: "7.71(up to first semester)",
    status: "Currently Pursuing",
  },
  {
    degree: "Bachelor of Engineering",
    specialization: "Computer Science and Engineering",
    institution: "Sri Eshwar College of Engineering",
    period: "2019 - 2023",
    cgpa: "7.38",
    status: "Completed",
  },
  {
    degree: "Higher Secondary School",
    specialization: "Computer Science and Engineering",
    institution: "St. Paul's Matriculation Higher Secondary School",
    period: "2018-2019",
    Marks: "68.3",
    status: "Completed",
  },
  {
    degree: "Secondary School Leaving Certificate",
    specialization: "Computer Science and Engineering",
    institution: "St. Paul's Matriculation Higher Secondary School",
    period: "2016-2017",
    Marks: "88.8",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Section Heading */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-widest text-cyan-400 font-semibold">
          Academic Journey
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
          Education
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mt-5">
          My academic background and continuous pursuit of
          knowledge in computer science, software engineering,
          artificial intelligence, and emerging technologies.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-cyan-500/30"></div>

        <div className="space-y-12">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-16"
            >

              {/* Timeline Dot */}
              <div className="absolute left-0 top-4 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center">
                <FaGraduationCap className="text-white" />
              </div>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500/50 transition">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.degree}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {item.specialization}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 w-fit">
                    {item.period}
                  </span>

                </div>

                <div className="mt-6 flex items-center gap-3">
                  <FaUniversity className="text-cyan-400" />

                  <p className="text-slate-300">
                    {item.institution}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">

                  <div className="bg-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">
                      Academic Performance
                    </p>

                    <h4 className="text-xl font-semibold mt-2">
                      {item.cgpa?`CGPA:${item.cgpa}`:`Marks: ${item.Marks}%`}
                    </h4>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-4">
                    <p className="text-slate-400 text-sm">
                      Status
                    </p>

                    <h4 className="text-xl font-semibold mt-2">
                      {item.status}
                    </h4>
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}