import styled from '@emotion/styled';
import { theme } from '../../../../styles/theme';

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
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.primaryLight};
`;

// 성공/실패를 담는 그리드 컨테이너
export const GridWinLose = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

// 사이드 바 제목
export const CardLabel = styled.span`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  color: ${props => props.color || theme.colors.black};
`;

// 사이드 바 값
export const CardValue = styled.span`
  font-size: ${theme.fontSize.xxl};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.colors.black};
`;
