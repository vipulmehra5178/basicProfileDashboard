import data from '../data/data.json';

export default function AcademicsSection() {
  return (
    <section id="academics" className="py-8">
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-primary mb-6 text-center fade-in">Education</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="bg-blue-light p-4 rounded-lg slide-in-bottom"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-lg font-semibold text-blue-primary">{edu.institution}</h3>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-gray-500">{edu.location}</p>
              <p className="text-gray-500">{edu.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}