/** @jsxImportSource @emotion/react */
import * as s from "./memberDetail.style.ts";
import Header from "../../components/header/Header.tsx";
import MemberDetailCard from "../../components/member-detail/MemberDetailCard.tsx";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MemberDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/${id}`);
                setMember(response.data.data);
            } catch (error) {
                console.error("유저 상세 정보를 불러오는 데 실패했습니다.", error);
            }
        };
        fetchData();
    }, [id]); // id가 바뀔 때마다 유저의 상세 정보를 새로 불러옴

    // 데이터 로드 전 member가 null이면 로딩 표시 (MemberDetailCard에 null 전달 방지)
    if (!member) return <div>로딩 중...</div>;

    return (
        <>
            <Header />
            <section css={s.detailContainerStyle}>
                <h2>상세 정보</h2>
                <button css={s.btnBack} onClick={() => navigate(-1)}>
                    <AiOutlineArrowLeft size={16} />
                    뒤로가기
                </button>
                <MemberDetailCard data={member} />
            </section>
        </>
    );
};

export default MemberDetail;