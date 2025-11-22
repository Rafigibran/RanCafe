import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      text: "RanCafe adalah tempat favorit saya untuk bekerja! Kopinya enak, suasananya nyaman, dan WiFi cepat. Sangat direkomendasikan!",
      rating: 5,
    },
    {
      name: "Siti Nurhaliza",
      text: "Latte art di RanCafe selalu sempurna! Barista-nya sangat ramah dan profesional. Tempatnya juga instagramable banget.",
      rating: 5,
    },
    {
      name: "Ahmad Dhani",
      text: "Kopi terbaik di kota! Saya sudah mencoba berbagai menu dan semuanya tidak mengecewakan. Harga juga sangat reasonable.",
      rating: 5,
    },
    {
      name: "Maya Indah",
      text: "Tempat yang sempurna untuk meeting atau ngobrol sama teman. Interior-nya aesthetic dan makanannya juga enak-enak.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Testimoni Pelanggan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apa kata mereka tentang RanCafe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-primary">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
