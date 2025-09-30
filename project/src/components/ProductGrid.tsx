import ProductCard from './ProductCard';
import type { Product } from '../data/products';
import { useSearch } from '../contexts/SearchContext';
import { useMemo } from 'react';

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  const { searchQuery } = useSearch();

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }

    const query = searchQuery.toLowerCase();
    return products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-black tracking-wide mb-2"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {searchQuery ? `Search Results for "${searchQuery}"` : title}
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found matching your search.</p>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            VIEW ALL
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
