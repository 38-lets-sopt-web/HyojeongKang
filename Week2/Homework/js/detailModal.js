export function openDetailModal(item) {
    const modalContainer = document.querySelector('.detail-modal-container');

    document.querySelector('.detail-title').textContent = item.title;
    document.querySelector('.detail-date').textContent = item.date;
    document.querySelector('.detail-category').textContent = item.category;
    document.querySelector('.detail-payment').textContent = item.payment;

    const amount = document.querySelector('.detail-amount');
    if (amount) {
        const numAmount = Number(item.amount);
        amount.textContent = `${numAmount.toLocaleString()}원`;
        amount.style.color = numAmount > 0 ? 'blue' : 'red';
    }

    modalContainer.classList.remove('hidden');
}

const detailModal = document.querySelector('.detail-modal-container');
const detailCloseBtn = detailModal.querySelector('.btn-close');

detailCloseBtn.addEventListener('click', () => {
    detailModal.classList.add('hidden');
});

detailModal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        detailModal.classList.add('hidden');
    }
});