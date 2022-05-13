// [문제 04] 기린의 시야
// 기린이 앞쪽만 볼 수 있는 경우, 다른 기린을 몇 마리 볼 수 있는지 총합을 구하는 프로그램을 작성하시오.
// 기린은 자신보다 작거나 같은 기린만 볼 수 있으며, 자신보다 큰 기린이 나올 경우앞 기린들이 가려서 볼 수가 없다.
// 입력은 기린 별 키 값이 들어오며, 다른 기린을 볼 수 있는 총합을 구해 반환한다.

// INPUT
// [10, 3, 7, 4, 12, 2]
// [7, 4, 12, 1, 13, 11, 12, 6]
// [20, 1, 19, 18, 15, 4, 6, 8, 3, 3]

// OUPUT
// #1 5
// #2 6
// #3 30


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

function answer(giraffe) {
    let result = 0;

    let stack = [];
    giraffe.push(Number.MAX_SAFE_INTEGER);
    for (let i = 0; i < giraffe.length; i++) {
        while(!stack.isEmpty() && stack.peek()["h"] < giraffe[i]) {
            // 높이 계산
            result += i - stack.pop()["i"] - 1;
        }
        stack.push({h: giraffe[i], i: i});
    }
    
    return result;
}

/* main code */
let input = [
    // TC : 1
    [10, 3, 7, 4, 12, 2],
    // TC : 2
    [7, 4, 12, 1, 13, 11, 12, 6],
    // TC : 3
    [20, 1, 19, 18, 15, 4, 6, 8, 3, 3]
];

for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUTPUT
// #1 5
// #2 6
// #3 30