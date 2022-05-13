// [문제 01] 기차 운행
// 열차가 들어갔다 나올 수 있는 플랫폼이 있다.
// 열차가 1번부터 3번까지 순서대로 들어온다고 했을 때, 입력 순서대로 나갈 수 있는지 없는지 판단하는 프로그램을 작성하시오.
// 입력은 차량 순서 번호가 적혀 있는 배열이며, 가능 여부에 따라 true/false를 반환한다.

// INPUT
// [1, 2, 3]
// [3, 2, 1]
// [3, 1, 2]

// OUPUT
// #1 true
// #2 true
// #3 false

/* 해석
 * 1번) 1 들어오고 -> 1 나가고 -> 2 들어오고 -> 2 나가고 -> 3 들어오고 -> 3 나가고
 * 2번) 1 들어오고 -> 대기 -> 2 들어오고 -> 대기 -> 3 들어오고 -> 3 나가고 -> 2 나가고 -> 1 나가고 
 * 3번) 1 들어오고 -> 대기 -> 2 들어오고 -> 대기
 */


/* user code 1 */
// function answer(train) {
//     let stack = [];
//     let num = 0;

//     for (let i = 0; i < train.length; i++) {
//         while (stack.length === 0 || stack[stack.length - 1] < train[i]) {
//             stack.push(++num);
//         }

//         if (stack[stack.length - 1] == train[i]) {
//             stack.pop();
//         } else {
//             return false;
//         }
//     }
//     return true;
// }

/* user code 2*/
// 메서드가 정의되어 있지 않을 경우 새로 정의해줌
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
function answer(train) {
    let stack = [];
    let num = 0;

    for (let i = 0; i < train.length; i++) {
        while (stack.isEmpty() || stack.peek() < train[i]) {
            stack.push(++num);
        }

        if (stack.peek() == train[i]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return true;
}


/* main code */
let input = [
    // TC : 1
    [1, 2, 3],
    // TC : 2
    [3, 2, 1],
    // TC : 3
    [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUTPUT
// #1 true
// #2 true
// #3 false