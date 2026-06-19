import {
  FaFileAlt,
  FaUsers,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

const Stats = () => {
  return (
    <section className="py-16 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <FaFileAlt className="text-5xl text-emerald-600 mx-auto mb-4" />

            <h2 className="text-4xl font-bold text-slate-800">
              8+
            </h2>

            <p className="text-slate-600 mt-2">
              Government Schemes
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />

            <h2 className="text-4xl font-bold text-slate-800">
              6
            </h2>

            <p className="text-slate-600 mt-2">
              Categories
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <FaHeart className="text-5xl text-pink-500 mx-auto mb-4" />

            <h2 className="text-4xl font-bold text-slate-800">
              ❤️
            </h2>

            <p className="text-slate-600 mt-2">
              Favorites Support
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <FaSearch className="text-5xl text-yellow-500 mx-auto mb-4" />

            <h2 className="text-4xl font-bold text-slate-800">
              Fast
            </h2>

            <p className="text-slate-600 mt-2">
              Smart Search
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Stats;