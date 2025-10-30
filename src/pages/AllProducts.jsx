import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

function AllProducts() {
  const { products, searchQuery } = useAppContext();
  const [filterProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (!products) return; // Prevent errors if products isn't available yet
    setFilteredProducts(
      searchQuery.length > 0
        ? products.filter((products) =>
            products.name?.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : products
    );
  }, [products, searchQuery]);

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">App products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filterProducts &&
          filterProducts
            .filter((products) => products.inStock)
            .slice(0, 9)
            .map((products, index) => {
              console.log("Rendering product:", products);
              return <ProductCard key={index} products={products} />;
            })}
      </div>
    </div>
  );
}

export default AllProducts;
