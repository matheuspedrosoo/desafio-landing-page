import { Header } from '../components/Header';
import { SectionAbout } from '../components/SectionAbout';
import { SectionHome } from '../components/SectionHome';
import { Universitys } from '../components/Universitys';
import { SectionWhoWeAre } from '../components/SectionWhoWeAre';
import { Plans } from '../components/Plans';
import { Testimonials } from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Header />

      <SectionHome />

      <Universitys />

      <SectionAbout />

      <SectionWhoWeAre />

      <Plans />

      <Testimonials />
    </>
  );
}
