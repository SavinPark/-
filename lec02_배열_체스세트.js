// [ 문제 02 ] 체스 세트
// 오래된 창고에서 체스판과 체스 기물을 발견했다.
// 불행히도 기물별 개수가 부족하거나 많아, 완전한 한 세트를 이루고 있지 못하고 있어 보인다.
// 게임을 하기 위해 부족하거나 많은 기물의 개수를 계산하여 반환하는 프로그램을 제막하시오.
// 기물의 개수는 배열 형태로 아래와 같이 king부터 pawns 순서로 들어오며
// 한 게임을 하기 위해 필요한 기물의 개수는 아래와 같다.
// * 순서 닟 기물 필요 개수 : king(1), queen(1), rooks(1), bishops(2), knights(2), pawns(8)

// INPUT
/* [0, 1, 2, 2, 2, 7]
   [2, 1, 2, 1, 2, 1]
   [0, 1, 1, 5, 3, 6]
*/

// OUTPUT
/* #1 [1, 0, 0 , 0, 0, 1]
   #2 [-1, 0, 0, 1, 0, 7]
   #3 [1, 0, 0, 1, 0, 7]
*/

// user code
function answer(chess) {
  let result = [];
  // 1. 각 idx 별로 정해진 숫자 --- 체스 게임을 하기 위한 기물 개수
  let refer = [1, 1, 2, 2, 2, 8];

  // 2. 각 idx 별로 정해진 숫자와 비교해서 얼마만큼 부족한지, 혹은 더 많은지 계산하여 result 배열에 업데이트
  let count = 0;
  for (let i = 0 ; i < chess.length ; i++) {
    result[count++] = refer[i] - chess[i]; 
  }
  
  return result;
}

// main code
let input = [
  // TC: 1
  [0, 1, 2, 2, 2, 7],
  // TC: 2
  [2, 1, 2, 1, 2, 1],
  // TC: 3
  [0, 1, 1, 5, 3, 6],
];

for (let i = 0 ; i < input.length ; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}