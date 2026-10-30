import SectionHeading from "./SectionHeading";

// Tambah / ubah tools cukup lewat data di bawah ini
const techGroups = [
  {
    title: "FRONTEND",
    items: [
      { name: "HTML", icon: "/icons/tech/html.svg" },
      { name: "CSS", icon: "/icons/tech/css.svg" },
      { name: "JavaScript", icon: "/icons/tech/javascript.svg" },
      { name: "React", icon: "/icons/tech/react.svg" },
    ],
  },
  {
    title: "UI UX DESIGN",
    items: [
      { name: "Figma", icon: "/icons/tech/figma.svg" },
      { name: "Canva", icon: "/icons/tech/canva.svg" },
      { name: "Miro", icon: "/icons/tech/miro.svg" },
      { name: "Whimsical", icon: "/icons/tech/whimsical.svg" },
    ],
  },
  {
    title: "Learning MOTION DESIGN",
    items: [
      { name: "Adobe AE", icon: "/icons/tech/after-effects.svg" },
      { name: "Blender", icon: "/icons/tech/blender.svg" },
    ],
  },
];

function TechStack() {
  return (
    <section id="tech-stack" className="techstack">
      <SectionHeading title="Tech Stack" />

      <div className="techstack-groups">
        {techGroups.map((group) => (
          <div key={group.title} className="tech-group">
            <h3 className="tech-group-title">{group.title}</h3>

            <ul className="tech-chips">
              {group.items.map((item) => (
                <li key={item.name} className="tech-chip">
                  <img
                    src={item.icon}
                    alt=""
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
