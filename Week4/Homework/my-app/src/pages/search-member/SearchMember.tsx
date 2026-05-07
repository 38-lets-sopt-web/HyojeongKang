/** @jsxImportSource @emotion/react */
import * as s from "./SearchMember.style.ts";
import Input from "../../components/input/Input.tsx";
import Button from "../../components/buttton/Button.tsx";
import MemberDetailCard from "../../components/member-detail/MemberDetailCard.tsx";
import MemberCard from "../../components/member-card/MemberCard.tsx";
import Header from "../../components/header/Header.tsx";
import axios from "axios";
import { useState, useEffect } from "react";

interface Member {
    id: number;
    name: string;
    part: string;
}

const SearchMember = () => {
    const [searchId, setSearchId] = useState('');
    const [memberData, setMemberData] = useState(null);
    const [searched, setSearched] = useState(false); 
    const [memberList, setMemberList] = useState<Member[]>([]);

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

        useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
                setMemberList(response.data.data.users);
            } catch (error) {
                console.error('멤버 목록 조회 실패', error);
            }
        };
        fetchMembers();
    }, []);


    return (
        <>
            <Header />
            <section css={s.searchContainerStyle}>
                <h1>회원 조회</h1>
                <form css={s.formStyle} onSubmit={handleSearch}>
                    <Input
                        type="number"
                        placeholder="회원 ID를 입력하세요"
                        label="회원 ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)} />
                    <Button type="submit" variant='primary' disabled={!searchId}>검색</Button>
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
            <section css={s.listContainerStyle}>
                <h3>전체 멤버 리스트</h3>
                <div css={s.memberGridStyle}>
                    {memberList.map((member) => (
                        <MemberCard key={member.id} name={member.name} part={member.part} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default SearchMember;