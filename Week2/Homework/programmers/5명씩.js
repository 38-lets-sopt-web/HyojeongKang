// 방법 1 for문 사용
function solution(names) {
    var result = [];
    for(let i =0; i < names.length; i += 5){
        result.push(names[i]);
    }
    return result;
}

// 방법 2 filter 사용
function solution(names) {
    var result = [];
    result = names.filter((_,i) => i % 5 === 0)
    return result;
}