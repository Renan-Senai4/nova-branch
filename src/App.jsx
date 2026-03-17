import { Sidebar } from './components/Sidebar.jsx'
import { Header } from "./components/Header.jsx";
import { gameData } from '../src/data/games.js';
import './App.css'
import { GameCard } from './components/GameCard';

function App() {


  return (
    <div className="supernova-app">
      <Sidebar />

      <main className="supernova-main">
        <Header />
        <div className='supernova-content'>
          <h2 className='section-title'> jogos recentes</h2>
          <div className='supernova-grid'>
            {gameData.map((g) => (
              <GameCard
                key={g.id}
                title={g.title}
                category={g.category}
                banner={g.banner}
              />
            ))}



          </div>
        </div>
      </main>
    </div>
  )
}

export default App
