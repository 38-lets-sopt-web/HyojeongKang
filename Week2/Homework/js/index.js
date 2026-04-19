import { expenses } from "./expense_data.js";
import { renderExpenseList } from "./render.js";
import { getFilteredData } from "./filter.js";

let currentData = JSON.parse(localStorage.getItem("expenseData")) || expenses;

// 초기 화면 
function init(){
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
    // 체크된 체크박스 모두 가져오기
    const checkedboxes = document.querySelectorAll('.expense-list-body input[type="checkbox"]:checked');
    
    const isConfirmed = confirm(`정말 삭제하시겠습니까?`)
    if (isConfirmed){
        // 체크 박스 아이디 -> 배열
        const idToDelete = Array.from(checkedboxes).map(cb => Number(cb.value));
        deleteItems(idToDelete);
    }
});

// 삭제 함수
function deleteItems(data){

    let remainingExpenses = [];

    for (let item of currentData) {
       
        const isTarget = data.includes(item.id);

        if (isTarget === false) {
            remainingExpenses.push(item);
        }
    }
    currentData = remainingExpenses;

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

    for (let box of checkboxes){
        box.checked = isChecked;
    }

})

// 날짜 정렬
const sortDate = document.querySelector('#sort-date');
sortDate.addEventListener('change', (event) => {
    const sortValue = document.querySelector('#sort-date').value;
    let sortedDate;

    if (sortValue === 'latest'){
        sortedDate = [...currentData].sort((a,b) => new Date(b.date) - new Date(a.date));
    } else {
        sortedDate = [...currentData].sort((a,b) => new Date(a.date) - new Date(b.date));
    }
    renderExpenseList(sortedDate);
})