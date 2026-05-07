/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as s from "./login.style";
import axios from 'axios';
import Button from '../../components/buttton/Button';
import Input from '../../components/input/Input';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin`, {
                loginId,
                password,
            });
            console.log('로그인 성공', response.data.data);
            localStorage.setItem('userId', response.data.data.userId);
            navigate('/mypage');
        } catch (error) {
            console.error('로그인 실패', error);
        }
    };

    return (
        <section css={s.containerStyle}>
            <h1 css={s.titleStyle}>SOPT MEMBERS</h1>
            <form css={s.formStyle} onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="아이디"
                    label="아이디"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)} />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    label="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" variant='primary'>로그인</Button>
                <Button type="button" variant="secondary" onClick={() => navigate('/signup')}>
                    회원가입 하러가기
                </Button>
            </form>
        </section>
    );
};

export default LoginPage;