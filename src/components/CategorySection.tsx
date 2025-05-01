
import { Card } from "@/components/ui/card";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Fresh Fruits",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 24
  },
  {
    id: 2,
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 36
  },
  {
    id: 3,
    name: "Organic",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 18
  },
  {
    id: 4,
    name: "Dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    count: 12
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of fresh, locally-sourced products from trusted farmers and producers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a 
              href={`/products?category=${category.name.toLowerCase()}`} 
              key={category.id}
              className="block group"
            >
              <Card className="overflow-hidden hover-shadow-grow h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-bazaar-green transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {category.count} Products
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
