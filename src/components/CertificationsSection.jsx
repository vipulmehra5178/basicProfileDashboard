import data from '../data/data.json';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-8">
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-primary mb-6 text-center fade-in">Certifications</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {data.certifications.map((cert, index) => (
            <li
              key={index}
              className="slide-in-bottom"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}