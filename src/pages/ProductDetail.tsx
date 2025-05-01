import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Mock products data (same as in ProductList)
const mockProducts = [
  {
    id: 1,
    name: "Fresh Organic Tomatoes",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Locally grown organic tomatoes perfect for salads and cooking. These tomatoes are grown without pesticides and harvested at peak ripeness for maximum flavor.",
    seller: "Green Valley Farms",
    quantity: 100,
    category: "Vegetables"
  },
  {
    id: 2,
    name: "Fresh Apples",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Sweet and juicy apples, freshly harvested from local orchards.",
    seller: "Sunny Orchard",
    quantity: 150,
    category: "Fruits"
  },
  {
    id: 3,
    name: "Organic Carrots",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Crunchy and sweet organic carrots, perfect for snacking or cooking.",
    seller: "Healthy Harvest",
    quantity: 80,
    category: "Vegetables"
  },
  {
    id: 4,
    name: "Fresh Spinach",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Nutrient-rich spinach leaves, freshly harvested for maximum flavor.",
    seller: "Green Fields Farm",
    quantity: 120,
    category: "Vegetables"
  },
  {
    id: 5,
    name: "Organic Potatoes",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Versatile potatoes grown without pesticides, perfect for any dish.",
    seller: "Organic Valley",
    quantity: 90,
    category: "Vegetables"
  },
  {
    id: 6,
    name: "Fresh Strawberries",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1587394910940-819fd39b8637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    description: "Sweet, juicy strawberries freshly picked at peak ripeness.",
    seller: "Berry Good Farm",
    quantity: 200,
    category: "Fruits"
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = mockProducts.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} added to your cart`,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <p>Product not found</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold font-poppins text-gray-800 mb-2">{product.name}</h1>
              <p className="text-bazaar-green text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-600 mb-2">Seller: <span className="font-medium">{product.seller}</span></p>
              <p className="text-sm text-gray-600 mb-4">Category: <span className="font-medium">{product.category}</span></p>
              
              <div className="bg-gray-100 p-4 rounded-md mb-6">
                <h3 className="font-semibold mb-2">Description:</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-l-md"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-y border-gray-200 py-1"
                    min="1"
                  />
                  <button
                    className="bg-gray-200 px-3 py-1 rounded-r-md"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  className="bg-bazaar-green hover:bg-bazaar-green/90 text-white px-8 py-2"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="secondary"
                  className="bg-bazaar-orange hover:bg-bazaar-orange/90 text-white px-8 py-2"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
