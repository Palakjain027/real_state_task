import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutRealtor from "@/components/AboutRealtor";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImageGallery from "@/components/ImageGallery";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutRealtor />
        <WhyChooseUs />
        <ImageGallery />
        <AboutUs />
        <Projects />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
