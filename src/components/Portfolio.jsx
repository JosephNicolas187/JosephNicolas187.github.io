import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";

/*
  Data proyek. Ubah isinya sesuai proyekmu.
  - image       : gambar sampul di kartu
  - description : teks di popup
  - screenshots : daftar tangkapan layar (bisa diperbesar di popup)
  - links       : isi hanya yang ada, link kosong ("") tidak akan ditampilkan
*/
const projects = [
  {
    id: 1,
    title: "Project Title 1",
    image: "/images/project-1.jpg",
    description:
      "Tulis deskripsi proyek di sini: masalah yang ingin diselesaikan, peranmu, tools yang dipakai, dan hasil akhirnya.",
    screenshots: [
      "/images/project-1/screen-1.jpg",
      "/images/project-1/screen-2.jpg",
      "/images/project-1/screen-3.jpg",
    ],
    links: { figma: "", github: "", live: "" },
  },
  {
    id: 2,
    title: "Project Title 2",
    image: "/images/project-2.jpg",
    description:
      "Tulis deskripsi proyek di sini: masalah yang ingin diselesaikan, peranmu, tools yang dipakai, dan hasil akhirnya.",
    screenshots: [
      "/images/project-2/screen-1.jpg",
      "/images/project-2/screen-2.jpg",
      "/images/project-2/screen-3.jpg",
    ],
    links: { figma: "", github: "", live: "" },
  },
  {
    id: 3,
    title: "Project Title 3",
    image: "/images/project-3.jpg",
    description:
      "Tulis deskripsi proyek di sini: masalah yang ingin diselesaikan, peranmu, tools yang dipakai, dan hasil akhirnya.",
    screenshots: [
      "/images/project-3/screen-1.jpg",
      "/images/project-3/screen-2.jpg",
      "/images/project-3/screen-3.jpg",
    ],
    links: { figma: "", github: "", live: "" },
  },
  {
    id: 4,
    title: "Project Title 4",
    image: "/images/project-4.jpg",
    description:
      "Tulis deskripsi proyek di sini: masalah yang ingin diselesaikan, peranmu, tools yang dipakai, dan hasil akhirnya.",
    screenshots: [
      "/images/project-4/screen-1.jpg",
      "/images/project-4/screen-2.jpg",
      "/images/project-4/screen-3.jpg",
    ],
    links: { figma: "", github: "", live: "" },
  },
  {
    id: 5,
    title: "Project Title 5",
    image: "/images/project-5.jpg",
    description:
      "Tulis deskripsi proyek di sini: masalah yang ingin diselesaikan, peranmu, tools yang dipakai, dan hasil akhirnya.",
    screenshots: [
      "/images/project-5/screen-1.jpg",
      "/images/project-5/screen-2.jpg",
      "/images/project-5/screen-3.jpg",
    ],
    links: { figma: "", github: "", live: "" },
  },
  {
    id: 6,
    title: "Project Title 6",
    image: "/images/project-6.jpg",
    description:
      "Tulis deskripsi proyek di sini: masalah yang ingin diselesaikan, peranmu, tools yang dipakai, dan hasil akhirnya.",
    screenshots: [
      "/images/project-6/screen-1.jpg",
      "/images/project-6/screen-2.jpg",
      "/images/project-6/screen-3.jpg",
    ],
    links: { figma: "", github: "", live: "" },
  },
];

function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio">
      <SectionHeading title="Portfolio" />

      <div className="portfolio-grid">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="portfolio-card"
            aria-haspopup="dialog"
            aria-label={`Lihat detail ${project.title}`}
            onClick={() => setActiveProject(project)}
          >
            <img
              src={project.image}
              alt=""
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;
