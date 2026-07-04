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
    <section className="mx-auto max-w-7xl px-6 py-24">

      {/* Section Heading */}
      <div className="text-center mb-20">

        <p className="font-semibold uppercase tracking-widest text-[#D91A3A]">
          Academic Journey
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#1A1616] md:text-5xl">
          Education
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[#403939]">
          My academic background and continuous pursuit of
          knowledge in computer science, software engineering,
          artificial intelligence, and emerging technologies.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-[#D91A3A]/25"></div>

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
              <div className="absolute left-0 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#D91A3A] shadow-lg shadow-[#D91A3A]/25">
                <FaGraduationCap className="text-white" />
              </div>

              {/* Card */}
              <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10 transition hover:border-[#D91A3A]/40">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  <div>
                    <h3 className="text-2xl font-bold text-[#1A1616]">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-[#D91A3A]">
                      {item.specialization}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-[#801426]/10 bg-[#B0132D] px-4 py-2 text-[#FFFFFF]">
                    {item.period}
                  </span>

                </div>

                <div className="mt-6 flex items-center gap-3">
                  <FaUniversity className="text-[#D91A3A]" />

                  <p className="text-[#403939]">
                    {item.institution}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">

                  <div className="rounded-xl bg-[#403939]/5 p-4">
                    <p className="text-sm text-[#403939]/80">
                      Academic Performance
                    </p>

                    <h4 className="text-xl font-semibold mt-2">
                      {item.cgpa?`CGPA:${item.cgpa}`:`Marks: ${item.Marks}%`}
                    </h4>
                  </div>

                  <div className="rounded-xl bg-[#801426]/8 p-4">
                    <p className="text-sm text-[#403939]/80">
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



