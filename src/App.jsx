import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { Favorites } from "./components/Favorites";
import { Profile } from "./components/Profile";
import { kuchiData } from "./data/games.js";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("dash");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const filteredGames = kuchiData.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase()),
  );

  const addToFavorites = (game) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === game.id);
      if (exists) {
        return prev.filter((fav) => fav.id !== game.id);
      }
      return [...prev, game];
    });
  };

  return (
    <div className="vortex-app">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        search={search}
        setSearch={setSearch}
      />

      <main className="vortex-main">
        <div className="vortex-content">
          <h2 className="section-title">
            {activeTab === "dash" && "Refeições"}
            {activeTab === "favorites" && "Pedidos"}
            {activeTab === "profile" && "Perfil"}
          </h2>

          {activeTab === "dash" && (
            <Dashboard filteredGames={filteredGames} onAddToFavorites={addToFavorites} favorites={favorites} />
          )}
          {activeTab === "favorites" && (
            <Favorites favorites={favorites} />
          )}
          {activeTab === "profile" && <Profile />}
        </div>
      </main>
    </div>
  );
}

export default App;
