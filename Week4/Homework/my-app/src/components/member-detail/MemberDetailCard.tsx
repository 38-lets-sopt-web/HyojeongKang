/** @jsxImportSource @emotion/react */
import * as s from "./memberDetailCard.style";

const MemberDetailCard = () => {
    return (
        <article css={s.infoCardWrapper}>
            <section css={s.infoBoxStyle}>
                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>이름</span>
                    <span css={s.infoValueStyle}>갱갱갱</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>아이디</span>
                    <span css={s.infoValueStyle}>유저아이디</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>이메일</span>
                    <span css={s.infoValueStyle}>이메일@이메일</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>나이</span>
                    <span css={s.infoValueStyle}>22</span>
                </div>

                <div css={s.infoRowStyle}>
                    <span css={s.infoLabelStyle}>파트</span>
                    <span css={s.infoValueStyle}>웹</span>
                </div>
            </section>
        </article>
    );
};

export default MemberDetailCard;