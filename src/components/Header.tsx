import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useSearch } from '../contexts/SearchContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const { cartCount } = useCart();
  const { setSearchQuery } = useSearch();

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setIsSearchOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="w-full">
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="flex items-center gap-4">
              <span className="font-medium">NO SHIPPING FEES FOR RETURNS HOT</span>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hidden md:inline hover:underline">ABOUT</a>
              <a href="#" className="hidden md:inline hover:underline">RETURNS AND EXCHANGES</a>
            </div>
            <div>
              <a href="#" className="hover:underline">Shop in Arabic</a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
              <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: 'Lato, sans-serif' }}>
                DRESS CODE ME
              </h1>
            </div>
            <div className="flex-1 flex justify-end items-center gap-6">
              {isSearchOpen ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search products..."
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Search
                  </button>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:opacity-70 transition-opacity"
                >
                  <Search size={24} />
                </button>
              )}

              <button className="hover:opacity-70 transition-opacity relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1 className="text-xl font-black" style={{ fontFamily: 'Lato, sans-serif' }}>
              DRESS CODE ME
            </h1>
            <div className="flex items-center gap-4">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search size={20} />
              </button>
              <button className="relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>

          {isSearchOpen && (
            <div className="mt-3 flex items-center gap-2">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search products..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Search
              </button>
            </div>
          )}
        </div>
      </div>

      <nav className={`sticky top-0 bg-white border-b border-gray-200 z-50 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:justify-center md:items-center gap-0 md:gap-8 py-0 md:py-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">NEW IN</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium text-red-600">END OF SEASON SALE</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">WOMEN</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">MEN</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">OUTLET</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">BEACHWEAR</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">HOMEWEAR</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">DC HOME</a></li>
            <li><a href="#" className="block py-3 md:py-0 hover:text-gray-600 transition-colors font-medium">MODEST</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
