import * as S from "./TabMenu.style";

const MENU_ITEMS = [
  { id: 'game', label: '게임' },
  { id: 'ranking', label: '랭킹' },
];

export default function TabMenu({ currentView, setView }) {
  return (
    <S.BtnGroup>
      {MENU_ITEMS.map((item) => (
        <S.StyledButton
          key={item.id}
          type="button"
          isActive={currentView === item.id}
          onClick={() => setView(item.id)}
        >
          {item.label}
        </S.StyledButton>
      ))}
    </S.BtnGroup>
  );
}