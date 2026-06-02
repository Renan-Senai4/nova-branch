import "./FoodModal.css";
import { X, Trophy, Users, Clock } from "lucide-react";

export function FoodModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <X />
                </button>

                <img src={product.banner} alt={product.title} className="modal-banner" />

                <div className="modal-body">
                    <span className="modal-category">{product.category}</span>
                    <h2>{product.title}</h2>
                    <p className="description">
                        O Melhor {product.title} da região, não tem comparação.
                    </p>

                    <div className="product-stats">
                        <div className="stat">
                            <Trophy size={18} /> <span>Horario: 7:00 até 20:00</span>
                        </div>
                    
                        <div className="stat">
                            <Clock size={18} /> <span>Estoque: disponivel</span>
                        </div>
                    </div>

                    <button className="start-product-btn"> Pedir</button>
                </div>
            </div>
        </div>
    )
}