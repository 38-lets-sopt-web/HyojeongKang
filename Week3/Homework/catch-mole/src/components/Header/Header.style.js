import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  gap: 1.25rem;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: ${theme.borderRadius.xl};
  background-color: ${theme.colors.primaryLight};
`;

export const Title = styled.h1`
  color: ${theme.colors.black};
  font-size: ${theme.fontSize.lg};
  margin: 0;
`;
