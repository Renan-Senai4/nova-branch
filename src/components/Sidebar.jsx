import "./Sidebar.css";
import { LayoutDashboard, Gamepad2, User, Search } from "lucide-react";

export function Sidebar({ activeTab, setActiveTab, search, setSearch }) {
  return (
    <aside className="vortex-sidebar">
      <h2 className="logo"> Kuchi</h2>

      <div className="search-bar">
        <Search size={18} color="#94a3b8" />
        <input
          type="text"
          placeholder="Escolher Pedido..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <nav>
        <div
          className={`nav-item ${activeTab === "dash" ? "active" : ""}`}
          onClick={() => setActiveTab("dash")}
        >
          <LayoutDashboard size={20} />
          Menu
        </div>

        <div
          className={`nav-item ${activeTab === "favorites" ? "active" : ""}`}
          onClick={() => setActiveTab("favorites")}
        >
          <Gamepad2 size={20} />
          Meus Pedidos
        </div>

        <div
          className={`nav-item ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <User size={20} />
          Perfil
        </div>
      </nav>
    </aside>
  );
}
