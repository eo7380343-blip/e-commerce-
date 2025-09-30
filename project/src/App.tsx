import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryBanners from './components/CategoryBanners';
import ProductGrid from './components/ProductGrid';
import PromoBanners from './components/PromoBanners';
import Footer from './components/Footer';
import { newArrivals, bestSellers } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroBanner />
        <CategoryBanners />
        <ProductGrid title="NEW ARRIVALS" products={newArrivals} />
        <ProductGrid title="BEST SELLERS" products={bestSellers} />
        <PromoBanners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
