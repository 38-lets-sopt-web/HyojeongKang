const modalContainer = document.querySelector('.modal-container');
const modalCloseBtn = modalContainer.querySelector('.btn-close');

export function openAddModal() {
    modalContainer.classList.remove('hidden');
}
export function closeAddModal() {
    modalContainer.classList.add('hidden');
}

export function newExpenseData() {
    const titleValue = document.querySelector('#add-title').value;
    const typeValue = document.querySelector('#add-type').value;
    const amountValue = document.querySelector('#add-amount').value;
    const dateValue = document.querySelector('#add-date').value;
    const categoryValue = document.querySelector('#add-category').value;
    const paymentValue = document.querySelector('#add-payment').value;

    const finalAmount = typeValue === 'expense' ? -Number(amountValue) : Number(amountValue);

    return {
        id: Date.now(),
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

export function initAddModal(onSubmit) {
    const submitBtn = document.querySelector('.add-btn');
    submitBtn.addEventListener('click', () => {
        const newData = newExpenseData();

        if (!newData.title || !newData.date || !newData.category || !newData.payment || !newData.amount) {
            alert("내용을 모두 입력해주세요");
            return;
        }

        onSubmit(newData);
        closeAddModal();
    });
}