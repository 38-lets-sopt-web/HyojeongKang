import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from "./Modal.style";

export default function Modal({ isOpen, onClose, children }) {
    // 1. 스크롤 방지 로직 (useEffect)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // 컴포넌트가 언마운트될 때(사라질 때)를 대비한 정리
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Portal 대상을 modal-root로 변경
    const modalRoot = document.getElementById('modal-root');
    
    return createPortal(
        <S.Overlay onClick={onClose}>
            <S.ModalBox onClick={(e) => e.stopPropagation()}>
                {children}
            </S.ModalBox>
        </S.Overlay>,
        modalRoot || document.body     // 만약 modal-root를 못 찾을 경우를 대비해 안전하게 body로 사용하도록
    );
}