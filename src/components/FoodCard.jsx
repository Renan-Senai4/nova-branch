import "./FoodModal.css";
import { Play, X } from "lucide-react";

export function FoodCard({
  title,
  category,
  banner,
  index,
  isFavorite,
  onFavorite,
  onPlay,
  showFavorite = true, // padrão: mostrar
}) {
  return (
    <div className="kuchi-card" data-aos="fade-up" data-aos-delay={index * 100}>
      <img src={banner} alt={title} className="card-img" />

      {showFavorite && (
        <button
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={onFavorite}
        >
          <X size={10} />
        </button>
      )}

      <div className="card-info">
        <h4>{title}</h4>
        <p>{category}</p>

        <button className="play-btn" onClick={onPlay}>
          <Play size={14} fill="white" /> MAIS
        </button>
      </div>
    </div>
  );
}
