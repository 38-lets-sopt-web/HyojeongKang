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

    // 현재 회원 가입 단계 (1:아이디 2:비밀번호 3:기타개인정보)
    const [step, setStep] = useState(1); 
    

    const handleNext = () => {
        // 최소한의 단계별 유효성 검사
        if (step === 1 && !loginId) return alert('아이디를 입력해주세요');
        if (step === 2 && !password) return alert('비밀번호를 입력해주세요');
        if (step === 2 && password !== passwordCheck) return alert('비밀번호가 일치하지 않습니다');
        if (step === 3) {
            if (!name) return alert('이름을 입력해주세요');
            if (!email) return alert('이메일을 입력해주세요');
            if (!age) return alert('나이를 입력해주세요');
            if (!part) return alert('파트를 입력해주세요');
        }
        setStep(step + 1);
    };

    // 최종 회원가입 API 요청
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // 폼 기본 제출 동작(새로고침) 방지

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
                age,
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
                {/* step 값에 따라 해당 단계의 입력 폼만 렌더링 */}
                {step === 1 && (
                    <Input type="text" placeholder="사용할 아이디를 입력해주세요" label="아이디"
                        value={loginId} onChange={(e) => setLoginId(e.target.value)} />
                )}
                {step === 2 && (
                    <>
                        <Input type="password" placeholder="비밀번호(8~20자)를 입력해주세요" label="비밀번호"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Input type="password" placeholder="비밀번호를 한 번 더 입력해주세요" label="비밀번호 확인"
                            value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
                    </>
                )}
                {step === 3 && (
                    <>
                        <Input type="text" placeholder="이름을 입력해주세요" label="이름"
                            value={name} onChange={(e) => setName(e.target.value)} />
                        <Input type="text" placeholder="이메일을 입력해주세요" label="이메일"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="number" placeholder="나이를 입력해주세요" label="나이"
                            value={age} onChange={(e) => setAge(e.target.value)} />
                        <div css={s.selectContainer}>
                            <label css={s.labelStyle}>파트</label>
                            <select css={s.selectStyle} value={part} onChange={(e) => setPart(e.target.value)}>
                                <option value="">파트를 선택해주세요</option>
                                <option value="웹">웹</option>
                                <option value="iOS">iOS</option>
                                <option value="Android">안드로이드</option>
                            </select>
                        </div>
                    </>
                )}
                {/* 마지막 단계면 회원가입 버튼, 아니면 다음 버튼 */}
                {step < 4
                    ? <Button type="button" variant='primary' onClick={handleNext}>다음</Button>
                    : <Button type="submit" variant='primary'>회원가입</Button>
                }

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