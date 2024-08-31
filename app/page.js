
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';


export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <AllProducts />
      <Footer />
    </div>
  );
}
