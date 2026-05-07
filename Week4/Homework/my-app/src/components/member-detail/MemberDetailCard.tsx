/** @jsxImportSource @emotion/react */
import * as s from "./memberDetailCard.style";

interface MemberDetailCardProps {
    data: {
        loginId: string;
        name: string;
        email: string;
        age: number;
        part: string;
    };
}

const MemberDetailCard = ({ data }: MemberDetailCardProps) => {
    return (
        <article css={s.infoCardWrapper}>
            <section css={s.infoBoxStyle}>
                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>이름</span>
                    <span css={s.infoValueStyle}>{data.name}</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>아이디</span>
                    <span css={s.infoValueStyle}>{data.loginId}</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>이메일</span>
                    <span css={s.infoValueStyle}>{data.email}</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>나이</span>
                    <span css={s.infoValueStyle}>{data.age}</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>파트</span>
                    <span css={s.infoValueStyle}>{data.part}</span>
                </div>
            </section>
        </article>
    );
};

export default MemberDetailCard;