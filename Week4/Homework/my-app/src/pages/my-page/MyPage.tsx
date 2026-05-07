/** @jsxImportSource @emotion/react */
import * as s from "./mypage.style";
import Button from "../../components/buttton/Button";
import Input from "../../components/input/Input";
import Header from "../../components/header/Header";

const Mypage = () => {

    return (
        <>
            <Header />
            <section css={s.containerStyle}>
                <h2>내 정보</h2>
                <div css={s.contentWrapperStyle}>
                    <article css={s.infoBoxStyle}>
                        <div css={s.infoRowStyle}>
                            <span css={s.infoLabelStyle}>아이디</span>
                            <span css={s.infoValueStyle}>user</span>
                        </div>
                        <div css={s.infoRowStyle}>
                            <span css={s.infoLabelStyle}>파트</span>
                            <span css={s.infoValueStyle}>웹</span>
                        </div>
                    </article>

                    <Input type="text" placeholder="이름을 입력해주세요" label="이름" />
                    <Input type="text" placeholder="이메일을 입력해주세요" label="이메일" />
                    <Input type="number" placeholder="나이를 입력해주세요" label="나이" />
                    <Button type="submit" variant='primary'>정보 수정</Button>
                </div>
            </section>
        </>
    );
};

export default Mypage;