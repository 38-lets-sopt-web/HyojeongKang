// 게임 페이지 스타일
import styled from '@emotion/styled';

// 전체 레이아웃
export const GameLayout = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  padding: 20px;
`;

// 모달 제목
export const ModalTitle = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

// 모달 점수
export const ModalScore = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #11c900;
  margin: 0;
`;

// 모달 안내 메세지
export const ModalResetMessage = styled.p`
  font-size: 0.8rem;
  color: #aaaaaa;
  font-weight: 300;
`;