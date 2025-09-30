const HeroBanner = () => {
  return (
    <section className="w-full bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Background pattern/image placeholder */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-200"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-4"
              style={{
                fontFamily: 'Lato, sans-serif',
                color: '#D32F2F',
                textTransform: 'uppercase',
                lineHeight: '0.9'
              }}
            >
              END OF<br />SEASON<br />SALE
            </h2>
            <p className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Up to 66% Off
            </p>
            <button
              className="bg-black text-white px-10 py-3 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              SHOP NOW
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-8 left-8 md:left-20">
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold transform -rotate-12">
              UP TO 66% OFF
            </div>
          </div>
          <div className="absolute bottom-8 right-8 md:right-20">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12">
              SALE
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-600">
        www.dresscodeme.com
      </div>
    </section>
  );
};

export default HeroBanner;
