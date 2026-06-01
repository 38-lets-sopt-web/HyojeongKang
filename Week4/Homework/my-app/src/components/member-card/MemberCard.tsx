/** @jsxImportSource @emotion/react */
import * as s from "./memberCard";

interface MemberCardProps {
    name: string;
    part: string;
    onClick: () => void;
}

const MemberCard = ({ name, part, onClick }: MemberCardProps) => {
    return (
        <article css={s.cardStyle} onClick={onClick}>
            <p css={s.nameStyle}>{name}</p>
            <div css={s.partBadgeStyle}>{part}</div>
        </article>
    );
};

export default MemberCard;