export default function HobbiesSection() {
  const hobbies = [
    { name: 'Coding', icon: 'fas fa-code' },
    { name: 'Reading Tech Blogs', icon: 'fas fa-book' },
    { name: 'Gaming', icon: 'fas fa-gamepad' },
    { name: 'Photography', icon: 'fas fa-camera' },
  ];

  return (
    <section id="hobbies" className="py-8">
      <div className="card max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-primary mb-6 text-center fade-in">Hobbies</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-blue-light p-4 rounded-lg slide-in-bottom text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <i className={`${hobby.icon} text-2xl text-blue-primary mb-2`}></i>
              <p className="text-gray-600">{hobby.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}