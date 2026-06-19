import { Link } from "react-router-dom";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

const SchemeCard = ({ scheme }) => {
  const { addFavorite } = useContext(FavoritesContext);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Category Badge */}
      <span className="inline-block w-fit bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
        {scheme.category}
      </span>

      {/* Scheme Title */}
      <h2 className="text-2xl font-bold text-slate-800 mt-4">
        {scheme.title}
      </h2>

      {/* Description */}
      <p className="text-slate-600 mt-3 leading-7">
        {scheme.description}
      </p>

      {/* Eligibility */}
      <div className="mt-5 space-y-2">
        <p>
          <span className="font-semibold text-slate-800">
            Eligibility:
          </span>{" "}
          {scheme.eligibility}
        </p>

        <p>
          <span className="font-semibold text-slate-800">
            Benefit:
          </span>{" "}
          {scheme.benefit}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 space-y-3">
        <button
          onClick={() => addFavorite(scheme)}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300"
        >
          <FaHeart />
          Add to Favorites
        </button>

        <Link
          to={`/scheme/${scheme.id}`}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300"
        >
          View Details
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SchemeCard;