import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Lightbox from "./Lightbox";

function ProjectModal({ project, onClose }) {
  const { title, description, screenshots = [], links = {} } = project;
  const [previewIndex, setPreviewIndex] = useState(null); // null = lightbox tertutup
  const closeButtonRef = useRef(null);

  const linkItems = [
    { key: "figma", label: "View in Figma", href: links.figma },
    { key: "github", label: "GitHub", href: links.github },
    { key: "live", label: "Live Demo", href: links.live },
  ].filter((item) => item.href);

  // Kunci scroll halaman saat popup terbuka, kembalikan fokus saat ditutup
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, []);

  // Keyboard: Esc menutup, panah kiri/kanan untuk pindah gambar
  useEffect(() => {
    const total = screenshots.length;

    const handleKeyDown = (e) => {
      if (previewIndex !== null) {
        if (e.key === "Escape") setPreviewIndex(null);
        if (e.key === "ArrowLeft") setPreviewIndex((i) => (i - 1 + total) % total);
        if (e.key === "ArrowRight") setPreviewIndex((i) => (i + 1) % total);
        return;
      }
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewIndex, screenshots.length, onClose]);

  return createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="modal-close"
            aria-label="Tutup"
            onClick={onClose}
          >
            &times;
          </button>

          {/* Heading & deskripsi */}
          <h3 id="project-modal-title" className="modal-title">
            {title}
          </h3>
          <p className="modal-description">{description}</p>

          {linkItems.length > 0 && (
            <div className="modal-links">
              {linkItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Tangkapan layar */}
          {screenshots.length > 0 && (
            <div className="modal-gallery">
              {screenshots.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className="modal-thumb"
                  aria-label={`Perbesar tangkapan layar ${i + 1}`}
                  onClick={() => setPreviewIndex(i)}
                >
                  <img
                    src={src}
                    alt={`${title} - tangkapan layar ${i + 1}`}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {previewIndex !== null && (
        <Lightbox
          images={screenshots}
          index={previewIndex}
          title={title}
          onClose={() => setPreviewIndex(null)}
          onPrev={() =>
            setPreviewIndex((i) => (i - 1 + screenshots.length) % screenshots.length)
          }
          onNext={() => setPreviewIndex((i) => (i + 1) % screenshots.length)}
        />
      )}
    </>,
    document.body
  );
}

export default ProjectModal;
