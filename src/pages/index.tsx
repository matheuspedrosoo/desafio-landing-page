import { Header } from '../components/Header';
import { SectionAbout } from '../components/SectionAbout';
import { SectionHome } from '../components/SectionHome';
import { SectionUniversitys } from '../components/SectionUniversitys';
import { SectionWhoWeAre } from '../components/SectionWhoWeAre';
import { SectionPlans } from '../components/SectionPlans';
import { SectionTestimonials } from '../components/SectionTestimonials';
import { SectionApp } from '../components/SectionApp';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />

      <SectionHome />

      <SectionUniversitys />

      <SectionAbout />

      <SectionWhoWeAre />

      <SectionPlans />

      <SectionTestimonials />

      <SectionApp />

      <Footer />
    </>
  );
}
