import { useParams } from "react-router-dom";

export default function ProjectDetails() {

  const { id } = useParams();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-white">

      <h1 className="text-5xl font-bold mb-8">
        Project Details - This page was about to develop
      </h1>
    </section>
  );
}