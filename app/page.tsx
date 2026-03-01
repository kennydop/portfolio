import BackgroundPattern from "@/components/BackgroundPattern";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import PlayerProfile from "@/components/PlayerProfile";
import TechStack from "@/components/TechStack";
import SystemLog from "@/components/SystemLog";
import Prototypes from "@/components/Prototypes";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundPattern />
      <ScrollProgress />
      <main className="relative z-10">
        <Hero />
        <PlayerProfile />
        <TechStack />
        <SystemLog />
        <Prototypes />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
