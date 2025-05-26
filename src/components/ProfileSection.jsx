import data from '../data/data.json';

export default function ProfileSection() {
  const { profile } = data;

  return (
    <section id="profile" className="py-8">
      <div className="card max-w-4xl mx-auto">
        <img
          src="/codeImg.png"
          alt="Vipul Mehra"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-primary pulse-neon scale-in"
        />
        <h2 className="text-3xl font-bold text-blue-primary mb-2 text-center slide-in-bottom">{profile.name}</h2>
        <p className="text-gray-600 mb-4 text-center slide-in-bottom" style={{ animationDelay: '0.2s' }}>{profile.bio}</p>
        <div className="flex justify-center space-x-4 slide-in-bottom" style={{ animationDelay: '0.4s' }}>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-primary hover:text-blue-dark transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-blue-primaryomy hover:text-blue-dark transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-gray-500 mt-2 text-center slide-in-bottom" style={{ animationDelay: '0.6s' }}>{profile.contact.address}</p>
      </div>
    </section>
  );
}