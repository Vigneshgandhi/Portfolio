import { FaImage } from "react-icons/fa";

export default function Proof1({ screenshots = [] }) {
  if (!screenshots.length) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#D91A3A]">
          Project Screenshots
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1A1616] sm:text-4xl">
          Screenshots with Explanation
        </h2>
        <p className="mt-3 leading-7 text-[#403939]">
          Each screenshot highlights an important part of the project and
          explains what the screen is used for.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {screenshots.map((screenshot, index) => (
          <article
            key={screenshot.title}
            className="overflow-hidden rounded-2xl border border-[#801426]/10 bg-white shadow-xl shadow-[#801426]/10"
          >
            <div className="relative bg-[#1A1616]">
              <img
                src={screenshot.src}
                alt={screenshot.alt || screenshot.title}
                className="h-72 w-full object-fill sm:h-80"
                onError={(event) => {
                  event.currentTarget.src = "/Profile.jpeg";
                }}
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#801426] ring-1 ring-[#801426]/10">
                <FaImage />
                Screenshot {index + 1}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#1A1616]">
                {screenshot.title}
              </h3>
              <p className="mt-3 text-justify leading-7 text-[#403939]">
                {screenshot.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
