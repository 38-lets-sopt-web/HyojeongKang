import { useState } from "react";
import Header from "./components/Header/Header";
import GamePage from "./features/game/GamePage";
import RankingPage from "./features/ranking/RankingPage";

function App() {

  const [view, setView] = useState('game');

  return (
    <>
      <Header currentView={view} setView={setView} />
      <main>
        {view === 'game' ? <GamePage /> : <RankingPage />}
      </main>
    </>
  )
}

export default App
