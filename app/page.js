import Footer from "@/components/ui/Footer";
import Navbar from "./Navbar";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import DTC from "@/components/ui/DCT";
import DctPage from "@/components/ui/DctPage";
import Box from "@/components/ui/Box";
import Bottom from "@/components/ui/Bottom";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <DTC />
      <DctPage />
      <Box />
      <Bottom />
      <Footer />
    </div>
  );
}
