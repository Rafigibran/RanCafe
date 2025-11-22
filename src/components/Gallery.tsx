const Gallery = () => {
  const galleryItems = [
    { title: "Suasana Pagi di RanCafe", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb" },
    { title: "Latte Art Premium", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { title: "Interior Cozy", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24" },
    { title: "Barista Profesional", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
    { title: "Menu Dessert Lezat", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
    { title: "Ruang Meeting", image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814" },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Galeri</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lihat suasana nyaman dan produk berkualitas di RanCafe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cafe-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-cafe-cream text-xl font-semibold px-4 text-center">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
