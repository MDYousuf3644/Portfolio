"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaGlobe, FaDownload, FaLinkedin, FaPhoneAlt, FaEnvelope, FaPalette } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaWordpress,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiElementor,
  SiVercel,
  SiFilezilla,
  SiGooglegemini,
} from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Portfolio() {
  const skills = [
    { Icon: FaHtml5, name: "HTML", color: "from-orange-500 to-red-500" },
    { Icon: FaCss3Alt, name: "CSS", color: "from-blue-500 to-blue-700" },
    { Icon: FaBootstrap, name: "Bootstrap", color: "from-purple-500 to-indigo-600" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
    { Icon: SiNextdotjs, name: "Next.js", color: "from-gray-700 to-gray-900" },
    { Icon: FaWordpress, name: "WordPress", color: "from-blue-700 to-blue-900" },
    { Icon: SiElementor, name: "Elementor", color: "from-pink-500 to-rose-500" },
    { Icon: FaPalette, name: "Divi", color: "from-fuchsia-500 to-pink-600" },
    { Icon: FaJs, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  ];

  const tools = [
    { Icon: SiFilezilla, name: "FileZilla", color: "from-orange-400 to-red-500" },
    { Icon: SiVercel, name: "Vercel", color: "from-gray-700 to-black" },
    { Icon: SiGooglegemini, name: "Gemini", color: "from-blue-400 to-purple-600" },
    { Icon: FaWordpress, name: "WordPress", color: "from-blue-600 to-indigo-700" },
    { Icon: FaJs, name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  ];

  return (
    <main className="scroll-smooth font-sans">
      {/* ===== Header ===== */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white shadow-lg z-[999] backdrop-blur-md bg-opacity-90">
        <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-center w-full md:w-auto mb-3 md:mb-0 tracking-wide">
            Md Yousuf Alam
          </h1>
          <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-sm md:text-base font-semibold">
            {["Home", "About", "Skills", "Projects", "Tools & AI", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" & ai", "tools")}`}
                    className="hover:text-blue-300 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </header>

      {/* ===== Hero Section ===== */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white px-4 pt-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Md Yousuf Alam
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Full Stack Java Developer",
            2000,
            "Frontend Developer",
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-lg md:text-2xl text-blue-300"
        />

        <p className="text-sm md:text-base opacity-90 mt-4 max-w-lg">
          Core Java | Advance Java | Spring | SpringBoot| SQL | HTML | CSS |
          JavaScript 
        </p>

        {/* Skill Icons */}
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {skills.map(({ Icon, name, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
              className={`p-4 rounded-full bg-gradient-to-br ${color} shadow-lg hover:scale-110 transition`}
              title={name}
            >
              <Icon className="text-3xl text-white" />
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="/pdf/md-yousuf-alam-cv.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-900 hover:bg-gray-200 px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section
        id="about"
        className="py-28 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-90 md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group ring-4 ring-blue-200/40">
              <Image
                src="/new-image/yousuf.webp"
                alt="Md Yousuf Alam"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -z-10 blur-3xl w-72 h-72 bg-blue-300/40 rounded-full top-6 right-6"></div>
          </motion.div>

          {/* Right Side Text */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              About <span className="text-blue-700">Me</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I’m <b>Md Yousuf Alam</b> — a <b>Full Stack Java Developer</b> and Fresher passionate about building scalable and user-friendly web applications.

I have hands-on knowledge of Core Java, Advanced Java, Spring, Spring Boot, SQL, HTML, CSS, and JavaScript. I focus on writing clean, efficient code and developing responsive applications that deliver reliable performance and a smooth user experience.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-l-4 border-blue-700 pl-5 py-3 bg-white/60 backdrop-blur-sm shadow-sm rounded-lg"
            >
              <p className="italic text-gray-600">
                “Design is not just what it looks like — it’s how it works.”
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#projects"
                className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-all duration-300 shadow-md"
              >
                <FaGlobe className="text-lg" /> View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="flex items-center gap-2 border border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
              >
                <FaEnvelope className="text-lg" /> Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Skills Section ===== */}
      <section
        id="skills"
        className="relative py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-transparent opacity-60 blur-3xl animate-pulse"></div>

        <div className="text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Skills
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-600 mt-4 text-base md:text-lg max-w-2xl mx-auto"
          >
            The tools and technologies I use to design and build modern,
            responsive web experiences.
          </motion.p>
        </div>

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-16 px-4 md:px-12">
          {skills.map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center"
            >
              <div
                className={`p-4 rounded-full bg-gradient-to-br ${color} text-white shadow-lg transition-all duration-500 group-hover:scale-110`}
              >
                <Icon className="text-3xl" />
              </div>
              <p className="mt-4 font-semibold text-gray-800 text-lg group-hover:text-blue-700 transition-colors duration-300">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Tools Section ===== */}
      <section
        id="tools"
        className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Tools & AI{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Familiarity
          </span>
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-10"
        ></motion.div>

        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {tools.map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              className="group relative p-5 rounded-2xl bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center"
            >
              <div
                className={`p-4 rounded-full bg-gradient-to-br ${color} shadow-md group-hover:scale-110 transition-transform`}
              >
                <Icon className="text-3xl text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-800 mt-3">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section
        id="contact"
        className="pt-20 pb-10 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold mb-6"
          >
            Let’s Connect
          </motion.h2>

          <p className="text-blue-200 mb-10 text-lg">
            I’m open to exciting opportunities — feel free to connect with me
            anytime.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <motion.a
              href="mailto:mdyousuf36444@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-start w-80 bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-xl"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 shadow-lg flex items-center justify-center w-12 h-12">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <span className="font-medium ml-4 truncate">
                mdyousuf36444@gmail.com
              </span>
            </motion.a>

            <motion.a
              href="tel:+917484888760"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-start w-80 bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-xl"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 shadow-lg flex items-center justify-center w-12 h-12">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
              <span className="font-medium ml-4 truncate">+917484888760 </span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/md-yousuf-alam-375545307?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKGqx%2FksvRX2n35mQQAbrcw%3D%3D"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-start w-80 bg-white/10 hover:bg-white/20 transition p-4 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-xl"
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 shadow-lg flex items-center justify-center w-12 h-12">
                <FaLinkedin className="text-white text-xl" />
              </div>
              <span className="font-medium ml-4 truncate">
                Linkedin Profile
              </span>
            </motion.a>
          </div>

          <p className="mt-16 text-blue-200 text-sm">
            © {new Date().getFullYear()} Md Yousuf Alam. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
