import { GameCard } from "./GameCard";

export function Favorites({ favorites }) {
  return (
    <div className="vortex-grid">
      {favorites.length > 0 ? (
        favorites.map((g) => (
          <GameCard
            key={g.id}
            id={g.id}
            title={g.title}
            category={g.category}
            banner={g.banner}
            isFavorite={true}
          />
        ))
      ) : (
        <p style={{ color: "#94a3b8" }}>Nenhum pedido..</p>
      )}
    </div>
  );
}
