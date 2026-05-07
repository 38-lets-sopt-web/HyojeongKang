/** @jsxImportSource @emotion/react */
import * as s from "./SearchMember.style.ts";
import Input from "../../components/input/Input.tsx";
import Button from "../../components/buttton/Button.tsx";
import MemberDetailCard from "../../components/member-detail/MemberDetailCard.tsx";
import Header from "../../components/header/Header.tsx";
import axios from "axios";
import { useState } from "react";

const SearchMember = () => {
    const [searchId, setSearchId] = useState('');
    const [memberData, setMemberData] = useState(null);
    const [searched, setSearched] = useState(false); 

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${searchId}`);
            setMemberData(response.data.data);
            setSearched(true);

        } catch (error) {
            console.error('유저 정보 조회 실패', error);
            setMemberData(null);
            setSearched(true);
        }
    }


    return (
        <>
            <Header />
            <section css={s.containerStyle}>
                <h1>회원 조회</h1>
                <form css={s.formStyle} onSubmit={handleSearch}>
                    <Input
                        type="number"
                        placeholder="회원 ID를 입력하세요"
                        label="회원 ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)} />
                    <Button type="submit" variant='primary'>검색</Button>
                </form>
                <h3 css={s.resultTitleStyle}>검색 결과</h3>
                {!searched && (
                    <div css={s.emptyStyle}>원하는 ID를 검색해보세요</div>
                )}
                {searched && !memberData && (
                    <div css={s.emptyStyle}>해당 회원이 없습니다</div>
                )}
                {searched && memberData && (
                    <MemberDetailCard data={memberData} />
                )}
            </section>
        </>
    );
};

export default SearchMember;