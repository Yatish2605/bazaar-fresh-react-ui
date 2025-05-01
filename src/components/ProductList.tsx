
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Fresh Organic Tomatoes",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "Locally grown organic tomatoes perfect for salads and cooking.",
    seller: "Green Valley Farms"
  },
  {
    id: 2,
    name: "Fresh Apples",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "Sweet and juicy apples, freshly harvested from local orchards.",
    seller: "Sunny Orchard"
  },
  {
    id: 3,
    name: "Organic Carrots",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "Crunchy and sweet organic carrots, perfect for snacking or cooking.",
    seller: "Healthy Harvest"
  },
  {
    id: 4,
    name: "Fresh Spinach",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "Nutrient-rich spinach leaves, freshly harvested for maximum flavor.",
    seller: "Green Fields Farm"
  },
  {
    id: 5,
    name: "Organic Potatoes",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "Versatile potatoes grown without pesticides, perfect for any dish.",
    seller: "Organic Valley"
  },
  {
    id: 6,
    name: "Fresh Strawberries",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1587394910940-819fd39b8637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    description: "Sweet, juicy strawberries freshly picked at peak ripeness.",
    seller: "Berry Good Farm"
  }
];

const ProductList = () => {
  const [products] = useState(mockProducts);
  const { toast } = useToast();

  const handleAddToCart = (productId: number) => {
    toast({
      title: "Added to cart",
      description: "Product has been added to your cart",
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover-shadow-grow"
        >
          <Link to={`/product/${product.id}`} className="block">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-semibold text-gray-800 hover:text-bazaar-green transition-colors">
                {product.name}
              </h3>
            </Link>
            <p className="text-sm text-gray-500 mb-2">Seller: {product.seller}</p>
            <p className="text-bazaar-green font-bold mb-4">${product.price.toFixed(2)}</p>
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                className="border-bazaar-green text-bazaar-green hover:bg-bazaar-green hover:text-white"
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </Button>
              <Link to={`/product/${product.id}`}>
                <Button 
                  variant="secondary"
                  className="bg-bazaar-orange text-white hover:bg-bazaar-orange/90"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
