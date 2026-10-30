import SectionHeading from "./SectionHeading";

// Ukuran area gambar (viewBox) dan kebulatan ujung polygon
const VIEW_W = 750;
const VIEW_H = 335;
const CORNER_RADIUS = 10; // makin besar = ujung makin bulat

/*
  points : titik-titik polygon [x, y] dalam area 750 x 335
  label  : posisi tengah teks [x, y]

  Sisi-sisi yang berhadapan dibuat sejajar dengan jarak sama (14 satuan),
  jadi celah putih di antara segitiga terlihat rata di semua tempat.
  Jika mengubah satu titik, geser juga titik pasangannya di bentuk sebelah.
*/
const capabilities = [
  {
    name: "Website",
    image: "/images/website.jpeg",
    points: [[0, 0], [210, 110], [15, 210]],
    label: [90, 113],
  },
  {
    name: "E-Commerce",
    image: "/images/ecommerce.jpeg",
    points: [[238, 115], [412, 12], [480, 203]],
    label: [364, 110],
  },
  {
    name: "Dashboard",
    image: "/images/dashboard.jpeg",
    points: [[427, 12], [668, 37], [495, 204]],
    label: [536, 91],
  },
  {
    name: "Mobile App",
    image: "/images/mobile-app.jpeg",
    points: [[22, 222], [218, 122], [240, 332]],
    label: [150, 224],
  },
  {
    name: "Landing Page",
    image: "/images/landing-page.jpeg",
    points: [[231, 128], [475, 216], [254, 331]],
    label: [334, 224],
  },
  {
    name: "Design System",
    image: "/images/design-system.jpeg",
    points: [[510, 209], [678, 47], [747, 300]],
    label: [633, 201],
  },
];

// Membuat path SVG dari polygon dengan ujung membulat
function roundedPath(points, radius) {
  const n = points.length;

  const corners = points.map(([x, y], i) => {
    const [px, py] = points[(i - 1 + n) % n];
    const [nx, ny] = points[(i + 1) % n];
    const dPrev = Math.hypot(px - x, py - y);
    const dNext = Math.hypot(nx - x, ny - y);
    const r = Math.min(radius, dPrev / 2, dNext / 2);

    return {
      vertex: [x, y],
      from: [x + ((px - x) * r) / dPrev, y + ((py - y) * r) / dPrev],
      to: [x + ((nx - x) * r) / dNext, y + ((ny - y) * r) / dNext],
    };
  });

  const f = (p) => `${p[0].toFixed(2)} ${p[1].toFixed(2)}`;
  let d = `M ${f(corners[0].to)}`;
  for (let i = 1; i < n; i++) {
    d += ` L ${f(corners[i].from)} Q ${f(corners[i].vertex)} ${f(corners[i].to)}`;
  }
  d += ` L ${f(corners[0].from)} Q ${f(corners[0].vertex)} ${f(corners[0].to)} Z`;
  return d;
}

function boundingBox(points) {
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const x = Math.min(...xs);
  const y = Math.min(...ys);
  return { x, y, w: Math.max(...xs) - x, h: Math.max(...ys) - y };
}

function Capabilities() {
  return (
    <section id="capabilities" className="capabilities">
      <SectionHeading title="My Capabilities">
        <p>Here are the types of digital solutions I can design.</p>
      </SectionHeading>

      <svg
        className="capabilities-svg"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        role="group"
        aria-label="Types of digital solutions"
      >
        <defs>
          {capabilities.map(({ name, points }, i) => (
            <clipPath key={name} id={`capability-clip-${i}`}>
              <path d={roundedPath(points, CORNER_RADIUS)} />
            </clipPath>
          ))}
        </defs>

        {capabilities.map(({ name, image, points, label }, i) => {
          const d = roundedPath(points, CORNER_RADIUS);
          const box = boundingBox(points);

          return (
            <g key={name}>
              <title>{name}</title>

              {/* warna dasar jika gambar belum ada */}
              <path d={d} fill="#1c1c1c" />

              {/* gambar dipotong mengikuti bentuk polygon */}
              <image
                href={image}
                x={box.x}
                y={box.y}
                width={box.w}
                height={box.h}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#capability-clip-${i})`}
              />

              {/* lapisan gelap tipis agar teks terbaca */}
              <path d={d} fill="#000" fillOpacity="0.5" />

              <text x={label[0]} y={label[1]} className="capability-label">
                {name}
              </text>
            </g>
          );
        })}
      </svg>
    </section>
  );
}

export default Capabilities;
