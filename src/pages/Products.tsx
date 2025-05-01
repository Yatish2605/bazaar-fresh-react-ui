
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AddProductForm from "@/components/AddProductForm";
import { useToast } from "@/hooks/use-toast";
import CategoryNavBar from "../components/CategoryNavBar";

const Products = () => {
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const { toast } = useToast();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-20">
        <CategoryNavBar />
      </div>
      <main className="flex-grow pt-4 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold font-poppins text-bazaar-green">Products</h1>
            <Button 
              onClick={() => setShowAddProductForm(true)}
              className="bg-bazaar-orange hover:bg-bazaar-orange/90 text-white"
            >
              Add Product as Seller
            </Button>
          </div>
          
          <ProductList />

          {showAddProductForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-bazaar-green">Add New Product</h2>
                <AddProductForm 
                  onClose={() => setShowAddProductForm(false)}
                  onSuccess={() => {
                    setShowAddProductForm(false);
                    toast({
                      title: "Product added",
                      description: "Your product has been successfully added",
                    });
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
