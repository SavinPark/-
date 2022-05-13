// [ 문제 01 ] 수열 최솟값 위치
// 수열이 주어질 때, 이 수열의 있는 수 중 최솟값의 위치를 모두 출력하는 프로그램을 작성하시오.
// 입력은 자연수로 된 배열을 받고, 시작 위치는 0으로 계산하여 최솟값의 위치를 배열로 반환한다.
// 모든 수는 100이하의 자연수로 입력 받는다.

// INPUT
/* [5, 2, 10, 2]
   [4, 5, 7, 4, 8]
   [12, 11, 11, 16, 11, 12]
*/

// OUTPUT
/* #1 [1, 3]
   #2 [0, 3]
   #3 [1, 2, 4]
*/

// user code
function answer(nums) {
  let result = [];
  // 1. 최솟값 위치
  let min = Number.MAX_SAFE_INTEGER // 가장 큰 숫자
  for (let i = 0 ; i < nums.length ; i++) {
    if (min > nums[i]) {
      min = nums[i];
    }
  }
  // 2. 최솟값에 해당하는 위치 idx
  let count = 0;
  for (let i = 0 ; i < nums.length ; i++) {
    if (min == nums[i]) {
      // result.push(i);
      result[count] = i;
      count++;
    } 
  }
  return result;
}

// main code
let input = [
  // TC: 1
  [5, 2, 10, 2],
  // TC: 2
  [4, 5, 7, 4, 8],
  // TC: 3
  [12, 11, 11, 16, 11, 12],
];

for (let i = 0 ; i < input.length ; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}