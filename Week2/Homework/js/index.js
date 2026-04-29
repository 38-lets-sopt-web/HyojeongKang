import { expenses } from "./expense_data.js";
import { renderExpenseList } from "./render.js";
import { getFilteredData } from "./filter.js";
import { openAddModal, closeAddModal, newExpenseData, initAddModal } from "./addModal.js";
import { openDetailModal } from "./detailModal.js";

let currentData = JSON.parse(localStorage.getItem("expenseData")) || expenses;

// 초기 화면 
function init() {
    renderExpenseList(currentData);
}

document.addEventListener('DOMContentLoaded', init);

// 아이콘 클릭 시 페이지 새로고침
const headerIcon = document.querySelector('.header-icon');
headerIcon.addEventListener('click', () => {
    location.reload();
});

// 선택 삭제
const deleteBtn = document.querySelector('.delete-selected');

deleteBtn.addEventListener('click', () => {

    const checkedboxes = document.querySelectorAll('.expense-list-body input[type="checkbox"]:checked');

    // 예외 처리 : 체크된 항목이 없을 경우
    if (checkedboxes.length === 0) {
        alert("삭제할 항목을 선택해주세요!");
        return;
    }

    const isConfirmed = confirm(`정말 삭제하시겠습니까?`)
    if (isConfirmed) {
        // 체크 박스 아이디 -> 배열
        const idToDelete = [...checkedboxes].map(cb => Number(cb.value));
        deleteItems(idToDelete);
    }
});

// 삭제 함수
function deleteItems(data) {
    currentData = currentData.filter(item => !data.includes(item.id));
    // 로컬 스토리지에도 저장 (새로고침해도 유지되도록)
    localStorage.setItem("expenseData", JSON.stringify(currentData));
    renderExpenseList(currentData); // 업데이트
}

// 필터링 적용
const applyBtn = document.querySelector('.btn-apply');
applyBtn.addEventListener('click', () => {
    const filtered = getFilteredData(currentData);
    renderExpenseList(filtered);
})

// 초기화 버튼
const resetBtn = document.querySelector('.btn-reset');
resetBtn.addEventListener('click', () => {
    document.querySelector('#search-title').value = '';
    document.querySelector('#select-type').value = 'all';
    document.querySelector('#select-category').value = 'all';
    document.querySelector('#select-payment').value = 'all';
    renderExpenseList(currentData);
})

// 체크박스 모두 선택
const checkAll = document.querySelector('#check-all');
checkAll.addEventListener('change', (event) => {
    const isChecked = event.target.checked;
    const checkboxes = document.querySelectorAll('.expense-list-body input[type="checkbox"]');

    [...checkboxes].forEach(box => box.checked = isChecked);

})

// 날짜 정렬
const sortDate = document.querySelector('#sort-date');
sortDate.addEventListener('change', (event) => {
    const sortValue = event.target.value;

    const sortedDate = [...currentData].sort((a, b) =>
        sortValue === 'latest'
            ? new Date(b.date) - new Date(a.date)
            : new Date(a.date) - new Date(b.date)
    );

    renderExpenseList(sortedDate);
})


initAddModal((newData) => {
    currentData.push(newData);
    localStorage.setItem('expenseData', JSON.stringify(currentData));
    renderExpenseList(currentData);
});