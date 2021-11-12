import { Header } from '../components/Header';
import { SectionAbout } from '../components/SectionAbout';
import { SectionHome } from '../components/SectionHome';
import { Universitys } from '../components/Universitys';

export default function HomePage() {
  return (
    <>
      <Header />

      <SectionHome />

      <Universitys />

      <SectionAbout />
    </>
  );
}
