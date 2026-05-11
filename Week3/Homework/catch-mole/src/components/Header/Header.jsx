import * as S from "./Header.style";
import TabMenu from "./TabMenu";

export default function Header({ currentView, setView }) {
  return (
    <S.HeaderContainer>
      <S.Title>두더지 게임</S.Title>
      <TabMenu currentView={currentView} setView={setView} />
    </S.HeaderContainer>
  )
}