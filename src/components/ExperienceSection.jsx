import data from '../data/data.json';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8">
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-primary mb-6 text-center fade-in">Experience</h2>
        {data.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-blue-light p-4 rounded-lg slide-in-bottom"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-lg font-semibold text-blue-primary">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500">{exp.duration}</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}