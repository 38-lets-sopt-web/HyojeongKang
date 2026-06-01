import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const RankingSection = styled.section`
  min-height: 550px;
  gap: 20px;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: ${theme.borderRadius.lg};
  background-color: ${theme.colors.primaryLight};
`;

export const BoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 1rem 0rem 1rem 0rem;
`;

export const Title = styled.h4`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.bold};
  margin: 0;
  text-align: center;
`;

export const ResetBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.lg};
  border: none;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  color: ${theme.colors.white};
  background-color: ${theme.colors.danger};
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 0.3rem;
  background-color: ${theme.colors.rankingHeader};
  font-weight: ${theme.fontWeight.semibold};
  text-align: center;
`;

export const Td = styled.td`
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid ${theme.colors.border};
`;