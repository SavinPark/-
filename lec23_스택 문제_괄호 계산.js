// [문제 05] 괄호 계산
// 4개의 기호 (,),[,]를 이용해서 만들어지는 괄호열로, 아래 규치긍로 계산하는 프로그램을 작성하시오.
// 1. '()'인 괄호열 값은 2
// 2. '[]'인 괄호열 값은 3
// 3. '(X)'인 괄호열 값은 2 * 값(X)로 계산
// 4. '[X]'인 괄호열 값은 3 * 값(X)로 계산
// 5. 괄호형 X와 Y가 결합된 XY는 값(XY) = 값(X) + 값(Y)로 계산

// 예를 들면, ()[[]]는 2 + 3*3 = 11 이고, ([])의 값은 2*3 = 6이다.
// 만약 쌍이 맞지 않거나 기호 순서가 비정상적이라 올바른 괄호 셋이 만들어지지 않는 경우에는 0 반환
// 입력은 4개의 기호로만 이루어진 괄호가 문자열 형태로 주어지며, 계산을 통해 나온 정ㅅ를 반환한다.

// INPUT
// (()[[]])
// [][]((])
// (()[[]])([])

// OUPUT
// #1 22
// #2 0
// #3 28


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
    let result = 0;

    // ( -> x2  [ -> x3
    // ) -> /2  ] -> /3
    // () or [], 현재 temp값을 result에 더해준다.

    let stack = [];
    let temp = 1;

    for (let i = 0; i < str.length; i++) {
        let mark = str[i];

        switch(mark) {
            case "(":
                temp *= 2;
                stack.push(mark);
                break;
            case "[":
                temp *= 3;
                stack.push(mark);
                break;
            case ")":
                if (stack.isEmpty() || stack.peek() != "(") {
                    return 0;
                }
                if (str[i-1] == "(") {
                    result += temp;
                }
                stack.pop();
                temp /= 2;
                break;
            case "]":
                if (stack.isEmpty() || stack.peek() != "[") {
                    return 0;
                }
                if (str[i-1] == "[") {
                    result += temp;
                }
                stack.pop();
                temp /= 3;
                break;
        }
    }
    if (!stack.isEmpty()) {
        return 0;
    }

    return result;
}

/* main code */
let input = [
    // TC : 1
    "(()[[]])",
    // TC : 2
    "[][]((])",
    // TC : 3
    "(()[[]])([])"
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUTPUT
// #1 22
// #2 0
// #3 28