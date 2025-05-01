
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

interface AddProductFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

const AddProductForm = ({ onClose, onSuccess }: AddProductFormProps) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Vegetables");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log({
      productName,
      price: parseFloat(price),
      description,
      category,
      quantity: parseInt(quantity),
      image
    });
    
    // Call onSuccess callback
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="absolute top-4 right-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose}
          type="button"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
          Product Name
        </label>
        <Input
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          placeholder="Enter product name"
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
          Price ($)
        </label>
        <Input
          id="price"
          type="number"
          step="0.01"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          placeholder="Enter price"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          required
        >
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Grains">Grains</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
          Quantity Available
        </label>
        <Input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          placeholder="Enter available quantity"
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <Input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter image URL"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Enter product description"
          rows={4}
        />
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full bg-bazaar-green hover:bg-bazaar-green/90 text-white"
        >
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
