import * as S from "./StatusCard.style";

export default function StatusCard({ label, value, color }) {
    return (
        <S.Card>
            <S.CardLabel color={color}>{label}</S.CardLabel>
            <S.CardValue>{value}</S.CardValue>
        </S.Card>
    );
}