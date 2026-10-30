import { useEffect, useRef, useState } from "react";

/*
  Membungkus satu bagian halaman dan memberi class "is-visible"
  saat bagian itu masuk ke layar. Animasinya diatur di App.css.

  once = true  -> animasi hanya sekali (default)
  once = false -> animasi diulang setiap kali bagian itu masuk layar lagi
*/
function Reveal({ children, once = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}

export default Reveal;
