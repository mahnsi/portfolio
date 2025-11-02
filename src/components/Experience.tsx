import data from '../data.json';

export default function Experience() {
  const { experience } = data;

  return (
    <section className="section-w-taskbar">
      <div className="section-taskbar" >
          My Experience
          <div className="flex gap-1.5">
            <div className="task-btn"></div>
            <div className="task-btn"></div>
            <div className="task-btn"></div>
          </div>
        </div>
      <div className="space-y-4 mx-6">
        {experience.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 bg-opacity-50 border border-white/10 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {project.name}
            </h3>
            <p className="text-white/80">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

