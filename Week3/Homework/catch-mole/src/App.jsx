import { useState } from "react";
import styled from '@emotion/styled';
import Header from "./components/Header/Header";
import GamePage from "./features/game/GamePage";
import RankingPage from "./features/ranking/RankingPage";

const PageWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {

  const [view, setView] = useState('game');

  return (
    <PageWrapper>
      <Header currentView={view} setView={setView} />
      <main>
        {view === 'game' ? <GamePage /> : <RankingPage />}
      </main>
    </PageWrapper>
  )
}

export default App
