import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  display: flex;
  gap: 20px;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 20px;
  background-color: #f3fed3;
`;

export const Title = styled.h4`
  color: #000000;
  font-size: 1.3rem;
  margin: 0;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 4px 20px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  font-size: 0.8rem;
  cursor: pointer;

  /* 선택되지 않았을 때의 기본 스타일 */
  background-color: #f5ffd6;
  color: #4a6107;
  border: 1px solid #a4c639;

  /* isActive가 true(클릭됨)일 때 스타일 반전 */
  ${props => props.isActive && `
    background-color: #a4c639;
    color: white;
    font-size: 0.9rem;
    box-shadow: 0 0 5px #a4c639;
  `}

  &:hover {
    transform: translateY(-2px);
  }
`;