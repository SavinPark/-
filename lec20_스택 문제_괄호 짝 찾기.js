// [문제 02] 괄호 짝 찾기
// 계산 수식이 주어졌을 때, 같은 짝의 괄호 위치를 찾는 프로그램을 제작하시오.
// 입력은 계산 수식으로 주어지며, 괄호의 짝 별 위치를 [시작, 끝]으로 찾아 2차원 배열 형태로 반환한다.
// 위치 시작 값은 0으로 시작하며, 하나라도 짜깅 맞지 않을 경우 빈배열을 반환한다.


// INPUT
// (a+b)
// (a*(b+c)+d)
// (a*(b+c)+d+(e)
// (a*(b+c)+d)+e)
// (a*(b+c)+d)+(e*(f+g))

// OUPUT
// #1 [[0, 4]]
// #2 [[3, 7], [0, 10]]
// #3 []
// #4 []
// #5 [[3, 7], [0, 10], [15, 19], [12, 20]]


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

    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            stack.push(i);
        } else if (str[i] == ")") {
            if (stack.isEmpty()) {
                return [];
            }
            result.push([stack.pop(), i]);
        } 
    }

    if (!stack.isEmpty()) {
        return [];
    }
    return result;
}

/* main code */
let input = [
    // TC : 1
    "(a+b)",
    // TC : 2
    "(a*(b+c)+d)",
    // TC : 3
    "(a*(b+c)+d+(e)",
    // TC : 4
    "(a*(b+c)+d)+e)",
    // TC : 5
    "(a*(b+c)+d)+(e*(f+g))"
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUTPUT
// #1 [ [ 0, 4 ] ]
// #2 [ [ 3, 7 ], [ 0, 10 ] ]
// #3 []
// #4 []
// #5 [ [ 3, 7 ], [ 0, 10 ], [ 15, 19 ], [ 12, 20 ] ]