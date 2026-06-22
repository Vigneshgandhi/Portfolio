import {
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaPalette,
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import Education from "../components/Education";

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
    "Research Engineer",
  ];

  return (
    <Fragment>
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase">
            About Me
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Know More About Me
          </h1>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-10">
              <div className="w-32 h-32 rounded-full bg-cyan-500 flex items-center justify-center mx-auto mb-8">
                <FaLaptopCode size={55} />
              </div>

              <h2 className="text-3xl font-bold text-center mb-4">
                Vigneshgandhi B
              </h2>

              <p className="text-slate-400 text-center leading-relaxed">
                Master of Engineering Student passionate about
                technology, design, cybersecurity, software
                development, and real-time problem solving.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Passionate Designer & Technology Enthusiast
            </h2>

            <p className="text-slate-400 leading-8 text-lg mb-6">
              I am Vigneshgandhi B, currently pursuing a Master of
              Engineering at National Engineering College
              (Autonomous). I am a passionate designer and curious
              learner with a strong interest in computer technology,
              software engineering, and emerging digital innovations.
            </p>

            <p className="text-slate-400 leading-8 text-lg mb-6">
              I enjoy designing web and mobile applications that
              provide meaningful user experiences while solving
              practical real-world challenges. My expertise combines
              development and creative design, allowing me to build
              modern, scalable, and user-centric digital solutions.
            </p>

            <p className="text-slate-400 leading-8 text-lg">
              My interests extend into Full Stack Development,
              Cybersecurity, Artificial Intelligence, and Data
              Science. I continuously explore new technologies and
              strive to create innovative solutions that make a
              positive impact.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-24">

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-cyan-500 transition">
            <h3 className="text-4xl font-bold text-cyan-400">7.71</h3>
            <p className="text-slate-400 mt-2">CGPA</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-cyan-500 transition">
            <h3 className="text-4xl font-bold text-cyan-400">II</h3>
            <p className="text-slate-400 mt-2">Year M.E</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-cyan-500 transition">
            <h3 className="text-4xl font-bold text-cyan-400">2027</h3>
            <p className="text-slate-400 mt-2">Graduation</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800 hover:border-cyan-500 transition">
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="text-slate-400 mt-2">Target Roles</p>
          </div>

        </div>

        {/* Education */}
        <Education/>
        {/* Technical Skills */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <FaCode className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-semibold">
                  Development
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-slate-800 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
              <div className="flex items-center gap-3 mb-6">
                <FaPalette className="text-cyan-400" size={28} />
                <h3 className="text-2xl font-semibold">
                  Design Tools
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {designTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-800 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Interests */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Areas of Interest
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {interests.map((interest) => (
              <div
                key={interest}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition"
              >
                <FaBrain
                  className="mx-auto text-cyan-400 mb-4"
                  size={30}
                />
                <h3 className="font-semibold">
                  {interest}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* Career Goals */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Career Goals
          </h2>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <p className="text-slate-400 leading-8 text-lg mb-8">
              My goal is to become a versatile technology
              professional capable of building intelligent,
              secure, and scalable software solutions. I am
              interested in combining software engineering,
              research, and innovation to solve real-world
              challenges through technology.
            </p>

            <div className="grid md:grid-cols-5 gap-4">

              {careerGoals.map((goal) => (
                <div
                  key={goal}
                  className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700"
                >
                  {goal}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
    </Fragment>
  );
};

export default About;