import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (scheme) => {
    const exists = favorites.find((item) => item.id === scheme.id);

    if (!exists) {
      setFavorites([...favorites, scheme]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;