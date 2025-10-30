import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

function Categories() {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-7 gap-80">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer p-5 rounded-lg flex flex-col justify-center items-center bg-gray-100 shadow-md border border-gray-300 w-70 h-50"
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-105 transition w-50 h-40"
            />
            <p className="text-1xl font-medium">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
