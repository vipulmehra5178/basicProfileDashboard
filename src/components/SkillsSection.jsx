import data from '../data/data.json';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-8">
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-primary mb-6 text-center fade-in">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(data.skills).map(([category, items], index) => (
            <div
              key={index}
              className="bg-blue-light p-4 rounded-lg slide-in-bottom"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-lg font-semibold text-blue-primary capitalize">{category}</h3>
              <ul className="list-disc list-inside text-gray-600">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}