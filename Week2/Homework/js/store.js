import { expenses } from "./expense_data.js";

let currentData = JSON.parse(localStorage.getItem("expenseData")) || expenses;

export function getCurrentData() {
    return currentData;
}

// 데이터 저장
export function saveData(data) {
    currentData = data;
    localStorage.setItem("expenseData", JSON.stringify(data));
}

// 항목 삭제
export function deleteItems(ids) {
    saveData(currentData.filter(item => !ids.includes(item.id)));
}

// 항목 추가
export function addItem(newData) {
    saveData([...currentData, newData]);
}