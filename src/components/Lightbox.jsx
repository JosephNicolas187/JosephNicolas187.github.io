function Lightbox({ images, index, title, onClose, onPrev, onNext }) {
  const hasMany = images.length > 1;

  const stop = (fn) => (e) => {
    e.stopPropagation();
    fn();
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} - pratinjau gambar`}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-btn lightbox-close"
        aria-label="Tutup pratinjau"
        onClick={stop(onClose)}
      >
        &times;
      </button>

      {hasMany && (
        <button
          type="button"
          className="lightbox-btn lightbox-prev"
          aria-label="Gambar sebelumnya"
          onClick={stop(onPrev)}
        >
          &#8249;
        </button>
      )}

      <img
        className="lightbox-image"
        src={images[index]}
        alt={`${title} - tangkapan layar ${index + 1}`}
        onClick={(e) => e.stopPropagation()}
      />

      {hasMany && (
        <button
          type="button"
          className="lightbox-btn lightbox-next"
          aria-label="Gambar berikutnya"
          onClick={stop(onNext)}
        >
          &#8250;
        </button>
      )}

      <span className="lightbox-counter">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}

export default Lightbox;
