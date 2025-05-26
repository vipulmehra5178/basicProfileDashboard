import data from '../data/data.json';

export default function Footer() {
  return (
    <footer className="py-8 bg-blue-primary text-white text-center">
      <p className="text-white">
        © {new Date().getFullYear()} Vipul Mehra. All rights reserved.
      </p>
      <a
        href={data.profile.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-200"
      >
        GitHub
      </a>
    </footer>
  );
}