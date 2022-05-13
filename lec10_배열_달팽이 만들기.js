// [ 문제 10 ] 달팽이 만들기
// 조카를 잠재우기 위해 달팽이 모양으로 숫자를 하나씩 적어주는 프로그램이 필요하게 되었다.
// 이를 위해 정사각형 모양의 달팽이 2차원 배열을 그려주는 함수를 작성하시오.
// 입력한 크기의 정사각형으로, 아해 그림처럼 시계방향으로 돌면서 숫자를 채워 2차원 배열을 반환한다.

// INPUT
/* 3
   5
   6
*/

// OUTPUT
/* #1 [[1,2,3], [8,9,4], [7,6,5]]
   #2 [[1,2,3,4,5], [16,17,18,19,6], [15,24,25,20,7], [14,23,22,21,8], [13,12,11,10,9]]
   #3 [[1,2,3,4,5,6], [20,21,22,23,24,7], [19,32,33,34,25,8], [18,31,36,35,26,9], [17,30,29,28,27,10], [16,15,14,13,12,11]]
*/

// user code
function answer(length) {
  let result = [];

  for (let i = 0; i < length; i++) {
    result[i] = [];
  }

  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;

  while(1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    length--;
    
    if (length <= 0) break;

    for (let j = 0; j <length; j++) {
      y += direction;
      result[y][x] = ++num;
    }

    direction *= -1;
  }

  return result;
}

// main code
let input = [
  // TC: 1
  3,
  // TC: 2
  5,
  // TC: 3
  6,
];

for (let i = 0 ; i < input.length ; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
