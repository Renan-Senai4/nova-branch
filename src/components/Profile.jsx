import "./Profile.css";
import {
  User,
  Mail,
  Trophy,
  Clock,
  Hourglass,
  Paperclip,
  Divide,
  Camera,
  Save,
} from "lucide-react";
import { toast } from "react-toastify";

export function Profile({ user, setUser }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    //salva instantaneamente e dispara o Toast
    toast.success("Perfil atualizado com sucesso! ", {
      position: "top-right",
      theme: "dark",
    });
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src={`https://unavatar.io/github/${user.name}`} alt="Avatar" />
          <button className="edit-avatar">
            <Camera size={16} />
          </button>
        </div>
        <h2>Configurações de Conta</h2>
      </div>

      <div className="profile-form">
        <div className="input-group">
          <label>Nickname</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="inout-group">
          <label>Idade</label>
          <input
            type="number"
            name="level"
            value={user.level}
            onChange={handleChange}
          />
        </div>

        <button className="save-btn" onclick={handleSave}>
          <Save size={18} /> Salvar Alterações
        </button>
      </div>
    </div>
  );
}
