import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";
import { Fragment } from "react";
import Skills from "../components/Skill";
import Proofofwork from "../components/Proofofwork";

const Home = () => {
  return (
    <Fragment>
    <section className="relative min-h-screen overflow-hidden bg-[#FFFFFF] text-[#1A1616]">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-[#FCDF4C]/35 blur-3xl animate-pulse"></div>

        <div className="absolute -bottom-32 -right-24 h-[34rem] w-[34rem] rounded-full bg-[#D91A3A]/15 blur-3xl animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#801426]/10 blur-3xl"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block rounded-full border border-[#D91A3A]/20 bg-[#FCDF4C]/55 px-5 py-2 text-sm font-semibold text-[#801426] shadow-sm">
              Welcome To My Portfolio
            </span>

            <h1 className="mt-3 py-7 mb-2 text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm
              <span className="block bg-gradient-to-r from-[#D91A3A] via-[#D91A3A] to-[#FCDF4C] text-transparent bg-clip-text">
                Vigneshgandhi
              </span>
            </h1>

            <div className="mt-6 text-2xl md:text-3xl font-semibold text-[#403939]">

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "AI Enthusiast",
                  1500,
                  "Cybersecurity Learner",
                  1500,
                  "UI/UX Designer",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#403939]">
              Passionate designer and curious learner about computer
              technology. I love designing web and mobile applications
              with a strong interest in building real-time software
              solutions that create meaningful impact.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="group flex items-center gap-2 rounded-xl bg-[#D91A3A] px-8 py-4 font-semibold text-white shadow-lg shadow-[#D91A3A]/25 transition hover:bg-[#801426]" onClick={(e)=>{window.location.href="/projects";e.PreventDefault()}}>
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Vigneshgandhi Resume.pdf";
                  link.download = "Vigneshgandhi_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="rounded-xl border border-[#801426]/25 bg-white px-8 py-4 font-semibold text-[#801426] shadow-sm transition hover:border-[#D91A3A] hover:bg-[#FCDF4C]"
              >
                Download Resume
              </button>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://www.github.com/vigneshgandhi"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#801426]/20 bg-white text-[#403939] shadow-sm transition hover:border-[#D91A3A] hover:bg-[#D91A3A] hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vigneshgandhi-b-33000264/"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#801426]/20 bg-white text-[#403939] shadow-sm transition hover:border-[#D91A3A] hover:bg-[#D91A3A] hover:text-white"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[#D91A3A] opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -right-8 top-8 h-24 w-24 rounded-full bg-[#FCDF4C] opacity-80 blur-2xl"></div>

              {/* Image */}
              <motion.img
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                src="/TCSPHoto.jpg"
                alt="Vignesh"
                className="relative h-80 w-80 rounded-full border-4 border-[#FCDF4C] object-cover shadow-2xl shadow-[#801426]/25 lg:h-[450px] lg:w-[450px]"
              />

              {/* Floating Tags */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -left-10 top-10 rounded-xl border border-[#FCDF4C]/60 bg-[#1A1616] px-4 py-3 text-white shadow-xl shadow-[#801426]/20"
              >
                <FaCode className="mr-2 inline text-[#FCDF4C]" />
                React.js
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -right-10 bottom-20 rounded-xl border border-[#D91A3A]/20 bg-[#1A1616] px-4 py-3 text-white shadow-xl shadow-[#801426]/15"
              >
                <FaShieldAlt className="mr-2 inline text-[#FCDF4C]" />
                Security
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-0 left-0 rounded-xl border border-[#801426]/15 bg-[#1A1616] px-4 py-3 text-white shadow-xl shadow-[#801426]/15"
              >
                <FaLaptopCode className="mr-2 inline text-[#FCDF4C]" />
                Full Stack
              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 pb-20">

          <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 text-center shadow-lg shadow-[#801426]/10 backdrop-blur">
            <h3 className="text-4xl font-bold text-[#D91A3A]">7.71</h3>
            <p className="mt-2 text-[#403939]">CGPA</p>
          </div>

          <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 text-center text-white shadow-lg shadow-[#801426]/15 backdrop-blur">
            <h3 className="text-4xl font-bold text-[#D91A3A]">M.E</h3>
            <p className="mt-2 text-[#403939]">Degree</p>
          </div>

          <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 text-center shadow-lg shadow-[#801426]/15 backdrop-blur">
            <h3 className="text-4xl font-bold text-[#D91A3A]">2027</h3>
            <p className="mt-2 text-[#403939]">Graduation</p>
          </div>

          <div className="rounded-3xl border border-[#D91A3A]/10 bg-white p-8 text-center text-white shadow-lg shadow-[#801426]/15 backdrop-blur">
            <h3 className="text-4xl font-bold text-[#D91A3A]">5+</h3>
            <p className="mt-2 text-[#403939]">Career Paths</p>
          </div>

        </div>

      </div>

    </section>
    <Skills/>
    <Proofofwork/>
    </Fragment>
  );
};

export default Home;



