import { useState } from "react";
import SearchBar from "../components/home/SearchBar";
import CategoryFilter from "../components/home/CategoryFilter";
import SchemeSection from "../components/home/SchemeSection";
import schemes from "../data/schemes";

const Schemes = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.title.toLowerCase().includes(search.toLowerCase()) ||
      scheme.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      scheme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-pink-50">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-700 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Explore Government Schemes
          </h1>

          <p className="mt-5 text-lg max-w-3xl mx-auto">
            Search and discover Government Schemes for Students,
            Farmers, Women, Senior Citizens, Businesses and many more.
          </p>

        </div>
      </div>

      {/* Search + Category */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 mb-10">

        <div className="bg-amber-100 rounded-3xl shadow-xl p-10">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

        </div>

      </div>

      {/* Schemes */}
      <SchemeSection schemes={filteredSchemes} />

    </div>
  );
};

export default Schemes;