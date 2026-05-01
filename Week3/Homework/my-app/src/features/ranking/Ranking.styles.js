import styled from '@emotion/styled';

export const RankingSection = styled.section`
  min-height: 550px;
  gap: 20px;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 20px;
  background-color: #f3fed3;
`;

export const BoardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 1rem 0rem 1rem 0rem;
`;

export const Title = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;

export const ResetBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1.25rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: white;
  background-color: #ef4444;
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 0.3rem;
  background-color: #d6e6a8;
  font-weight: 600;
  text-align: center;
`;

export const Td = styled.td`
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;