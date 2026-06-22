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

const Home = () => {
  return (
    <Fragment>
    <section className="relative min-h-screen bg-slate-950 overflow-hidden text-white">

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              Welcome To My Portfolio
            </span>

            <h1 className="mt-3 py-5 text-5xl md:text-7xl font-extrabold leading-tight">
              Hi, I'm
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                Vigneshgandhi
              </span>
            </h1>

            <div className="mt-6 text-2xl md:text-3xl font-semibold text-slate-300">

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

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-2xl">
              Passionate designer and curious learner about computer
              technology. I love designing web and mobile applications
              with a strong interest in building real-time software
              solutions that create meaningful impact.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <button className="group bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition">
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
                className="px-8 py-4 border border-cyan-500 rounded-xl hover:bg-cyan-500 hover:text-black transition"
              >
                Download Resume
              </button>

            </div>

            {/* Social */}

            <div className="flex gap-4 mt-10">

              <a
                href="https://www.github.com/vigneshgandhi"
                className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vigneshgandhi-b-33000264/"
                className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition"
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
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Image */}
              <motion.img
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                src="/profile.jpeg"
                alt="Vignesh"
                className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
              />

              {/* Floating Tags */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-10 -left-10 bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl"
              >
                <FaCode className="inline mr-2 text-cyan-400" />
                React.js
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-20 -right-10 bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl"
              >
                <FaShieldAlt className="inline mr-2 text-cyan-400" />
                Security
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-0 left-0 bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl"
              >
                <FaLaptopCode className="inline mr-2 text-cyan-400" />
                Full Stack
              </motion.div>

            </div>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 pb-20">

          <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-cyan-400">7.71</h3>
            <p className="text-slate-400 mt-2">CGPA</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-cyan-400">M.E</h3>
            <p className="text-slate-400 mt-2">Degree</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-cyan-400">2027</h3>
            <p className="text-slate-400 mt-2">Graduation</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur border border-slate-800 p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="text-slate-400 mt-2">Career Paths</p>
          </div>

        </div>

      </div>

    </section>
    <Skills/>
    </Fragment>
  );
};

export default Home;