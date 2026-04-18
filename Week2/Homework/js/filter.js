export function getFilteredData(data) {
    const searchTitle = document.querySelector('#search-title').value;
    const selectType = document.querySelector('#select-type').value;
    const selectCategory = document.querySelector('#select-category').value;
    const selectPayment = document.querySelector('#select-payment').value;

    const result = [];

    for (const item of data) {
        // 제목 확인
        const isTitleOk = item.title.includes(searchTitle);
        
        // 유형(수입/지출) 확인
        let isTypeOk = true;
        if (selectType === 'income') {
            if (item.amount > 0) {
                isTypeOk = true;
            } else {
                isTypeOk = false;
            }
        } 
        else if (selectType === 'expense') {
            if (item.amount < 0) {
                isTypeOk = true;
            } else {
                isTypeOk = false;
            }
        }

        // 카테고리 확인
        const isCategoryOk = (selectCategory === 'all') || (item.category === selectCategory);

        // 결제 수단 확인
        const isPaymentOk = (selectPayment === 'all') || (item.payment === selectPayment);

        // 전체 결과
        if (isTitleOk && isTypeOk && isCategoryOk && isPaymentOk) {
            result.push(item);
        }
    }

    return result;
}