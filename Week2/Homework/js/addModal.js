const modalContainer = document.querySelector('.modal-container');

export function openAddModal() {
     modalContainer.style.display = 'flex';
}

export function closeAddModal(){
    modalContainer.style.display = 'none';
}

export function newExpenseData(){

    const titleValue = document.querySelector('#add-title').value;
    const typeValue = document.querySelector('#add-type').value;
    const amountValue = document.querySelector('#add-amount').value;
    const dateValue = document.querySelector('#add-date').value;
    const categoryValue = document.querySelector('#add-category').value;
    const paymentValue = document.querySelector('#add-payment').value;

    let finalAmount = Number(amountValue);
    if (typeValue === 'expense') {
        finalAmount = -finalAmount;
    }

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