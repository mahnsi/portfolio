import data from '../data.json';

export default function Projects() {
  const { projects } = data;

  return (
    <section className="bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-4">My Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 bg-opacity-50 border border-white/10 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.name}
              </a>
            </h3>
            <p className="text-white/80">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
