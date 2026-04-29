import { getCurrentData, deleteItems } from "./store.js";
import { renderExpenseList } from "./render.js";
import { getFilteredData } from "./filter.js";
import { initAddModal } from "./addModal.js";

export function initEvents() {

    // 아이콘 클릭
    document.querySelector('.header-icon').addEventListener('click', () => location.reload());

    // 선택 삭제
    document.querySelector('.delete-selected').addEventListener('click', () => {
        const checked = document.querySelectorAll('.expense-list-body input[type="checkbox"]:checked');
        if (checked.length === 0) { alert("삭제할 항목을 선택해주세요!"); return; }
        if (confirm("정말 삭제하시겠습니까?")) {
            const idToDelete = [...checked].map(cb => Number(cb.value));
            deleteItems(idToDelete);
            renderExpenseList(getCurrentData());
        }
    });

    // 필터 적용
    document.querySelector('.btn-apply').addEventListener('click', () => {
        renderExpenseList(getFilteredData(getCurrentData()));
    });

    // 필터 초기화
    document.querySelector('.btn-reset').addEventListener('click', () => {
        ['#search-title', '#select-type', '#select-category', '#select-payment'].forEach(sel => {
            const el = document.querySelector(sel);
            el.value = el.tagName === 'INPUT' ? '' : 'all';
        });
        renderExpenseList(getCurrentData());
    });

    // 체크박스 전체 선택
    document.querySelector('#check-all').addEventListener('change', (e) => {
        document.querySelectorAll('.expense-list-body input[type="checkbox"]')
            .forEach(box => box.checked = e.target.checked);
    });

    // 날짜 정렬
    document.querySelector('#sort-date').addEventListener('change', (e) => {
        const sorted = [...getCurrentData()].sort((a, b) =>
            e.target.value === 'latest'
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date)
        );
        renderExpenseList(sorted);
    });

    // 내역 추가
    initAddModal();
}