/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import * as s from "./signup.style";
import Button from '../../components/buttton/Button';
import Input from '../../components/input/Input';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();

    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [part, setPart] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== passwordCheck) {
            alert('비밀번호가 일치하지 않습니다.')
            return;
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {
                loginId,
                password,
                name,
                email,
                age:  Number(age),
                part
            });
            console.log('회원가입 성공', response.data.data);

            alert('회원가입 성공!');
            navigate('/login');
        } catch (error) {
            console.error('회원가입 실패', error);
            if (axios.isAxiosError(error)) {
                console.log('에러 응답:', error.response?.data); 
            }
            alert('회원가입 실패 ㅜㅜ!');
        }
    };

    return (

        <section css={s.containerStyle}>
            <h1 css={s.titleStyle}>회원가입</h1>
            <form css={s.formStyle} onSubmit={handleSubmit}>
                <Input type="text" placeholder="사용할 아이디를 입력해주세요" label="아이디"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                />
                <Input type="password" placeholder="비밀번호(8~20자)를 입력해주세요" label="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" label="비밀번호 확인"
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />
                <Input type="text" placeholder="이름을 입력해주세요" label="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input type="text" placeholder="이메일을 입력해주세요" label="이메일"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input type="number" placeholder="나이를 입력해주세요" label="나이"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <Input type="text" placeholder="파트명을 입력해주세요" label="파트"
                    value={part}
                    onChange={(e) => setPart(e.target.value)} />

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