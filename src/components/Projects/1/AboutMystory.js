import { motion } from "framer-motion";
import {
  FaBaby,
  FaBookOpen,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaPalette,
  FaUniversity,
} from "react-icons/fa";

const storyPhases = [
  {
    label: "Beginning",
    years: "2001 - 2007",
    title: "Roots and early memories",
    icon: FaBaby,
  },
  {
    label: "Foundation",
    years: "2016 - 2019",
    title: "School and first code",
    icon: FaBookOpen,
  },
  {
    label: "Growth",
    years: "2019 - 2023",
    title: "Engineering and web development",
    icon: FaGraduationCap,
  },
  {
    label: "Creative turn",
    years: "2023 - 2025",
    title: "Graphic design and real work",
    icon: FaPalette,
  },
  {
    label: "Now",
    years: "2025 - 2027",
    title: "Postgraduate learning",
    icon: FaUniversity,
  },
];

const storyMilestones = [
  {
    phase: "Beginning",
    year: "2001",
    title: "My First Day on Earth",
    icon: FaBaby,
    description:
      "On August 15, 2001, in the peaceful town of Kovilpatti, my journey began. It was the first page of my story, and every step since then has shaped who I am today.",
  },
  {
    phase: "Beginning",
    year: "2007",
    title: "My First Best Friend",
    icon: FaBaby,
    description:
      "Some people quietly become unforgettable. This friendship brought trust, laughter, support, and memories that made childhood brighter.",
  },
  {
    phase: "Foundation",
    year: "2016 - 2019",
    title: "School Days",
    icon: FaBookOpen,
    description:
      "At St. Paul's Matriculation Higher Secondary School, I built my academic foundation and started developing an early interest in computer science and technology.",
  },
  {
    phase: "Foundation",
    year: "2017",
    title: "My First Programming Experience",
    icon: FaCode,
    description:
      "This was the beginning of my programming journey. I wrote my first lines of code, explored programming basics, and discovered a passion for technology.",
  },
  {
    phase: "Foundation",
    year: "2017",
    title: "Choosing Computer Science",
    icon: FaBookOpen,
    description:
      "After initially joining the Mathematics-Biology group in Class XI, I realized my interest was in technology and switched to Computer Science, a turning point in my academic path.",
  },
  {
    phase: "Growth",
    year: "2019 - 2023",
    title: "UG College Days",
    icon: FaGraduationCap,
    description:
      "I pursued my Bachelor of Engineering in Computer Science and Engineering at Sri Eshwar College of Engineering, where I strengthened my programming, teamwork, and project skills.",
  },
  {
    phase: "Growth",
    year: "2019",
    title: "First Day of Hostel Life",
    icon: FaGraduationCap,
    description:
      "A new place, new faces, and a new chapter. Hostel life brought friendships, life lessons, independence, and memories that shaped my college journey.",
  },
  {
    phase: "Growth",
    year: "2019 - 2020",
    title: "My First Arrear in Chemistry",
    icon: FaGraduationCap,
    description:
      "My first arrear taught me that failure is not the end. It pushed me to work harder, stay consistent, and treat setbacks as lessons.",
  },
  {
    phase: "Growth",
    year: "2020",
    title: "When COVID Changed Everything",
    icon: FaGraduationCap,
    description:
      "During my second semester, the COVID-19 pandemic moved classrooms online and paused hostel life. That period taught me resilience and adaptability.",
  },
  {
    phase: "Growth",
    year: "2020 - 2021",
    title: "Discovering Web Development",
    icon: FaCode,
    description:
      "During lockdown, I explored HTML, CSS, JavaScript, React.js, and the basics of building websites. Self-learning became a strong foundation for modern web development.",
  },
  {
    phase: "Growth",
    year: "2021",
    title: "Turning Setbacks into Success",
    icon: FaGraduationCap,
    description:
      "After facing four arrears during the COVID period, I focused on improving myself and cleared them in the next semester. It became a lesson in discipline and perseverance.",
  },
  {
    phase: "Growth",
    year: "2021",
    title: "Exploring Linux",
    icon: FaCode,
    description:
      "In my second year, I learned Debian Linux, the command line, file systems, package management, permissions, shell scripting, and system administration basics.",
  },
  {
    phase: "Growth",
    year: "2022",
    title: "Learning the MERN Stack",
    icon: FaCode,
    description:
      "In my third year, I learned MongoDB, Express.js, React, and Node.js, then started building full-stack applications from scratch.",
  },
  {
    phase: "Growth",
    year: "2022",
    title: "Placed at Aspire Systems",
    icon: FaBriefcase,
    description:
      "Getting placed at Aspire Systems was a major academic milestone and marked the beginning of my professional career direction.",
  },
  {
    phase: "Creative turn",
    year: "2023 - 2025",
    title: "A New Direction in Graphic Design",
    icon: FaPalette,
    description:
      "After final year, I moved to Bangalore to pursue graphic design and deepen my skills in visual communication, branding, typography, and UI design.",
  },
  {
    phase: "Creative turn",
    year: "2023 - 2025",
    title: "Beginning My Graphic Design Career",
    icon: FaBriefcase,
    description:
      "After learning Adobe XD, Illustrator, InDesign, and Photoshop, I joined 05 IT Solutions as a Graphic Designer and worked on UI/UX, branding, marketing, and digital content.",
  },
  {
    phase: "Now",
    year: "2025 - 2027",
    title: "PG College Days",
    icon: FaUniversity,
    description:
      "I am currently pursuing my Master of Engineering in Computer Science and Engineering at National Engineering College, deepening my knowledge in AI, cybersecurity, full stack development, and research.",
  },
  {
    phase: "Now",
    year: "2025",
    title: "Returning to Higher Education",
    icon: FaUniversity,
    description:
      "After working at 05 IT Solutions for several months, I chose to continue my academic journey with an M.E. to strengthen my technical and research skills.",
  },
  {
    phase: "Now",
    year: "2025",
    title: "First Day of My Postgraduate Journey",
    icon: FaUniversity,
    description:
      "Starting my M.E. program brought excitement, curiosity, and determination for advanced learning, research, new friendships, and future career growth.",
  },
];

const groupedMilestones = storyPhases.map((phase) => ({
  ...phase,
  milestones: storyMilestones.filter((milestone) => milestone.phase === phase.label),
}));

export default function AboutMystory() {
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-12 max-w-4xl text-center"
      >
        <p className="font-semibold uppercase tracking-[0.35em] text-[#D91A3A]">
          My Story
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#1A1616] md:text-5xl">
          A Journey Through Learning, Setbacks, and Growth
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#403939]">
          A structured timeline of the moments that shaped my personal,
          academic, creative, and technical journey.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-5">
        {storyPhases.map((phase, index) => {
          const Icon = phase.icon;

          return (
            <motion.article
              key={phase.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-[#801426]/10 bg-white p-5 shadow-lg shadow-[#801426]/10"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCDF4C]/70 text-[#801426]">
                <Icon />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D91A3A]">
                {phase.label}
              </p>
              <h3 className="mt-2 text-lg font-bold text-[#1A1616]">
                {phase.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#403939]">
                {phase.years}
              </p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-12 space-y-10">
        {groupedMilestones.map((phase, phaseIndex) => {
          const PhaseIcon = phase.icon;

          return (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: phaseIndex * 0.06 }}
              className="rounded-3xl border border-[#801426]/10 bg-white p-6 shadow-xl shadow-[#801426]/10 sm:p-8"
            >
              <div className="mb-7 flex flex-col gap-4 border-b border-[#801426]/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#D91A3A] text-white shadow-lg shadow-[#D91A3A]/20">
                    <PhaseIcon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D91A3A]">
                      {phase.years}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-[#1A1616]">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <span className="w-fit rounded-full bg-[#FCDF4C]/60 px-4 py-2 text-sm font-semibold text-[#801426]">
                  {phase.milestones.length} milestones
                </span>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {phase.milestones.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={`${item.year}-${item.title}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="rounded-2xl border border-[#801426]/10 bg-[#FFFDF7] p-5 transition hover:-translate-y-1 hover:border-[#D91A3A]/35"
                    >
                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FCDF4C]/70 text-[#801426]">
                            <Icon />
                          </div>
                          <p className="text-sm font-bold text-[#D91A3A]">
                            {item.year}
                          </p>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-[#1A1616]">
                        {item.title}
                      </h4>
                      <p className="mt-3 text-justify leading-7 text-[#403939]">
                        {item.description}
                      </p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
