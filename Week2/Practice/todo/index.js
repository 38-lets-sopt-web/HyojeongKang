// html 요소 선택해서 가져오기
const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const todoList = document.querySelector('.list');

// 할 일 목록 로컬 스토리지 가져오기
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// 화면에 표시 초기화 하기
todos.forEach((todo) => {
  const li = document.createElement('li');
  li.textContent = todo;
  todoList.appendChild(li);
});


// 버튼 클릭 이벤트
addBtn.addEventListener('click', () => {
    const value = input.value;
    
    // 리스트에 추가
    const li = document.createElement('li');
    li.textContent = value;
    todoList.appendChild(li);

    // 로컬 스토리지에 저장 
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));

    // input 초기화 
    input.value ='';
});