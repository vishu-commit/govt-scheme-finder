import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {

  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">
        Favorite Schemes
      </h1>

      {favorites.length === 0 ? (
        <h2 className="text-xl text-slate-500">
          No Favorite Schemes
        </h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {favorites.map((scheme) => (

            <div
              key={scheme.id}
              className="bg-white rounded-xl shadow-md p-6"
            >

              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm">
                {scheme.category}
              </span>

              <h2 className="text-2xl font-bold mt-4">
                {scheme.title}
              </h2>

              <p className="mt-3 text-slate-600">
                {scheme.description}
              </p>

              <button
                onClick={() => removeFavorite(scheme.id)}
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg"
              >
                Remove
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default Favorites;