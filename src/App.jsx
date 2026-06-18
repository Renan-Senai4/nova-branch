import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/header";
import { kuchiData } from "./data/games.js";
import { FoodCard } from "./components/FoodCard.jsx";
import { FoodModal } from "./components/FoodModal.jsx";
import Slider from "./components/Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { SwiperSlide } from "swiper/react";
import "./App.css";
import { Profile } from "./components/Profile";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("dash");
  const [favorites, setFavorites] = useState([]);

  const [selectedFood, setSelectedFood] = useState(null);

  const [user, setUser] = useState({
    name: "Re",
  });

  // itens favoritos (objetos) resolvidos a partir dos ids do state
  const favoriteItems = favorites
    .map((id) => kuchiData.find((p) => String(p.id) === String(id)))
    .filter(Boolean);

  const filteredFood = kuchiData
    .filter(
      (product) =>
        activeTab === "dash" ||
        favorites.map(String).includes(String(product.id)),
    )
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );

  const toggleFavorite = (id) => {
    const food = kuchiData.find((g) => String(g.id) === String(id));
    const foodTitle = food ? food.title : "Comida";
    const isFavorite = favorites.map(String).includes(String(id));

    if (isFavorite) {
      toast.info(`${foodTitle} Removido do carrinho`, { theme: "dark" });
      setFavorites((prev) =>
        prev.filter((favId) => String(favId) !== String(id)),
      );
    } else {
      toast.success(`${foodTitle} Adicionado ao carrinho`, { theme: "dark" });
      setFavorites((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

    const SliderSettings = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
    navigation: true,
  };


  return (
    <div className="kuchi-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="kuchi-main">
        <Header search={search} setSearch={setSearch} user={user} />

        {activeTab === "profile" && <Profile user={user} setUser={setUser} />}

        {activeTab === "dash" && (
          <div className="container-slider">
            <Slider settings={SliderSettings}>
              {kuchiData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="slide-content">
                    <img src={slide.banner} alt={slide.title} />
                    <div
                      className="slide-overlay"
                      style={{ borderBottom: `8px solid ${slide.color}` }}
                    >
                      <span>{slide.title}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        )}

        <div className="kuchi-content">
          <h2 className="section-title">
            {activeTab === "dash" && "Dashboard"}
            {activeTab === "favorites" && "Carrinho"}
            {/* {activeTab === "profile" && "Perfil"} */}
          </h2>

          {/* <p>{search ? `Resultados para: ${search}` : "Cardapio"}</p> */}

          <div className="kuchi-grid">
            {activeTab === "favorites" ? (
              favoriteItems.length > 0 ? (
                favoriteItems.map((g, index) => (
                  <FoodCard
                    key={g.id}
                    title={g.title}
                    category={g.category}
                    banner={g.banner}
                    index={index}
                    isFavorite={true}
                    onFavorite={() => toggleFavorite(g.id)}
                    onPlay={() => setSelectedFood(g)}
                     showFavorite={true}  
                  />
                ))
              ) : (
                <p
                  style={{
                    color: "#94a3b8",
                    gridColumn: "1/-1",
                    textAlign: "center",
                    marginTop: "40px",
                  }}
                >
                  você ainda não adicionou nenhum pedido a seu carrinho.
                </p>
              )
            ) : filteredFood.length > 0 ? (
              filteredFood.map((product, index) => (
                <FoodCard
                  key={product.id}
                  title={product.title}
                  category={product.category}
                  banner={product.banner}
                  index={index}
                  isFavorite={favorites
                    .map(String)
                    .includes(String(product.id))}
                  onFavorite={() => toggleFavorite(product.id)}
                  onPlay={() => setSelectedFood(product)}
                  showFavorite={false}  
                />
              ))
            ) : (
              <p
                style={{
                  color: "#94a3b8",
                  gridColumn: "1/-1",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
             
              </p>
            )}
          </div>
        </div>
      </main>

      <FoodModal
  product={selectedFood}
  onClose={() => setSelectedFood(null)}
  onAddFavorite={(fav) => toggleFavorite(fav.id ?? fav)}
/>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default App;
