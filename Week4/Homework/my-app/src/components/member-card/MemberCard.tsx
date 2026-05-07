/** @jsxImportSource @emotion/react */
import * as s from "./memberCard";

interface MemberCardProps {
    name: string;
    part: string;
}

const MemberCard = ({ name, part }: MemberCardProps) => {
    return (
        <article css={s.cardStyle}>
            <p css={s.nameStyle}>{name}</p>
            <div css={s.partBadgeStyle}>{part}</div>
        </article>
    );
};

export default MemberCard;