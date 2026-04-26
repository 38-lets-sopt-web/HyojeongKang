import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";

import { members } from "./member";
import { useSearch } from "./hooks/useSearch";

function App() {
  /*
    // 1. useState를 사용해 search state 생성
    const [search, setSearch] = useState("");
    const [filteredMembers, setFilteredMembers] = useState(members);

    // 2. Search 컴포넌트에 props로 넘길 handleSearch 함수 생성
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };

    // 버튼 클릭 이벤트 함수
    const handleSearchClick = () => {
      const result = members.filter((member) => member.name.includes(search));
      setFilteredMembers(result);
    };
  */
  /* 
  // filter 메소드 사용해서 필터링
  const filteredMembers = members.filter((member) =>
    member.name.includes(search),
  ); 
  */

  // 커스텀 훅 사용
  const { search, filteredData, handleSearchChange, handleSearchClick } = useSearch(members);

  return (
    <>
      <Header />
      <Search
        search={search}
        onSearchChange={handleSearchChange}
        onSearchClick={handleSearchClick}
      />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredData.map((member) => (
          <Card key={member.id} {...member} />
        ))}
      </section>
    </>
  );
}

export default App;
