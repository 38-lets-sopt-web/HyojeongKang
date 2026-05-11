import styled from '@emotion/styled';
import { theme } from '../../../../styles/theme';

// 오른쪽 게임 영역
export const GameContent = styled.section`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${theme.colors.primaryLight};
  border-radius: ${theme.borderRadius.lg};
`;

// 두더지 판 배경
export const MoleWrapper = styled.div`
  flex: 1;                  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

// 컨트롤 버튼 바
export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 1rem 1rem 0 1rem;
`;

export const SelectLv = styled.select`
  padding: 0 0.8rem;
  border-radius: ${theme.borderRadius.sm};
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// 버튼 공통 스타일
const BaseButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${theme.borderRadius.lg};
  border: none;
  font-weight: ${theme.fontWeight.bold};
  cursor: pointer;
  color: white;

  // 비활성화(disabled) 상태일 때의 스타일
  &:disabled {
    background-color: ${theme.colors.gray}; 
    cursor: not-allowed;                   
  }
`;

// 시작 버튼
export const StartButton = styled(BaseButton)`
  background-color: ${theme.colors.success};
`;

// 중단 버튼
export const StopButton = styled(BaseButton)`
  background-color: ${theme.colors.danger};
`;

// 두더지 그리드 배경
export const MoleGridBox = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.md};
  padding: 15px 60px;      
`;

// 두더지 판
export const MoleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
  gap: 15px;
  width: 400px;
  height: 400px;
`;

// 두더지 한 칸 (빈 칸도 자리 유지)
export const MoleCell = styled.button`
  padding: 0;
  background-color: ${theme.colors.primaryMole};
  border: none;
  border-radius: ${theme.borderRadius.full};
  aspect-ratio: 1 / 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 두더지 이미지
export const MoleImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: ${theme.borderRadius.full};
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