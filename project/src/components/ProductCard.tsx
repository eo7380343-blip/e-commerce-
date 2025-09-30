import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div
      className="group relative bg-white overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={isHovered ? product.flipImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-[#C4045A] text-white px-3 py-1 text-xs font-bold rounded">
          SALE
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className={`absolute top-3 right-3 p-2 bg-white rounded-full shadow-md transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          } hover:bg-gray-100`}
        >
          <Heart
            size={20}
            className={isWishlisted ? 'fill-red-500 stroke-red-500' : 'stroke-gray-800'}
          />
        </button>

        {/* Add to Cart Button */}
        <button
          className={`absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-medium transition-all duration-300 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          } hover:bg-gray-900 flex items-center justify-center gap-2`}
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3
          className="text-sm md:text-base mb-2 line-clamp-2"
          style={{
            fontFamily: 'Lato, sans-serif',
            color: '#4F4F4F',
            minHeight: '2.5rem'
          }}
        >
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-1">
          <del className="text-xs text-gray-400">{product.oldPrice}</del>
          <ins className="text-sm font-bold text-black no-underline">{product.newPrice}</ins>
        </div>

        {/* Discount */}
        <div
          className="text-xs font-bold"
          style={{ color: '#C4045A' }}
        >
          Save {product.discount}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
