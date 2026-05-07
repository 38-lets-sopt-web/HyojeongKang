/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router';
import * as s from './header.style';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header css={s.headerStyle}>
            <div css={s.leftStyle}>
                <h1 css={s.titleStyle}>SOPT MEMBERS</h1>
                <span css={s.greetingStyle}>안녕하세요 @@@님</span>
            </div>
            <nav css={s.rightStyle}>
                <button css={s.tabStyle} onClick={() => navigate('/mypage')}>내정보</button>
                <button css={s.tabStyle} onClick={() => navigate('/members')}>회원조회</button>
                <button css={s.tabStyle} onClick={() => navigate('/login')}>로그아웃</button>
            </nav>
        </header>
    );
};

export default Header;