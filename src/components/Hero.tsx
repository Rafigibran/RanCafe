import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-cafe-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-cafe-cream mb-6 animate-fade-in">
          Nikmati Kopi Terbaik di RanCafe
        </h1>
        <p className="text-xl md:text-2xl text-cafe-cream/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Tempat sempurna untuk bersantai, bekerja, dan menikmati setiap tegukan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            className="bg-cafe-brown hover:bg-cafe-brown/90 text-cafe-cream text-lg px-8"
            onClick={() => scrollToSection("menu")}
          >
            Lihat Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cafe-cream text-cafe-cream hover:bg-cafe-cream hover:text-cafe-brown text-lg px-8"
            onClick={() => scrollToSection("contact")}
          >
            Reservasi Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
