import styled from '@emotion/styled';

// 왼쪽 사이드바
export const Sidebar = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// 각 카드 섹션
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 2rem;
  border-radius: 1.25rem;
  background-color: #f3fed3;
`;

// 성공/실패를 담는 그리드 컨테이너
export const GridWinLose = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

// 사이드 바 제목
export const CardLabel = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.color || '#000000'};
`;

// 사이드 바 값
export const CardValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
`;
