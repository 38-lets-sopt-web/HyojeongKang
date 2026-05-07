/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as s from './header.style';

const Header = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    // 로컬스토리지에서 가져온 유저 아이디로 유저 이름 가져오기
    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) return;

        const fetchName = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${userId}`);
                setName(response.data.data.name);
            } catch (error) {
                console.error('유저 정보 조회 실패', error);
            }
        };

        fetchName();
    }, []);

    // 로그아웃 
    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/login');
    };

    return (
        <header css={s.headerStyle}>
            <div css={s.leftStyle}>
                <h1 css={s.titleStyle}>SOPT MEMBERS</h1>
                <span css={s.greetingStyle}>안녕하세요 {name}님</span>
            </div>
            <nav css={s.rightStyle}>
                <button css={s.tabStyle} onClick={() => navigate('/mypage')}>내정보</button>
                <button css={s.tabStyle} onClick={() => navigate('/members')}>회원조회</button>
                <button css={s.tabStyle} onClick={handleLogout}>로그아웃</button>
            </nav>
        </header>
    );
};

export default Header;