const PromoBanners = () => {
  const promos = [
    {
      id: 1,
      title: 'BEACHWEAR',
      subtitle: 'Summer Collection',
      image: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'HOME DECORATION',
      subtitle: 'New Arrivals',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  const bottomBanners = [
    {
      id: 3,
      title: 'READY FOR RED',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&h=800&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'DENIM',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
      link: '#'
    },
    {
      id: 5,
      title: 'SHOP KIMONOS',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
      link: '#'
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Top Row - 2 Wide Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {promos.map((promo) => (
            <a
              key={promo.id}
              href={promo.link}
              className="relative group overflow-hidden rounded-lg block h-64 md:h-80"
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3
                  className="text-3xl md:text-4xl font-black mb-2"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    textTransform: 'uppercase'
                  }}
                >
                  {promo.title}
                </h3>
                <p className="text-sm md:text-base font-medium">{promo.subtitle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Row - 3 Tall Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bottomBanners.map((banner) => (
            <a
              key={banner.id}
              href={banner.link}
              className="relative group overflow-hidden rounded-lg block h-96"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-6 right-6 text-white">
                <h3
                  className="text-2xl md:text-3xl font-black"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    textTransform: 'uppercase'
                  }}
                >
                  {banner.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
