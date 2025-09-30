import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryBanners from './components/CategoryBanners';
import ProductGrid from './components/ProductGrid';
import PromoBanners from './components/PromoBanners';
import Footer from './components/Footer';
import { newArrivals, bestSellers } from './data/products';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { SearchProvider } from './contexts/SearchContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <SearchProvider>
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
          </SearchProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
