
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isOrganic: boolean;
  isPopular: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Strawberries",
    description: "Sweet, juicy strawberries picked daily from local farms",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Fruits",
    isOrganic: true,
    isPopular: true
  },
  {
    id: 2,
    name: "Organic Avocados",
    description: "Creamy, ripe avocados perfect for salads and toast",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Fruits",
    isOrganic: true,
    isPopular: false
  },
  {
    id: 3,
    name: "Farm Fresh Eggs",
    description: "Free-range eggs from pasture-raised chickens",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1598965402089-908a186cb4a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Dairy",
    isOrganic: true,
    isPopular: true
  },
  {
    id: 4,
    name: "Organic Carrots",
    description: "Crunchy carrots perfect for snacking and cooking",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Vegetables",
    isOrganic: true,
    isPopular: false
  },
  {
    id: 5,
    name: "Local Honey",
    description: "Pure, raw honey from local beekeepers",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Specialty",
    isOrganic: true,
    isPopular: true
  },
  {
    id: 6,
    name: "Fresh Bell Peppers",
    description: "Crisp, colorful bell peppers for salads and cooking",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1563565375-f0c3664d3242?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Vegetables",
    isOrganic: false,
    isPopular: false
  },
  {
    id: 7,
    name: "Artisan Cheese",
    description: "Handcrafted cheese made from local farm milk",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Dairy",
    isOrganic: false,
    isPopular: true
  },
  {
    id: 8,
    name: "Fresh Tomatoes",
    description: "Ripe, juicy tomatoes grown locally",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1546094324-7fd2718befe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Vegetables",
    isOrganic: false,
    isPopular: false
  }
];

const FeaturedProducts = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const addToCart = (productId: number) => {
    setCartItems(prev => [...prev, productId]);
    toast.success("Item added to cart!");
  };
  
  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
    
    if (!favorites.includes(productId)) {
      toast.success("Added to favorites!");
    } else {
      toast.success("Removed from favorites!");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our handpicked selection of the freshest seasonal produce from local farms.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button className="bg-bazaar-green hover:bg-bazaar-green-dark text-white">
              View All Products
            </Button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover-shadow-grow h-full flex flex-col">
              <div className="relative">
                {/* Product image */}
                <div className="overflow-hidden h-48 sm:h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Favorite button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart
                    className={`h-4 w-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}`}
                  />
                </Button>
                
                {/* Badges */}
                <div className="absolute bottom-2 left-2 flex gap-2">
                  {product.isOrganic && (
                    <Badge className="bg-bazaar-green text-white border-0 px-2 py-1">
                      Organic
                    </Badge>
                  )}
                  {product.isPopular && (
                    <Badge className="bg-bazaar-orange text-white border-0 px-2 py-1">
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-lg font-bold text-bazaar-green-dark">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    className="bg-bazaar-green hover:bg-bazaar-green-dark text-white shine"
                    size="sm"
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
