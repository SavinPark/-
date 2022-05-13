// [ 문제 07 ] O X 퀴즈
// 네키라쿠배 대학교에서 OX 퀴즈 쇼를 진행한다. 정답을 맞췄을 경우 문제당 1점을 부여하고, 
// 연속적으로 맞출 경우 연속한 정답 개수 만큼의 가산점을 부여해준다. (상세 산출 방식은 아래를 참고 )
// 진행자를 위해 채점표를 보고 점수를 산출해주는 프로그램을 제작해주자.
// 배열 형태의 채점값이 1(정답), 0(오답)으로 입력되며, 점수의 함계를 반환한다.

// < 채점표 >
// 채점 | 1 0 1 1 1 0 1 1 0 0
// 점수 | 1 0 1 2 3 0 1 2 0 0

// INPUT
/* [1, 0, 1, 1, 1, 0, 1, 1, 0, 0]
   [1, 1, 0, 1, 1, 0, 1, 1, 1, 1]
   [1, 1, 1, 1, 1, 0, 0, 1, 1, 0]
*/

// OUTPUT
/* #1 10
   #2 16
   #3 18
*/
// user code
function answer(mark) {
  let result = 0;

  let score = 0;
  for (let i = 0; i < mark.length ; i++) {
    if (mark[i]) {
      result += ++score;
    } else {
      score = 0;
    }
  }
  return result;
}

// main code
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0 ; i < input.length ; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
