
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import CategoryNavBar from "../components/CategoryNavBar";

const CategoryProducts = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    if (categoryName) {
      // Format the category name for display (capitalize first letter)
      const formattedName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
      setTitle(formattedName);
      // In a real app, we would fetch products by category here
    }
  }, [categoryName]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-20">
        <CategoryNavBar />
      </div>
      <main className="flex-grow pt-4 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold font-poppins text-bazaar-green">
              {title || "All Products"}
            </h1>
            <p className="text-gray-600 mt-2">
              Browse our selection of fresh {categoryName} from local farmers
            </p>
          </div>
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryProducts;
