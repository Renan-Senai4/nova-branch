import "./Profile.css";
import { User, Mail, Trophy, Clock, Hourglass, Paperclip } from "lucide-react";

export function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <User size={64} />
        </div>
        <div className="profile-info">
          <h3>User</h3>
          <p className="status">Status: Online</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <Hourglass size={20} color="#ffe4a1" />
          <div>
            <p className="stat-label">Idade</p>
            <p className="stat-value">24</p>
          </div>
        </div>
        <div className="stat-card">
          <Paperclip size={20} color="#fbf1bd" />
          <div>
            <p className="stat-label">Pontos</p>
            <p className="stat-value">67,12</p>
          </div>
        </div>
      </div>

      <div className="profile-details">
        <h4>Informações Pessoais</h4>
        <div className="detail-item">
          <Mail size={18} />
          <div>
            <p className="label">Email</p>
            <p>User@gmail.com</p>
          </div>
        </div>
        <div className="detail-item">
          <User size={18} />
          <div>
            <p className="label">Nome de Usuário</p>
            <p>UserReal</p>
          </div>
        </div>
      </div>
    </div>
  );
}
