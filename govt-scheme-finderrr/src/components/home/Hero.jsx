import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-700 to-green-500 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Government Scheme Finder
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-8">
          Find the latest government schemes for Students, Farmers,
          Women, Senior Citizens, Businesses and many more.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <Link
            to="/schemes"
            className="bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center gap-2"
          >
            Explore Schemes
            <FaArrowRight />
          </Link>

          <Link
            to="/about"
            className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-emerald-700 transition duration-300"
          >
            Learn More
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Hero;