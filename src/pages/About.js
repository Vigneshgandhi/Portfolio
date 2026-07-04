import {
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { Fragment } from "react";
import { motion } from "framer-motion";
import Education from "../components/Education";
import AboutMystory from "../components/Projects/1/AboutMystory";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const About = () => {
  const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ];

  const designTools = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Adobe XD",
  ];

  const interests = [
    "Full Stack Development",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Research & Innovation",
  ];

  const careerGoals = [
    "AI/ML Engineer",
    "Data Scientist",
    "Software Engineer",
    "Full Stack Developer",
    "Cybersecurity",
  ];

  return (
    <Fragment>
      <section className="relative min-h-screen overflow-hidden bg-white py-20 text-[#1A1616]">

        {/* Animated Background */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#FCDF4C]/30 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-[#D91A3A]/15 blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

          {/* Header */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="font-semibold uppercase tracking-wider text-[#D91A3A]">
              About Me
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              Know More About Me
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#403939]">
              Passionate about software engineering,
              full stack development, artificial intelligence,
              cybersecurity, and creating innovative
              digital experiences.
            </p>

            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#FCDF4C]"></div>
          </motion.div>

          {/* Main About Section */}

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Profile Card */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="absolute inset-0 rounded-full bg-[#D91A3A]/15 blur-3xl"></div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative rounded-3xl border border-[#801426]/10 bg-white p-10 shadow-2xl shadow-[#801426]/15"
              >

                <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-[#FCDF4C] text-[#801426]">

                  <FaLaptopCode size={55} />

                </div>

                <h2 className="text-3xl font-bold text-center mb-4">
                  Vigneshgandhi B
                </h2>

                <p className="mb-4 text-center text-[#D91A3A]">
                  Master of Engineering Student
                </p>

                <p className="text-center leading-relaxed text-[#403939]">
                  Passionate about technology,
                  design, cybersecurity,
                  software development,
                  artificial intelligence,
                  and real-time problem solving.
                </p>

              </motion.div>

            </motion.div>

            {/* About Content */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <h2 className="text-4xl font-bold mb-8">
                Passionate Designer & Technology Enthusiast
              </h2>

              <p className="mb-6 text-lg leading-8 text-[#403939]">
                I am Vigneshgandhi B, currently pursuing
                a Master of Engineering at National
                Engineering College (Autonomous).
                I am a passionate designer and curious learner
                with a strong interest in computer technology,
                software engineering, and emerging innovations.
              </p>

              <p className="mb-6 text-lg leading-8 text-[#403939]">
                I enjoy designing web and mobile applications
                that provide meaningful user experiences while
                solving practical real-world challenges.
                My expertise combines development and creative
                design, allowing me to build modern,
                scalable, and user-centric digital solutions.
              </p>

              <p className="text-lg leading-8 text-[#403939]">
                My interests extend into Full Stack Development,
                Cybersecurity, Artificial Intelligence,
                Machine Learning, and Data Science.
                I continuously explore new technologies
                and strive to create innovative solutions
                that make a positive impact.
              </p>

            </motion.div>

          </div>
                    {/* Statistics */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-6 mt-24"
          >

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl border border-[#801426]/10 bg-white p-8 text-center shadow-lg shadow-[#801426]/10 transition hover:border-[#D91A3A]/40"
            >
              <h3 className="text-4xl font-bold text-[#D91A3A]">
                7.71
              </h3>

              <p className="mt-2 text-[#403939]">
                CGPA
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl border border-[#801426]/10 bg-white p-8 text-center text-white shadow-lg shadow-[#801426]/15 transition hover:border-[#D91A3A]/70"
            >
              <h3 className="text-4xl font-bold text-[#D91A3A]">
                II
              </h3>

              <p className="mt-2 text-[#403939]">
                Year M.E
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl border border-[#801426]/10 bg-white p-8 text-center shadow-lg shadow-[#801426]/15 transition hover:border-[#D91A3A]/70"
            >
              <h3 className="text-4xl font-bold text-[#D91A3A]">
                2027
              </h3>

              <p className="mt-2 text-[#403939]">
                Graduation
              </p>
            </motion.div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="rounded-2xl border border-[#801426]/10 bg-white p-8 text-center text-white shadow-lg shadow-[#801426]/15 transition hover:border-[#D91A3A]/70"
            >
              <h3 className="text-4xl font-bold text-[#D91A3A]">
                5+
              </h3>

              <p className="mt-2 text-[#403939]">
                Career Paths
              </p>
            </motion.div>

          </motion.div>

          {/* My Story Section */}

          <AboutMystory />

          {/* Education Section */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Education />
          </motion.div>

          {/* Technical Skills */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6"
          >

            <h2 className="text-4xl font-bold text-center mb-12">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Development */}

              <motion.div
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10 transition hover:border-[#D91A3A]/40"
              >

                <div className="flex items-center gap-3 mb-6">

                  <FaCode
                    className="text-[#D91A3A]"
                    size={28}
                  />

                  <h3 className="text-2xl font-semibold">
                    Development
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {skills.map((skill) => (

                    <motion.span
                      key={skill}
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="cursor-pointer rounded-full border border-[#801426]/10 bg-[#FCDF4C]/45 px-4 py-2 text-[#403939]"
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </motion.div>

              {/* Design Tools */}

              <motion.div
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10 transition hover:border-[#D91A3A]/40"
              >

                <div className="flex items-center gap-3 mb-6">

                  <FaPalette
                    className="text-[#D91A3A]"
                    size={28}
                  />

                  <h3 className="text-2xl font-semibold">
                    Design Tools
                  </h3>

                </div>

                <div className="flex flex-wrap gap-3">

                  {designTools.map((tool) => (

                    <motion.span
                      key={tool}
                      whileHover={{
                        scale: 1.1,
                      }}
                      className="cursor-pointer rounded-full border border-[#801426]/10 bg-[#403939]/5 px-4 py-2 text-[#403939]"
                    >
                      {tool}
                    </motion.span>

                  ))}

                </div>

              </motion.div>

            </div>

          </motion.div>
                    {/* Areas of Interest */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >

            <h2 className="text-4xl font-bold text-center mb-12">
              Areas of Interest
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {interests.map((interest, index) => (

                <motion.div
                  key={interest}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                  }}
                  className="rounded-2xl border border-[#801426]/10 bg-white p-6 text-center shadow-lg shadow-[#801426]/10 transition hover:border-[#D91A3A]/40"
                >

                  <FaBrain
                    className="mx-auto mb-4 text-[#D91A3A]"
                    size={30}
                  />

                  <h3 className="font-semibold text-lg">
                    {interest}
                  </h3>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Career Goals */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >

            <h2 className="text-4xl font-bold text-center mb-12">
              Career Goals
            </h2>

            <motion.div
              whileHover={{
                scale: 1.01,
              }}
              className="rounded-3xl border border-[#801426]/10 bg-[#1A1616] p-10 text-white shadow-2xl shadow-[#801426]/20"
            >

              <p className="mb-8 text-lg leading-8 text-white/75">
                My goal is to become a versatile technology
                professional capable of building intelligent,
                secure, scalable, and innovative software
                solutions. I am interested in combining
                software engineering, artificial intelligence,
                cybersecurity, and research to solve real-world
                challenges through technology.
              </p>

              <div className="grid md:grid-cols-5 gap-4">

                {careerGoals.map((goal, index) => (

                  <motion.div
                    key={goal}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                    }}
                    className="cursor-pointer rounded-xl border border-white/10 bg-white/10 p-4 text-center text-white hover:border-[#FCDF4C]"
                  >
                    {goal}
                  </motion.div>

                ))}

              </div>

            </motion.div>

          </motion.div>

          {/* Footer Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-24 text-center"
          >

            <div className="max-w-4xl mx-auto">

              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Building Intelligent Solutions Through
                Technology & Innovation
              </h3>

              <p className="text-lg leading-8 text-[#403939]">
                Passionate about creating impactful digital
                experiences, exploring emerging technologies,
                and continuously learning to become a better
                engineer, designer, and researcher.
              </p>

            </div>

          </motion.div>

        </div>
      </section>
    </Fragment>
  );
};

export default About;



