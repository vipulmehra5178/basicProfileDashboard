export default function Navbar() {
  return (
    <nav className="bg-blue-primary text-white w-64 h-screen fixed top-0 left-0 p-6 fade-in">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Vipul Mehra</h1>
      </div>
      <ul className="space-y-4">
        <li>
          <a href="#profile" className="flex items-center space-x-3 text-white hover:text-blue-200">
            <i className="fas fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#academics" className="flex items-center space-x-3 text-white hover:text-blue-200">
            <i className="fas fa-graduation-cap"></i>
            <span>Academics</span>
          </a>
        </li>
        <li>
          <a href="#experience" className="flex items-center space-x-3 text-white hover:text-blue-200">
            <i className="fas fa-briefcase"></i>
            <span>Experience</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="flex items-center space-x-3 text-white hover:text-blue-200">
            <i className="fas fa-code"></i>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#skills" className="flex items-center space-x-3 text-white hover:text-blue-200">
            <i className="fas fa-tools"></i>
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#certifications" className="flex items-center space-x-3 text-white hover:text-blue-200">
            <i className="fas fa-certificate"></i>
            <span>Certifications</span>
          </a>
        </li>
        <li>
          <a href="#hobbies" className="flex items-center space-x-3 text-white hover:text-blue-200">
            <i className="fas fa-heart"></i>
            <span>Hobbies</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}