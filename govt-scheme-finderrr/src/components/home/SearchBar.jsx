import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-6">

        <div className="flex items-center bg-yellow-50 border border-yellow-300 rounded-xl shadow-md overflow-hidden">

          <div className="px-5 text-slate-500">
            <FaSearch />
          </div>

          <input
            type="text"
            placeholder="Search government schemes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-4 px-2 bg-yellow-50 outline-none placeholder:text-gray-500"
          />

        </div>

      </div>
    </section>
  );
};

export default SearchBar;