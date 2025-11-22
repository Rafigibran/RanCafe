import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Semua field harus diisi!",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, kami akan segera menghubungi Anda.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Kontak & Lokasi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hubungi kami atau kunjungi RanCafe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Nama"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Pesan"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Kirim
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                    <p className="text-muted-foreground">
                      Jl. Mawar No. 21, Rempung
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-2 inline-block"
                    >
                      Lihat di Google Maps →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Jam Buka</h3>
                    <p className="text-muted-foreground">
                      Setiap Hari: 08.00 - 22.00 WIB
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                    <p className="text-muted-foreground">(021) 1234-5678</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
