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
    <section className="min-h-screen bg-white py-20 text-[#1A1616]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="font-semibold uppercase tracking-wider text-[#D91A3A]">
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Let's Build Something Together
          </h1>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#403939]">
            Reach out for collaborations, freelance projects, research opportunities,
            or simply to say hi. I'm available to discuss web development, AI,
            machine learning, cybersecurity, and product design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FCDF4C] text-[#801426]">
                <FaLaptopCode size={32} />
              </div>
              <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>
              <p className="text-center leading-7 text-[#403939]">
                I am Vigneshgandhi B, a Master of Engineering student and full-stack developer
                focused on building intelligent web experiences and research-driven solutions.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-[#403939]">
                  <FaGraduationCap className="text-[#D91A3A]" />
                  <span>M.E Student</span>
                </div>
                <div className="flex items-center gap-3 text-[#403939]">
                  <FaBriefcase className="text-[#D91A3A]" />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-3 text-[#403939]">
                  <FaMapMarkerAlt className="text-[#D91A3A]" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10">
              <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="rounded-2xl bg-[#FCDF4C]/60 p-3 text-[#801426]">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-[#403939]/75">Email</p>
                    <a
                      href="mailto:vigneshgandhi15@gmail.com"
                      className="text-[#1A1616] transition hover:text-[#D91A3A]"
                    >
                      vigneshgandhi15@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded-2xl bg-[#FCDF4C]/60 p-3 text-[#801426]">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-[#403939]/75">Phone</p>
                    <a
                      href="tel:+919087040843"
                      className="text-[#1A1616] transition hover:text-[#D91A3A]"
                    >
                      +91 90870 40843
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded-2xl bg-[#FCDF4C]/60 p-3 text-[#801426]">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-[#403939]/75">Location</p>
                    <p className="leading-7 text-[#403939]">
                      169T/1 Chintamani Nagar 2nd Street, Illupaiyurani,
                      Puthukiramam, Kovilpatti - 628501, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#801426]/10 bg-white p-8 shadow-lg shadow-[#801426]/10">
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
                      className="flex items-center gap-4 rounded-3xl border border-[#801426]/10 p-4 transition hover:border-[#D91A3A]/40 hover:bg-[#FCDF4C]/20"
                    >
                      <Icon className="text-[#D91A3A]" size={20} />
                      <div>
                        <p className="text-sm text-[#403939]/75">{link.label}</p>
                        <p className="truncate text-[#1A1616]">{link.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[#801426]/10 bg-white p-10 shadow-lg shadow-[#801426]/10 lg:col-span-2">

  <div className="flex flex-col gap-6">

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Let's Connect
      </h2>

      <p className="leading-7 text-[#403939]">
        I am actively seeking opportunities in software development,
        full stack development, artificial intelligence, machine learning,
        cybersecurity, and research. If you would like to discuss a project,
        internship, collaboration, or career opportunity, feel free to reach out.
      </p>
    </div>

                
    {/* Availability Status */}

    <div className="rounded-2xl border border-[#D91A3A]/20 bg-[#FCDF4C]/40 p-5">
      <div className="flex items-center gap-3">

        <span className="h-3 w-3 animate-pulse rounded-full bg-[#D91A3A]"></span>

        <p className="font-medium text-[#801426]">
          Available for Jobs, Internships and Software Projects
        </p>

      </div>
    </div>

    {/* Contact Methods */}
<div className="mb-8 rounded-3xl border border-[#801426]/10 bg-[#403939]/5 p-10">

  <span className="text-sm font-semibold uppercase tracking-widest text-[#D91A3A]">
    About Me
  </span>

  <h2 className="text-3xl font-bold mt-4 mb-6">
    Let's Build Something Meaningful
  </h2>

  <p className="leading-8 text-[#403939]">
    I am <span className="font-semibold text-[#1A1616]">Vigneshgandhi B</span>,
    a Master of Engineering student in Computer Science and Engineering at
    National Engineering College. I am passionate about technology, software
    development, and creating solutions that address real-world challenges.
  </p>

  <p className="mt-4 leading-8 text-[#403939]">
    My interests include Full Stack Web Development, Cybersecurity,
    Artificial Intelligence, Machine Learning, and Big Data Analytics.
    I enjoy designing modern web applications, exploring emerging technologies,
    and working on innovative projects that combine creativity with technical expertise.
  </p>

  <p className="mt-4 leading-8 text-[#403939]">
    I am currently seeking opportunities to collaborate on software projects,
    research initiatives, internships, and technology-driven solutions where I can
    contribute, learn, and continue growing as a developer and researcher.
  </p>

</div>
<div className="flex gap-4 flex-wrap mt-8">

  <a
    href="mailto:vigneshgandhi15@gmail.com"
    className="inline-flex items-center justify-center gap-2 rounded-3xl bg-[#D91A3A] px-8 py-4 font-semibold text-white shadow-lg shadow-[#D91A3A]/25 transition hover:bg-[#801426]"
  >
    Email Me
    <FaArrowRight />
  </a>

  <a
    href="/Vigneshgandhi_Resume.pdf"
    download
    className="inline-flex items-center justify-center gap-2 rounded-3xl border border-[#801426]/25 bg-white px-8 py-4 font-semibold text-[#801426] transition hover:border-[#D91A3A] hover:bg-[#FCDF4C]"
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





