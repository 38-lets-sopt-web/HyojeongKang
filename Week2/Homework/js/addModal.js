import { renderExpenseList } from "./render.js";
import { addItem, getCurrentData } from "./store.js";

const modalContainer = document.querySelector('.modal-container');
const modalCloseBtn = modalContainer.querySelector('.btn-close');

export function openAddModal() {
    modalContainer.classList.remove('hidden');
}
export function closeAddModal() {
    modalContainer.classList.add('hidden');

    // 입력값 초기화
    document.querySelector('#add-title').value = '';
    document.querySelector('#add-type').value = 'expense';
    document.querySelector('#add-amount').value = '';
    document.querySelector('#add-date').value = '';
    document.querySelector('#add-category').value = 'select';
    document.querySelector('#add-payment').value = 'select';
}

export function newExpenseData() {
    const data = getCurrentData();
    const titleValue = document.querySelector('#add-title').value;
    const typeValue = document.querySelector('#add-type').value;
    const amountValue = document.querySelector('#add-amount').value;
    const dateValue = document.querySelector('#add-date').value;
    const categoryValue = document.querySelector('#add-category').value;
    const paymentValue = document.querySelector('#add-payment').value;

    const finalAmount = typeValue === 'expense' ? -Number(amountValue) : Number(amountValue);

    return {
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
        title: titleValue,
        type: typeValue,
        amount: finalAmount,
        date: dateValue,
        category: categoryValue,
        payment: paymentValue
    };
}

// 이벤트 리스너
const addOpenBtn = document.querySelector('.add-expense');
addOpenBtn.addEventListener('click', openAddModal);

modalCloseBtn.addEventListener('click', closeAddModal);

modalContainer.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closeAddModal();
    }
});

export function initAddModal() {
    const submitBtn = document.querySelector('.add-btn');
    submitBtn.addEventListener('click', () => {
        const newData = newExpenseData();

        if (!newData.title || !newData.date || !newData.amount || newData.category === 'select' || newData.payment === 'select') {
            alert("내용을 모두 입력해주세요");
            return;
        }

        addItem(newData);
        renderExpenseList(getCurrentData());
        closeAddModal();
    });
}