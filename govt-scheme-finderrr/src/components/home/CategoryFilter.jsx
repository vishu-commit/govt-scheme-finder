const categories = [
  "All",
  "Students",
  "Farmers",
  "Women",
  "Business",
  "Senior Citizens",
  "Health",
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Browse by Category
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setSelectedCategory(item)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === item
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "bg-yellow-50 text-gray-800 hover:bg-emerald-500 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CategoryFilter;