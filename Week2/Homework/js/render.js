export function renderExpenseList(data){
    const listBody = document.querySelector('.expense-list-body');
    const totalAmount = document.querySelector('.total-amount');

    // 기존 내용 초기화
    listBody.innerHTML = '';

    let total = 0;

    data.forEach(item => {
        
        total += item.amount;

        const tr = document.createElement('tr'); 

        const amountStyle = item.amount < 0 ? 'color:red' : 'color:blue'; 

        tr.innerHTML = `
            <td><input type="checkbox" value="${item.id}"></td>
            <td>${item.title}</td>
            <td style="${amountStyle}">${item.amount}</td>
            <td>${item.date}</td>
            <td>${item.category}</td>
            <td>${item.payment}</td>
        `;

        listBody.appendChild(tr);

    });
    
    // 금액 앞 +/- 기호 적용, 구분에 따른 색상 적용
    totalAmount.style.color = total < 0 ? 'red' : 'blue';
    const displayTotal = total > 0 ? `+${total}` : total;
    totalAmount.textContent = `${displayTotal}원`

}