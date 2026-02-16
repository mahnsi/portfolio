import { useState } from "react";
import data from "../data.json";
import "../style/popup.css";

type Project = {
  name: string;
  link: string;
  description: string;
  pinned?: boolean;
};

export default function Projects() {
  const { projects } = data as { projects: Project[] };
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="section-w-taskbar">
      <div className="section-taskbar">
        My Projects
        <div className="flex gap-1.5">
          <div className="task-btn"></div>
          <div className="task-btn"></div>
          <div className="task-btn"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 justify-items-center">
        {projects.map((project, i) => (
          <File key={i} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

function File({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col items-center w-24 text-center transition-transform hover:scale-[1.1]"
    >
      <div className="relative h-16 w-16 grid place-items-center mb-2">
        <FolderIcon />
        <div className="absolute inset-0 rounded-md bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <span className="dark-blue-font">{project.name}</span>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.name}`}
    >

      {/* pop up window */}
      <div className="section-w-taskbar bg-white/65">
        {/* pop-up title bar */}
        <div className="section-taskbar">
          {project.name}

          <div className="flex gap-1.5">
            <div className="task-btn"/>
            <div className="task-btn"/>
            <button
              type="button"
              onClick={onClose}
              className="task-btn-close"
              aria-label="Close"
              title="Close"
            />
          </div>
        </div>


        {/* pop-up body */}
        <div className="px-4 ">
          <p className="dark-blue-font">{project.description}</p>

            <div className="retro-actions">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn retro-btn--primary"
            >
              view project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** folder icon */
function FolderIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 drop-shadow-[0_3px_5px_rgba(0,100,255,0.4)]">
      <defs>
        <linearGradient id="FolderIcon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6F4FF" />
          <stop offset="50%" stopColor="#7EC9FF" />
          <stop offset="100%" stopColor="#4A98E0" />
        </linearGradient>
        <linearGradient id="retroShine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect x="6" y="16" width="36" height="22" rx="3" fill="url(#FolderIcon)" stroke="#003366" strokeWidth="0.5" />
      <path d="M8 14h13l2-2h10c3 0 5 2 5 5v2H12l-2 6H8z" fill="#B4E2FF" stroke="#003366" strokeWidth="0.4" />
      <rect x="7" y="15" width="34" height="10" fill="url(#retroShine)" />
    </svg>
  );
}
