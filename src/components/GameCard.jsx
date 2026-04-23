import "./GameCard.css";
import { Play } from "lucide-react";

export function GameCard({ id, title, category, banner, onAddToFavorites, isFavorite }) {
  return (
    <div className="vortex-card">
      <img src={banner} alt={title} className="card-img" />

      <div className="card-info">
        <h4>{title} </h4>
        <p>{category}</p>
        <button
          className="play-btn"
          onClick={() => onAddToFavorites({ id, title, category, banner })}
          style={{
            background: isFavorite ? "#f22929" : "#eaa647",
          }}
        >      
         
            <a>Comprar</a>
         

    
          
        </button>
      </div>
    </div>
  );
}
