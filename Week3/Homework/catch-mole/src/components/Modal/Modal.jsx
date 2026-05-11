import { createPortal } from 'react-dom';
import * as S from "./Modal.style";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return createPortal(
        <S.Overlay onClick={onClose}>
            <S.ModalBox onClick={(e) => e.stopPropagation()}>
                {children}
            </S.ModalBox>
        </S.Overlay>,
        document.body
    );
}