import { motion } from "framer-motion";
import {
  FaBaby,
  FaBookOpen,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

const storyMilestones = [
  {
    year: "2001",
    title: "My first day on the earth",
    icon: FaBaby,
    description:
      "On August 15, 2001, in the peaceful town of Kovilpatti, my journey on Earth began. It was the first page of my story—a day that marked the beginning of countless dreams, experiences, and memories. Every step since then has shaped who I am today, inspiring me to learn, grow, and embrace every new opportunity that life brings.",
  },
  {
    year: "2016 - 2019",
    title: "School Days",
    icon: FaBookOpen,
    description:
      "During my school days at St. Paul's Matriculation Higher Secondary School, I built my academic foundation and developed an early interest in computer science and technology.",
  },
  {
    year: "2019 - 2023",
    title: "UG College Days",
    icon: FaGraduationCap,
    description:
      "I pursued my Bachelor of Engineering in Computer Science and Engineering at Sri Eshwar College of Engineering. These years shaped my programming skills, project experience, teamwork, and interest in software development.",
  },
  {
    year: "2025 - 2027",
    title: "PG College Days",
    icon: FaUniversity,
    description:
      "I am currently pursuing my Master of Engineering in Computer Science and Engineering at National Engineering College. This phase is helping me deepen my knowledge in AI, cybersecurity, full stack development, and research-oriented problem solving.",
  },
];

export default function AboutMystory() {
  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <p className="font-semibold uppercase tracking-widest text-[#D91A3A]">
          My Story
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#1A1616] md:text-5xl">
          From Childhood To College Life
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#403939]">
          A short timeline of my personal and academic journey, from the year I
          was born to my undergraduate and postgraduate college days.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-5 top-0 hidden h-full w-1 rounded-full bg-[#D91A3A]/20 md:block"></div>

        <div className="space-y-8">
          {storyMilestones.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -45 : 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative md:pl-16"
              >
                <div className="hidden md:absolute md:left-0 md:top-8 md:flex md:h-11 md:w-11 md:items-center md:justify-center md:rounded-full md:bg-[#D91A3A] md:text-white md:shadow-lg md:shadow-[#D91A3A]/25">
                  <Icon />
                </div>

                <div className="rounded-3xl border border-[#801426]/10 bg-white p-7 shadow-lg shadow-[#801426]/10 transition hover:-translate-y-1 hover:border-[#D91A3A]/40 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FCDF4C]/70 text-[#801426] md:hidden">
                        <Icon />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-[#1A1616]">
                          {item.title}
                        </h3>
                        <p className="mt-1 font-medium text-[#D91A3A]">
                          {item.year}
                        </p>
                      </div>
                    </div>

                    <span className="w-fit rounded-full border border-[#801426]/10 bg-[#FCDF4C]/55 px-4 py-2 text-sm font-semibold text-[#801426]">
                      Step {index + 1}
                    </span>
                  </div>

                  <p className="mt-5 text-justify text-lg leading-8 text-[#403939]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
