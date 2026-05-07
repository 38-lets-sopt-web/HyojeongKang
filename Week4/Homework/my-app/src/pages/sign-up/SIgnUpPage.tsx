/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import * as s from "./signup.style";
import Button from '../../components/buttton/Button';
import Input from '../../components/input/Input';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <section css={s.containerStyle}>
            <h1 css={s.titleStyle}>회원가입</h1>
            <form css={s.formStyle}>
                <Input type="text" placeholder="사용할 아이디를 입력해주세요" label="아이디" />
                <Input type="password" placeholder="비밀번호를 입력해주세요" label="비밀번호" />
                <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" label="비밀번호 확인" />
                <Input type="text" placeholder="이름을 입력해주세요" label="이름" />
                <Input type="text" placeholder="이메일을 입력해주세요" label="이메일" />
                <Input type="number" placeholder="나이를 입력해주세요" label="나이" />
                <Input type="text" placeholder="파트명을 입력해주세요" label="파트" />
                <Button type="submit" variant='primary'>회원가입</Button>
                <p css={s.loginTextStyle}>
                    이미 계정이 있나요?
                    <span css={s.loginLinkStyle} onClick={() => navigate('/login')}>
                        로그인으로 이동하기
                    </span>
                </p>
            </form>
        </section>
    );
};

export default LoginPage;