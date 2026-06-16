import "./FoodCard.css";
import { Clock, X } from "lucide-react";

export function FoodModal({ product, onClose, onAddFavorite }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X />
        </button>

        <img
          src={product.banner}
          alt={product.title}
          className="modal-banner"
        />

        <div className="modal-body">
          <span className="modal-category">{product.category}</span>
          <h2>{product.title}</h2>
          <p className="description">
            O Melhor {product.title} da região, não tem comparação.
          </p>

          <div className="product-stats">
            <div className="stat">
              <Clock size={18} /> <span>Horario: 7:00 até 20:00</span>
            </div>

            <div className="stat">
              <span>Estoque: disponivel</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
            <button
              className="start-product-btn"
              onClick={() => {
                if (onAddFavorite) {
                  const fav = {
                    id: product.id ?? Date.now(),
                    title: product.title,
                    url: product.url ?? window.location.href,
                    banner: product.banner,
                    category: product.category,
                  };
                  onAddFavorite(fav);
                }
                onClose();
              }}
            >
              Pedir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
