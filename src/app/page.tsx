"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const projects = [
  {
    number: "01",
    title: "Iris Flower Classification",
    description:
      "A machine learning project focused on analyzing iris flower data and building a classification workflow.",
    tags: ["Python", "Machine Learning", "Scikit-learn"],
    github: "https://github.com/harsha-ck/IRIS-Flower-classification",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Weather Data Analysis",
    description:
      "A Python-based data analysis project focused on exploring and understanding weather data.",
    tags: ["Python", "NumPy", "Pandas"],
    github: "",
    icon: Database,
  },
  {
    number: "03",
    title: "Student Management System",
    description:
      "A Python CLI application for managing student records, marks, searching, updating and storing data in CSV.",
    tags: ["Python", "CSV", "CLI"],
    github: "https://github.com/harsha-ck/student-management-cli",
    icon: Terminal,
  },
];

const skills = [
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "C++"],
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    items: [
      "KNN",
      "Logistic Regression",
      "Decision Tree",
      "Random Forest",
    ],
  },
  {
    title: "Data & Libraries",
    icon: Database,
    items: ["NumPy", "Pandas", "Scikit-learn"],
  },
  {
    title: "DSA",
    icon: Terminal,
    items: [
      "Arrays",
      "Strings",
      "Two Pointers",
      "Sliding Window",
      "Stack",
      "Prefix Sum",
      "Hash Maps",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      const navbarOffset = 90;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050507] text-white">

      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(100,70,180,0.13),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(70,100,180,0.08),transparent_30%)]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 px-0 md:px-5">
        <nav className="mx-auto mt-4 w-[92%] max-w-6xl rounded-full border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            {/* LOGO */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-lg font-bold text-white"
            >
              Harsha C K
            </button>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden items-center gap-10 md:flex">

              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-semibold text-white/70 transition hover:text-white"
              >
                Contact
              </button>

            </div>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex h-10 w-10 items-center justify-center md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <div className="flex flex-col gap-1.5">

                <motion.span
                  animate={
                    menuOpen
                      ? { rotate: 45, y: 8 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-6 rounded-full bg-white"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? { opacity: 0 }
                      : { opacity: 1 }
                  }
                  transition={{ duration: 0.15 }}
                  className="block h-0.5 w-6 rounded-full bg-white"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? { rotate: -45, y: -8 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className="block h-0.5 w-6 rounded-full bg-white"
                />

              </div>
            </button>

          </div>

          {/* MOBILE MENU */}
          <motion.div
            initial={false}
            animate={
              menuOpen
                ? {
                    opacity: 1,
                    height: "auto",
                    marginTop: 16,
                  }
                : {
                    opacity: 0,
                    height: 0,
                    marginTop: 0,
                  }
            }
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <div className="border-t border-white/10 pt-3">

              <button
                onClick={() => scrollToSection("home")}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                Contact
              </button>

            </div>
          </motion.div>

        </nav>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-[1450px] items-center px-6 pb-20 pt-32 md:px-12"
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* HERO TEXT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-white/30" />

              <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
                2nd Year • CSE • PES University
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[clamp(4rem,9vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]"
            >
              Harsha
              <br />
              <span className="text-white/25">C K</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-8 text-white/50 md:text-xl"
            >
              Computer Science student exploring software development,
              machine learning and problem solving through real projects.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-105"
              >
                View projects

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              <a
                href="https://github.com/harsha-ck"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/30 hover:bg-white/5"
              >
                GitHub
                <ExternalLink size={16} />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-7 text-sm text-white/35"
            >
              <span className="flex items-center gap-2">
                <MapPin size={15} />
                Bengaluru
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>2nd Year</span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span>CSE</span>
            </motion.div>
          </motion.div>

          {/* PERSONAL PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mx-auto w-full max-w-[470px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src="/harsha.jpg.jpeg"
                alt="Harsha C K"
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/5" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-28 border-t border-white/10 px-6 py-28 md:px-12"
      >
        <div className="mx-auto max-w-[1200px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-12 md:grid-cols-[0.35fr_0.65fr]"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                01 / About
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                Building skills today.
                <span className="text-white/25">
                  {" "}
                  Creating better things tomorrow.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
                I&apos;m Harsha C K, a second-year Computer Science student at
                PES University, Bengaluru. I enjoy learning by building,
                solving programming problems and experimenting with machine
                learning and data analysis.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="scroll-mt-28 border-t border-white/10 px-6 py-28 md:px-12"
      >
        <div className="mx-auto max-w-[1200px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mb-14 flex items-end justify-between gap-6"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  02 / Skills
                </p>

                <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                  What I work with.
                </h2>
              </div>

              <span className="hidden text-sm text-white/25 md:block">
                Learning → Building → Improving
              </span>
            </motion.div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2">

              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.title}
                    variants={fadeUp}
                    className="group bg-[#09090c] p-8 transition hover:bg-[#0d0d11] md:p-10"
                  >
                    <div className="mb-8 flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                        <Icon size={19} className="text-white/65" />
                      </div>

                      <span className="text-xs text-white/20">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="text-xl font-medium">
                      {skill.title}
                    </h3>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                  </motion.div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-28 border-t border-white/10 px-6 py-28 md:px-12"
      >
        <div className="mx-auto max-w-[1200px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-14">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                03 / Projects
              </p>

              <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-6xl">
                Things I&apos;ve built.
              </h2>
            </motion.div>

            <div className="space-y-5">

              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <motion.article
                    key={project.number}
                    variants={fadeUp}
                    className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] transition hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <div className="grid md:grid-cols-[0.22fr_0.78fr]">

                      <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden border-b border-white/10 bg-[#08080b] md:min-h-[320px] md:border-b-0 md:border-r">

                        <div className="absolute left-0 top-0 h-40 w-40 rounded-full border border-white/5" />

                        <div className="absolute bottom-[-60px] right-[-30px] h-48 w-48 rounded-full border border-white/5" />

                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.025]">
                          <Icon
                            size={30}
                            strokeWidth={1.4}
                            className="text-white/50"
                          />
                        </div>

                        <span className="absolute right-6 top-6 text-xs tracking-[0.25em] text-white/20">
                          {project.number} / 03
                        </span>

                      </div>

                      <div className="flex flex-col justify-between p-7 md:p-10">

                        <div>
                          <div className="mb-5 flex items-center justify-between">

                            <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                              Project {project.number}
                            </span>

                            {project.github ? (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-xs text-white/40 transition hover:text-white"
                              >
                                GitHub
                                <ArrowUpRight size={14} />
                              </a>
                            ) : (
                              <span className="text-xs text-white/20">
                                Link coming soon
                              </span>
                            )}

                          </div>

                          <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
                            {project.title}
                          </h3>

                          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                            {project.description}
                          </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>

                    </div>
                  </motion.article>
                );
              })}

            </div>
          </motion.div>

        </div>
      </section>

      {/* DSA / LEETCODE */}
      <section className="border-t border-white/10 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1200px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid items-center gap-12 md:grid-cols-[0.55fr_0.45fr]"
          >
            <motion.div variants={fadeUp}>

              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                04 / Problem Solving
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-tight md:text-6xl">
                60+
                <br />
                <span className="text-white/30">
                  LeetCode problems.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-white/40">
                Consistently practicing data structures and algorithms to
                strengthen logical thinking and problem-solving skills.
              </p>

              <a
                href="https://leetcode.com/u/HarshaCK/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/5"
              >
                View LeetCode
                <ArrowUpRight size={15} />
              </a>

            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 md:p-10">

                <div className="absolute right-0 top-0 h-44 w-44 rounded-full border border-white/5" />

                <Terminal
                  size={25}
                  className="mb-10 text-white/50"
                  strokeWidth={1.5}
                />

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Arrays",
                    "Strings",
                    "Stack",
                    "Hash Maps",
                    "Two Pointers",
                    "Sliding Window",
                    "Prefix Sum",
                    "More to come",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 px-4 py-4 text-sm text-white/45"
                    >
                      {item}
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-t border-white/10 px-6 py-28 md:px-12">
        <div className="mx-auto max-w-[1200px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >

            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] text-white/35"
            >
              05 / Education
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]"
            >

              <div className="grid md:grid-cols-[0.42fr_0.58fr]">

                {/* PES UNIVERSITY PHOTO */}
                <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 md:min-h-[420px] md:border-b-0 md:border-r">
                  <img
                    src="/pes-university.jpg.jpeg"
                    alt="PES University Bengaluru"
                    className="h-full w-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                      Bengaluru
                    </p>
                  </div>
                </div>

                {/* EDUCATION DETAILS */}
                <div className="flex flex-col justify-center p-8 md:p-12">

                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <GraduationCap
                      size={20}
                      className="text-white/60"
                    />
                  </div>

                  <p className="text-xs uppercase tracking-[0.25em] text-white/25">
                    Currently studying
                  </p>

                  <h2 className="mt-4 text-3xl font-medium md:text-5xl">
                    Computer Science & Engineering
                  </h2>

                  <p className="mt-4 text-lg text-white/45">
                    PES University, Bengaluru
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">

                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40">
                      2nd Year
                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40">
                      CSE
                    </span>

                    <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/40">
                      Bengaluru
                    </span>

                  </div>

                  <a
                    href="https://www.pes.edu/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:text-white"
                  >
                    PES University
                    <ExternalLink size={15} />
                  </a>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-28 border-t border-white/10 px-6 py-32 md:px-12"
      >
        <div className="mx-auto max-w-[1200px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >

            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[0.3em] text-white/35"
            >
              06 / Contact
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-8xl"
            >
              Let&apos;s build
              <br />
              <span className="text-white/25">
                something good.
              </span>
            </motion.h2>

            {/* SOCIAL LINKS */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-4"
            >

              <a
                href="https://github.com/harsha-ck"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-105"
              >
                GitHub
                <ExternalLink size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/harsha-c-k-506020393?trk=contact-info"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/5"
              >
                <span className="text-sm font-bold">in</span>
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/HarshaCK/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/5"
              >
                LeetCode
                <ArrowUpRight size={16} />
              </a>

              <a
                href="mailto:harshack.21kumar@gmail.com"
                className="flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:bg-white/5"
              >
                <Mail size={17} />
                Email
              </a>

            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 text-xs text-white/25 md:flex-row">

          <p>
            © {new Date().getFullYear()} Harsha C K
          </p>

          <div className="flex flex-wrap gap-5">

            <button
              onClick={() => scrollToSection("home")}
              className="transition hover:text-white"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className="transition hover:text-white"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="transition hover:text-white"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="transition hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="transition hover:text-white"
            >
              Contact
            </button>

          </div>

        </div>
      </footer>

    </main>
  );
}
