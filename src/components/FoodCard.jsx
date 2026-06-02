import "./FoodCard.css";
import { Heart, Play } from "lucide-react";

export function FoodCard({ title, category, banner, index, isFavorite, onFavorite, onPlay }) {
  return (
    <div
      className="kuchi-card"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <img src={banner} alt={title} className='card-img' />





      <button
        className={`favorite-btn ${isFavorite ? "active" : ''}`}
        onClick={onFavorite}
      >
        <Heart
          size={10}
          fill={isFavorite ? "#7c3aed" : "transparent"}
          stroke={isFavorite ? "#7c3aed" : "white"}
        />
      </button>

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