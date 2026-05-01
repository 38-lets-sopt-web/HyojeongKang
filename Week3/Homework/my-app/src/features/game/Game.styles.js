// 게임 페이지 스타일
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

// 전체 레이아웃
export const GameLayout = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  padding: 20px;
`;

// 모달 제목
export const ModalTitle = styled.p`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
`;

// 모달 점수
export const ModalScore = styled.h3`
  font-size: ${theme.fontSize.xxl};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.info};
  margin: 0;
`;

// 모달 안내 메세지
export const ModalResetMessage = styled.p`
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.gray};
  font-weight: ${theme.fontWeight.light};
`;