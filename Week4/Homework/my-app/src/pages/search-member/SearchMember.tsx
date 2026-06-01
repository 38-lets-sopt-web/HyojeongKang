/** @jsxImportSource @emotion/react */
import * as s from "./SearchMember.style.ts";
import Input from "../../components/input/Input.tsx";
import Button from "../../components/buttton/Button.tsx";
import MemberDetailCard from "../../components/member-detail/MemberDetailCard.tsx";
import MemberCard from "../../components/member-card/MemberCard.tsx";
import Header from "../../components/header/Header.tsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

interface Member {
    id: number;
    name: string;
    part: string;
}

const SearchMember = () => {
    const [searchId, setSearchId] = useState('');
    const [memberData, setMemberData] = useState(null);     // 검색된 멤버 데이터
    const [searched, setSearched] = useState(false);        // 검색 시도 여부 -> 결과 영역 표시 조건
    const [memberList, setMemberList] = useState<Member[]>([]); // 전체 멤버 목록
    const navigate = useNavigate();

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault(); // 폼 기본 제출 동작(새로고침) 방지

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

    // 전체 멤버 목록 -> 하단 리스트에 표시
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
    }, []); // 빈 배열 : 최초 1회만 실행


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
                {/* 검색 결과 입력 전 */}
                {!searched && (
                    <div css={s.emptyStyle}>원하는 ID를 검색해보세요</div>
                )}
                {/* 검색 결과가 없을 경우 */}
                {searched && !memberData && (
                    <div css={s.emptyStyle}>해당 회원이 없습니다</div>
                )}
                {/* 검색 결과가 있는 경우 */}
                {searched && memberData && (
                    <MemberDetailCard data={memberData} />
                )}
            </section>
            <section css={s.listContainerStyle}>
                <h3>전체 멤버 리스트</h3>
                <div css={s.memberGridStyle}>
                    {memberList.map((member) => (
                        <MemberCard 
                        key={member.id} 
                        name={member.name} 
                        part={member.part} 
                        onClick={() => navigate(`/members/${member.id}`)}/> // 카드 클릭 시 상세 페이지로 이동
                    ))}
                </div>
            </section>
        </>
    );
};

export default SearchMember;