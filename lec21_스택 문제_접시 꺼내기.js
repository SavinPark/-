// [문제 03] 접시 꺼내기
// 접시가 a,b,c,d순으로 한쪼깅 막혀있는 세척기에 들어간다고 할 때, b a c d 순으로 꺼내기 위해서는 
// push, push, pop, pop, push, pop, push pop 순으로 꺼내면 된다.
// 세척기에 꺼내야 하는 접시의 순서가 주어질 때, push/pop으로 접시가 꺼내 져야 하는 동작을 계산하는 프로그램을 작성하시오.
// 입력은 접시의 수가 10개를 넘기지 않는 소문자 알파벳으로 주어지며,
// 접시는 꺼내는 push/pop 연산 동작을 push -> 0, pop -> 1로 변환하여 배열로 반환한다.
// (단, 주어진 순서로 못 꺼낼 경우, 빈 배열로 반환)


// INPUT
// bacd
// dabc
// edcfgbijha

// OUPUT
// #1 [0, 0, 1, 1, 0, 1, 0, 1]
// #2 []
// #3 [0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1]


/* user code */
if (!Array.prototype.peek) {
    Array.prototype.peek = function () {
        return this[this.length - 1];
    }
}
if (!Array.prototype.isEmpty) {
    Array.prototype.isEmpty = function () {
        return this.length == 0;
    }
}

function answer(str) {
    let result = [];

    // 1. 접시의 순서 abc... 문자열
    // 2. 꺼내야 하는 접시, 제척기 안에 있는 알파벳 작을 경우 push
    // 3. 최 상단 접시와 비교

    let stack = [];
    let dish = str.split("").sort().join("");
    let dish_index = 0;

    for (let i = 0; i < str.length; i++) {
        while (stack.isEmpty() || stack.peek() < str[i]) {
            stack.push(dish[dish_index++]);
            result.push(0);
        }

        if (stack.isEmpty() || stack.peek() > str[i]) {
            return [];
        } else {
            stack.pop();
            result.push(1);
        }
    }
    
    return result;
}

/* main code */
let input = [
    // TC : 1
    "bacd",
    // TC : 2
    "dabc",
    // TC : 3
    "edcfgbijha"
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUTPUT
// #1 [
//   0, 0, 1, 1,
//   0, 1, 0, 1
// ]
// # 2[]
// #3 [
//   0, 0, 0, 0, 0, 1, 1,
//   1, 0, 1, 0, 1, 1, 0,
//   0, 1, 0, 1, 1, 1
// ]