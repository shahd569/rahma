
import Services from '@/components/(index)/Services/Services'
import About from '@/components/(index)/AboutUs/AboutUs'
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import HeroSection from '@/components/(index)/hero/page'
export default function Home() {
  return (
    
    <div>
     <Navbar />
     <HeroSection />
     <Services />
     <About />
    <Footer />
    </div>

      
  );
}
