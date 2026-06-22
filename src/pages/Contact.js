import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaArrowRight,
  FaLaptopCode,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      label: "GitHub",
      icon: FaGithub,
      href: "https://github.com/vigneshgandhi",
      value: "github.com/vigneshgandhi",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/vigneshgandhi",
      value: "linkedin.com/in/vigneshgandhi",
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase">
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Let's Build Something Together
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-8">
            Reach out for collaborations, freelance projects, research opportunities,
            or simply to say hi. I'm available to discuss web development, AI,
            machine learning, cybersecurity, and product design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto mb-6">
                <FaLaptopCode size={32} />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
              <p className="text-slate-400 text-center leading-7">
                I am Vigneshgandhi B, a Master of Engineering student and full-stack developer
                focused on building intelligent web experiences and research-driven solutions.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <FaGraduationCap className="text-cyan-400" />
                  <span>M.E Student</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FaBriefcase className="text-cyan-400" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a
                      href="mailto:vigneshgandhi15@gmail.com"
                      className="text-white hover:text-cyan-400 transition"
                    >
                      vigneshgandhi15@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <a
                      href="tel:+919087040843"
                      className="text-white hover:text-cyan-400 transition"
                    >
                      +91 90870 40843
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-slate-300 leading-7">
                      169T/1 Chintamani Nagar 2nd Street, Illupaiyurani,
                      Puthukiramam, Kovilpatti - 628501, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Follow</h2>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 p-4 rounded-3xl border border-slate-800 hover:border-cyan-500 transition"
                    >
                      <Icon className="text-cyan-400" size={20} />
                      <div>
                        <p className="text-sm text-slate-400">{link.label}</p>
                        <p className="text-white truncate">{link.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-lg lg:col-span-2">

  <div className="flex flex-col gap-6">

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Let's Connect
      </h2>

      <p className="text-slate-400 leading-7">
        I am actively seeking opportunities in software development,
        full stack development, artificial intelligence, machine learning,
        cybersecurity, and research. If you would like to discuss a project,
        internship, collaboration, or career opportunity, feel free to reach out.
      </p>
    </div>

                
    {/* Availability Status */}

    <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
      <div className="flex items-center gap-3">

        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

        <p className="font-medium text-cyan-300">
          Available for Internships and Software Projects
        </p>

      </div>
    </div>

    {/* Contact Methods */}
<div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 mb-8">

  <span className="text-cyan-400 text-sm uppercase tracking-widest font-semibold">
    About Me
  </span>

  <h2 className="text-3xl font-bold mt-4 mb-6">
    Let's Build Something Meaningful
  </h2>

  <p className="text-slate-400 leading-8">
    I am <span className="text-white font-semibold">Vigneshgandhi B</span>,
    a Master of Engineering student in Computer Science and Engineering at
    National Engineering College. I am passionate about technology, software
    development, and creating solutions that address real-world challenges.
  </p>

  <p className="text-slate-400 leading-8 mt-4">
    My interests include Full Stack Web Development, Cybersecurity,
    Artificial Intelligence, Machine Learning, and Big Data Analytics.
    I enjoy designing modern web applications, exploring emerging technologies,
    and working on innovative projects that combine creativity with technical expertise.
  </p>

  <p className="text-slate-400 leading-8 mt-4">
    I am currently seeking opportunities to collaborate on software projects,
    research initiatives, internships, and technology-driven solutions where I can
    contribute, learn, and continue growing as a developer and researcher.
  </p>

</div>
<div className="flex gap-4 flex-wrap mt-8">

  <a
    href="mailto:vigneshgandhi15@gmail.com"
    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-cyan-500 px-8 py-4 font-semibold text-black"
  >
    Email Me
    <FaArrowRight />
  </a>

  <a
    href="/Vigneshgandhi_Resume.pdf"
    download
    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-cyan-500 px-8 py-4 font-semibold"
  >
    Download Resume
  </a>

</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
