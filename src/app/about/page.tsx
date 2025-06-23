import Navbar from '../../components/Navbar';
import JourneySection from '../../components/JourneySection';
import Hero from '../../components/Hero';
import LeadershipSection from '@/components/LeadershipSection';
import OurTeamSection from '@/components/OurTeamSection';
import AboutHero from '@/components/AboutHero';

export default function AboutPage() {
  return (
    <>
      
      <AboutHero
        imageSrc="/eventimage.jpg"
        title="About TBI: Our Story & Mission"
        primaryButton={{ label: 'Our Programs', href: '/programs' }}
        secondaryButton={{ label: 'Meet the Team', href: '/about#team' }}
      />
      <main>
        <JourneySection />
        {/* Other about page content can go here */}
        <LeadershipSection />
        <OurTeamSection />
      </main>
    </>
  );
}
