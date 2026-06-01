import styled from '@emotion/styled';
import { theme } from '../../../../styles/theme';

// 왼쪽 사이드바
export const Sidebar = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// 성공/실패를 담는 그리드 컨테이너
export const GridWinLose = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;


