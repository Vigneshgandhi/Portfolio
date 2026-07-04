import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaLayerGroup,
  FaPalette,
  FaPenNib,
} from "react-icons/fa";

const proofItems = [
  {
    id: 1,
    category: "Adobe XD",
    title: "Portfolio Landing Wireframe",
    description:
      "Landing page concept created in Adobe XD with a clear hero section, navigation flow, and polished first impression.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["UI Design", "Wireframe", "Hero"],
  },
  {
    id: 2,
    category: "Adobe XD",
    title: "Mobile App Onboarding",
    description:
      "Mobile onboarding screens planned with reusable components, simple content hierarchy, and smooth user entry flow.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Mobile UI", "Prototype", "UX"],
  },
  {
    id: 3,
    category: "Adobe XD",
    title: "User Flow Prototype",
    description:
      "Clickable prototype view showing how users move between screens, actions, and decision points.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Flow", "Prototype", "Navigation"],
  },
  {
    id: 4,
    category: "Full Stack",
    title: "Authentication Screens",
    description:
      "Login and signup interface connected to a secure full-stack workflow with clean validation states.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["React", "Auth", "Forms"],
  },
  {
    id: 5,
    category: "Full Stack",
    title: "Admin Dashboard",
    description:
      "Dashboard screen for tracking records, metrics, and activity using responsive full-stack UI patterns.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Dashboard", "Data", "Responsive"],
  },
  {
    id: 6,
    category: "Full Stack",
    title: "Project Detail Page",
    description:
      "Detailed project page presenting features, timeline, technology stack, and final delivery information.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Frontend", "Content", "Layout"],
  },
  {
    id: 7,
    category: "Full Stack",
    title: "CRUD Management View",
    description:
      "Management screen designed for creating, reading, updating, and deleting data with clear controls.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["CRUD", "Node.js", "MongoDB"],
  },
  {
    id: 8,
    category: "React.js",
    title: "Portfolio Landing Wireframe",
    description:
      "Desktop and mobile friendly page layout built with careful spacing, readable sections, and consistent styling.",
    imgSrc: "../../portfolio.png",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    id: 9,
    category: "Illustrator",
    title: "Vector Logo Concept",
    description:
      "Adobe Illustrator logo exploration using vector shapes, balanced spacing, and scalable brand marks.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Logo", "Vector", "Brand"],
  },
  {
    id: 10,
    category: "Illustrator",
    title: "Icon Set Design",
    description:
      "Custom icon set created in Illustrator with consistent stroke weight, shape rhythm, and visual clarity.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Icons", "Vector", "System"],
  },
  {
    id: 11,
    category: "Illustrator",
    title: "Poster Illustration",
    description:
      "Illustrated poster artwork combining typography, color, and vector composition for a strong visual message.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Poster", "Artwork", "Color"],
  },
  {
    id: 12,
    category: "Illustrator",
    title: "Social Media Creative",
    description:
      "Social media creative designed with sharp vector graphics, readable text, and platform-friendly composition.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Creative", "Social", "Branding"],
  },
  {
    id: 13,
    category: "InDesign",
    title: "Brochure Front Layout",
    description:
      "Adobe InDesign brochure cover layout with structured typography, image placement, and print-ready spacing.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Brochure", "Print", "Layout"],
  },
  {
    id: 14,
    category: "InDesign",
    title: "Magazine Spread",
    description:
      "Editorial spread built in InDesign with columns, image balance, heading hierarchy, and readable body copy.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Editorial", "Grid", "Typography"],
  },
  {
    id: 15,
    category: "InDesign",
    title: "Certificate Design",
    description:
      "Formal certificate layout using clean alignment, decorative accents, and professional print composition.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Certificate", "Print", "Formal"],
  },
  {
    id: 16,
    category: "InDesign",
    title: "Report Page Design",
    description:
      "Report page layout that organizes headings, paragraphs, visuals, and page rhythm for easy reading.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Report", "Pages", "Structure"],
  },
  {
    id: 17,
    category: "Mixed Work",
    title: "Final Portfolio Showcase",
    description:
      "Combined proof-of-work screen showing development, Adobe XD, Illustrator, and InDesign outcomes together.",
    imgSrc: "../../Screenshot-1.png",
    tags: ["Portfolio", "Showcase", "Review"],
  },
];

const categoryStyles = {
  "Adobe XD": {
    icon: FaLayerGroup,
    className: "bg-[#D91A3A]/10 text-[#801426] ring-[#D91A3A]/25",
  },
  "Full Stack": {
    icon: FaCode,
    className: "bg-[#FCDF4C]/70 text-[#801426] ring-[#FCDF4C]/80",
  },
  "React.js": {
    icon: FaCode,
    className: "bg-[#FCDF4C]/70 text-[#801426] ring-[#FCDF4C]/80",
  },
  Illustrator: {
    icon: FaPalette,
    className: "bg-[#FCDF4C]/70 text-[#1A1616] ring-[#FCDF4C]/80",
  },
  InDesign: {
    icon: FaPenNib,
    className: "bg-[#801426]/10 text-[#801426] ring-[#801426]/20",
  },
  "Mixed Work": {
    icon: FaLayerGroup,
    className: "bg-[#403939]/10 text-[#403939] ring-[#403939]/20",
  },
};

export default function Proofofwork() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % proofItems.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  const selectedItem = proofItems[activeIndex];
  const selectedCategory =
    categoryStyles[selectedItem.category] || categoryStyles["Mixed Work"];
  const CategoryIcon = selectedCategory.icon;

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? proofItems.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % proofItems.length);
  };

  return (
    <section className="mx-auto max-w-7xl bg-white px-6 py-16 text-[#1A1616]">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#D91A3A]">
          Proof of Work
        </p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
           Screenshot Work Showcase
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#403939]">
          A carousel-style proof section for Adobe XD prototypes, full-stack
          builds, Illustrator artwork, and InDesign layouts.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#801426]/15 bg-[#1A1616] shadow-2xl shadow-[#801426]/20">
        <div className="grid gap-8 p-5 lg:grid-cols-[1.55fr_1fr] lg:p-8">
          <div className="relative overflow-hidden rounded-2xl bg-white">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedItem.id}
                src={selectedItem.imgSrc}
                alt={selectedItem.title}
                className="h-[420px] w-full object-fill sm:h-[460px]"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                onError={(event) => {
                  event.currentTarget.src = "/Profile.jpeg";
                }}
              />
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1A1616]/85 to-transparent" />

            <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] ring-1 ${selectedCategory.className}`}
              >
                <CategoryIcon />
                {selectedItem.category}
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-4 flex items-center justify-between gap-4 px-4 sm:px-6">
              <div className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#1A1616] ring-1 ring-[#403939]/10">
                {activeIndex + 1} / {proofItems.length}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FCDF4C] text-[#1A1616] transition hover:bg-[#D91A3A] hover:text-white"
                >
                  <FaArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#FCDF4C] text-[#1A1616] transition hover:bg-[#D91A3A] hover:text-white"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[#801426]/10 bg-white p-6 shadow-lg shadow-black/10">
              <span className="inline-flex rounded-full bg-[#FCDF4C]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-[#801426]">
                Active Screenshot
              </span>
              <h3 className="mt-5 text-3xl font-bold text-[#1A1616]">
                {selectedItem.title}
              </h3>
              <p className="mt-4 leading-8 text-[#403939]">
                {selectedItem.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#801426]/10 bg-[#403939]/5 px-3 py-1 text-xs font-medium text-[#403939]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">
                Jump to screenshot
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Use the slider indicators to open any of the 17 screenshots.
              </p>

              <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6">
                {proofItems.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Open ${item.title}`}
                    className={`group aspect-square rounded-2xl border p-1.5 text-left transition ${
                      index === activeIndex
                        ? "border-[#FCDF4C] bg-[#FCDF4C]/25"
                        : "border-white/10 bg-white/5 hover:border-[#D91A3A]"
                    }`}
                  >
                    <span className="relative block h-full overflow-hidden rounded-xl bg-white/10">
                      <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="h-full w-full object-fill transition duration-300 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.src = "/Profile.jpeg";
                        }}
                      />
                      <span className="absolute inset-x-0 bottom-0 bg-[#1A1616]/85 px-2 py-1 text-[10px] font-semibold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





