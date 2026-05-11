import styled from '@emotion/styled';
import { theme } from '../../../../styles/theme';

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