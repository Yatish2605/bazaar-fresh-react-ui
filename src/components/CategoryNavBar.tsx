
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "CROPS", path: "/category/crops" },
  { name: "VEGETABLE", path: "/category/vegetable" },
  { name: "FRUITS", path: "/category/fruits" },
  { name: "NURSERY & PLANTS", path: "/category/nursery" },
  { name: "ORGANIC", path: "/category/organic" },
  { name: "SPICES", path: "/category/spices" },
  { name: "DRY FRUITS", path: "/category/dry-fruits" },
  { name: "SEEDS", path: "/category/seeds" },
  { name: "ANIMALS", path: "/category/animals" },
  { name: "ALL", path: "/products" }
];

const CategoryNavBar = () => {
  const [activeCategory, setActiveCategory] = useState("FRUITS");

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto overflow-x-auto">
        <div className="flex space-x-8 py-2 px-4 min-w-max">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className={`whitespace-nowrap font-medium px-2 py-2 transition-colors ${
                activeCategory === category.name
                  ? "text-bazaar-green border-b-2 border-bazaar-green"
                  : "text-gray-700 hover:text-bazaar-green"
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavBar;
