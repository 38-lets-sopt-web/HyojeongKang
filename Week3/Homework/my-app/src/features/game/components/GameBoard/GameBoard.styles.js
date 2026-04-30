import styled from '@emotion/styled';

// 오른쪽 게임 영역
export const GameContent = styled.section`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #f3fed3;
  border-radius: 1.25rem;
`;

// 두더지 판 배경
export const MoleWrapper = styled.div`
  flex: 1;                  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

// 컨트롤 버튼 바
export const ControlBar = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  margin: 1rem 1rem 0 1rem;
`;

// 버튼 공통 스타일
const BaseButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: white;
`;

// 시작 버튼
export const StartButton = styled(BaseButton)`
  background-color: #3bcd2e;
`;

// 중단 버튼
export const StopButton = styled(BaseButton)`
  background-color: #ef4444;
`;

// 두더지 그리드 배경
export const MoleGridBox = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 15px 60px;      
`;

// 2x2 두더지 판
export const MoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  width: 400px;
  height: 400px;
`;

// 두더지 한 칸 (빈 칸도 자리 유지)
export const MoleCell = styled.div`
  background-color: #cde383;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 두더지 이미지
export const MoleImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;