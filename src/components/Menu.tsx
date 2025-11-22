import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const menuItems = {
    kopi: [
      { name: "Espresso", description: "Kopi hitam pekat dengan rasa kuat", price: "Rp 25.000" },
      { name: "Cappuccino", description: "Espresso dengan susu berbusa lembut", price: "Rp 35.000" },
      { name: "Latte", description: "Espresso dengan susu steamed creamy", price: "Rp 35.000" },
      { name: "Americano", description: "Espresso dengan air panas", price: "Rp 30.000" },
    ],
    nonKopi: [
      { name: "Matcha Latte", description: "Teh hijau Jepang premium dengan susu", price: "Rp 40.000" },
      { name: "Chocolate", description: "Cokelat panas yang kaya dan creamy", price: "Rp 35.000" },
      { name: "Tea", description: "Pilihan teh hitam atau teh hijau", price: "Rp 25.000" },
      { name: "Fresh Juice", description: "Jus buah segar pilihan", price: "Rp 30.000" },
    ],
    makanan: [
      { name: "Croissant", description: "Croissant butter klasik yang flaky", price: "Rp 25.000" },
      { name: "Sandwich", description: "Sandwich dengan isian pilihan", price: "Rp 45.000" },
      { name: "Pasta", description: "Pasta dengan saus carbonara atau aglio olio", price: "Rp 55.000" },
      { name: "Salad Bowl", description: "Salad segar dengan dressing pilihan", price: "Rp 50.000" },
    ],
    dessert: [
      { name: "Tiramisu", description: "Dessert Italia klasik dengan kopi", price: "Rp 40.000" },
      { name: "Cheesecake", description: "New York cheesecake yang creamy", price: "Rp 45.000" },
      { name: "Brownies", description: "Brownies cokelat dengan ice cream", price: "Rp 35.000" },
      { name: "Waffle", description: "Waffle Belgium dengan topping pilihan", price: "Rp 40.000" },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Menu Kami</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nikmati berbagai pilihan kopi berkualitas dan hidangan lezat
          </p>
        </div>

        <Tabs defaultValue="kopi" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="kopi">Kopi</TabsTrigger>
            <TabsTrigger value="nonKopi">Non-Kopi</TabsTrigger>
            <TabsTrigger value="makanan">Makanan Ringan</TabsTrigger>
            <TabsTrigger value="dessert">Dessert</TabsTrigger>
          </TabsList>

          {Object.entries(menuItems).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item, index) => (
                  <Card
                    key={index}
                    className="hover-lift hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
