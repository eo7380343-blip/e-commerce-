import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Categories Column */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              CATEGORIES
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">New In</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beachwear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Homewear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DC Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Modest</a></li>
            </ul>
          </div>

          {/* Important Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              IMPORTANT LINKS
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns and Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery and Shipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              FOLLOW US
            </h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Twitter size={24} />
              </a>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-3">NEWSLETTER</h4>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to receive updates, access to exclusive deals, and more.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
            <div className="text-sm text-gray-400">SECURE PAYMENT</div>
            <div className="flex gap-3">
              <div className="bg-white px-3 py-1 rounded text-xs font-bold text-black">VISA</div>
              <div className="bg-white px-3 py-1 rounded text-xs font-bold text-black">MASTERCARD</div>
              <div className="bg-white px-3 py-1 rounded text-xs font-bold text-black">CASH</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>All Copyrights belong to Dress Code ME, 2025.</p>
            <p>
              Online Store Powered by{' '}
              <a href="#" className="text-white hover:underline">
                MitchDesigns
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
