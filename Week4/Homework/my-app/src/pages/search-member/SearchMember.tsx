/** @jsxImportSource @emotion/react */
import * as s from "./SearchMember.style.ts";
import Input from "../../components/input/Input.tsx";
import Button from "../../components/buttton/Button.tsx";
import MemberDetailCard from "../../components/member-detail/MemberDetailCard.tsx";
import Header from "../../components/header/Header.tsx";

const SearchMember = () => {


    return (
        <>
            <Header />
            <section css={s.containerStyle}>
                <h1>회원 조회</h1>
                <form css={s.formStyle}>
                    <Input
                        type="number"
                        placeholder="회원 ID를 입력하세요"
                        label="회원 ID" />
                    <Button type="submit" variant='primary'>검색</Button>
                </form>
                <h3 css={s.resultTitleStyle}>검색 결과</h3>
                <div css={s.emptyStyle}>원하는 ID를 검색해보세요</div>
                {/* {!searched && (
                    <div css={s.emptyStyle}>원하는 ID를 검색해보세요</div>
                )}
                {searched && !memberData && (
                    <div css={s.emptyStyle}>해당 회원이 없습니다</div>
                )}
                {searched && memberData && (
                    <MemberDetailCard data={memberData} />
                )} */}
            </section>
        </>
    );
};

export default SearchMember;