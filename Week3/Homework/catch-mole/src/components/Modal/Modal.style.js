
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${theme.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${theme.zIndex.modal};
`;

export const ModalBox = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
  min-width: 300px;
`;