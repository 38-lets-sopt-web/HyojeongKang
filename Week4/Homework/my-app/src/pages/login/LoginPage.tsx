/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import * as s from "./login.style";
import Button from '../../components/buttton/Button';
import Input from '../../components/input/Input';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <section css={s.containerStyle}>
            <h1 css={s.titleStyle}>SOPT MEMBERS</h1>
            <form css={s.formStyle}>
                <Input type="text" placeholder="아이디" label="아이디" />
                <Input type="password" placeholder="비밀번호" label="비밀번호" />
                <Button type="submit" variant='primary'>로그인</Button>
                <Button type="button" variant="secondary" onClick={() => navigate('/signup')}>
                    회원가입 하러가기
                </Button>
            </form>
        </section>
    );
};

export default LoginPage;