import { GameCard } from "./GameCard";

export function Dashboard({ filteredGames, onAddToFavorites, favorites }) {
  return (
    <div className="vortex-grid">
      {filteredGames.length > 0 ? (
        filteredGames.map((g) => (
          <GameCard
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
