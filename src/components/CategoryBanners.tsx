const CategoryBanners = () => {
  const categories = [
    {
      id: 1,
      title: 'BASIC SHIRTS',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=600&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'SHOP VESTS',
      image: 'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=600&h=600&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'BLAZERS CATALOG',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=600&fit=crop',
      link: '#'
    },
    {
      id: 4,
      title: 'Pants',
      image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&h=600&fit=crop',
      link: '#'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="relative group overflow-hidden rounded-lg aspect-square block"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3
                  className="text-xl md:text-2xl font-black tracking-wide"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    textTransform: 'uppercase',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  {category.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBanners;
