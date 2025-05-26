import Navbar from '../components/Navbar';
import ProfileSection from '../components/ProfileSection';
import AcademicsSection from '../components/AcademicsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import HobbiesSection from '../components/HobbiesSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 p-6 transition-all duration-300" style={{ marginLeft: '0' }}>
        <ProfileSection />
        <AcademicsSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <HobbiesSection />
        <Footer />
      </main>
    </div>
  );
}