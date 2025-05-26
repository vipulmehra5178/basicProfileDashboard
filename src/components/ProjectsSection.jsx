import data from '../data/data.json';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-8">
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-primary mb-6 text-center fade-in">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-light p-4 rounded-lg slide-in-bottom"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-lg font-semibold text-blue-primary">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-500 mt-2">Technologies: {project.technologies.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}