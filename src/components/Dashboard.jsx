import { FoodCard } from "./FoodCard";

export function Dashboard({ filteredFood, onAddToFavorites, favorites }) {
  return (
    <div className="vortex-grid">
      {filteredFood.length > 0 ? (
        filteredFood.map((g) => (
          <FoodCard
            key={g.id}
            id={g.id}
            title={g.title}
            category={g.category}
            banner={g.banner}
            onAddToFavorites={onAddToFavorites}
            isFavorite={favorites.some((fav) => fav.id === g.id)}
          />
        ))
      ) : (
        <p style={{ color: "#94a3b8" }}>Nenhum Pedido Feito..</p>
      )}
    </div>
  );
}
