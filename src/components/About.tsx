import aboutImage from "@/assets/about-cafe.jpg";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={aboutImage}
              alt="Interior RanCafe"
              className="rounded-lg shadow-xl hover-scale w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Tentang Kami
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              RanCafe didirikan dengan visi untuk menciptakan ruang yang nyaman di mana setiap orang dapat menikmati secangkir kopi berkualitas tinggi sambil bersantai atau bekerja.
            </p>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Kami menggunakan biji kopi pilihan dari petani lokal terbaik dan memanggang sendiri untuk memastikan kesegaran dan kualitas dalam setiap cangkir.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dengan interior yang hangat dan minimalis, RanCafe adalah tempat sempurna untuk bertemu teman, mengerjakan proyek, atau sekadar menikmati momen tenang dengan kopi favorit Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
