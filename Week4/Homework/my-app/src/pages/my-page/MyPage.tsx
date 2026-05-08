/** @jsxImportSource @emotion/react */
import * as s from "./mypage.style";
import Button from "../../components/buttton/Button";
import Input from "../../components/input/Input";
import Header from "../../components/header/Header";
import axios from "axios";
import { useState, useEffect } from "react";

interface UserData {
    loginId: string;
    name: string;
    email: string;
    age: number;
    part: string;
}

const Mypage = () => {
    const [userData, setUserData] = useState<UserData>({
        loginId: '',
        name: '',
        email: '',
        age: 0,
        part: '',
    });

    // 유저 정보 가져오기
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) return; // 로그인 정보 없으면 요청 중단

        const fetchUser = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`);
                const data = response.data.data;
                setUserData({
                    loginId: data.loginId,
                    name: data.name,
                    email: data.email,
                    age: data.age,
                    part: data.part,
                });
            } catch (error) {
                console.error('유저 정보 조회 실패', error);
            }
        };

        fetchUser();
    }, []);

    // 정보 수정 patch
    const handleSubmit = async () => {
        const userId = localStorage.getItem('userId');
        if (!userId) return;

        try {
            await axios.patch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
                name: userData.name,
                email: userData.email,
                age: userData.age,
            });
            alert('정보 수정 완료!');
        } catch (error) {
            console.error('유저 정보 조회 실패', error);
            alert('정보 수정 실패');
        }
    }

    return (
        <>
            <Header />
            <section css={s.containerStyle}>
                <h2>내 정보</h2>
                <div css={s.contentWrapperStyle}>
                    <article css={s.infoBoxStyle}>
                        <div css={s.infoRowStyle}>
                            <span css={s.infoLabelStyle}>아이디</span>
                            <span css={s.infoValueStyle}>{userData.loginId}</span>
                        </div>
                        <div css={s.infoRowStyle}>
                            <span css={s.infoLabelStyle}>파트</span>
                            <span css={s.infoValueStyle}>{userData.part}</span>
                        </div>
                    </article>

                    <Input
                        type="text"
                        placeholder="이름을 입력해주세요"
                        label="이름"
                        value={userData.name}
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })} // 스프레드로 기존 값 유지하면서 해당 필드만 업데이트
                    />
                    <Input
                        type="text"
                        placeholder="이메일을 입력해주세요"
                        label="이메일"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                    <Input
                        type="number"
                        placeholder="나이를 입력해주세요"
                        label="나이"
                        value={String(userData.age)}
                        onChange={(e) => setUserData({ ...userData, age: Number(e.target.value) })}
                    />
                    <Button type="submit" variant='primary' onClick={handleSubmit}>정보 수정</Button>
                </div>
            </section>
        </>
    );
};

export default Mypage;