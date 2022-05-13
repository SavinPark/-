// [ 문제 07 ] 대표 선출 ( 원형 리스트 )

// INPUT
// 8 2 3
// 10 2 3
// 20 5 7

// OUTPUT
// #1 [2, 5, 8, 4, 1, 7, 3, 6]
// #2 [2, 5, 8, 1, 6, 10, 7, 4, 9, 3]
// #3 [5, 12, 19, 7, 15, 3, 13, 2, 14, 6, 18, 11, 9, 8, 10, 17, 4, 16, 20, 1]

/* user code */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];

  // 1. Circular Linked List 제작
  let ll = new LinkedList();
  let current, prev;
  for (let i = 1; i <= n; i++) {
    current = new Node(i);

    if (i === 1) {
      ll.head = current;
    } else {
      prev.next = current;
    }

    prev = current;
  }
  current.next = ll.head;

  // 2. Start node 위치 설정
  current = ll.head;
  while (--m) {
    prev = current;
    current = current.next;
  }

  // 3. 후보자들 중 k만큼 움직이면 제거 -> 단, 혼자 남을 때
  let count;
  while (current.next != current) {
    result.push(current.data);
    prev.next = current.next;

    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }

  // 4. 혼자 남은 후보 번호를 result 추가
  result.push(current.data);

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],
  // TC: 2
  [10, 2, 3],
  // TC: 3
  [20, 5, 7]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0],input[i][1], input[i][2]));
}

// OUTPUT
// #1 [
//   2, 5, 8, 4,
//   1, 7, 3, 6
// ]
// #2 [
//    2, 5, 8, 1, 6,
//   10, 7, 4, 9, 3
// ]
// #3 [
//    5, 12, 19,  7, 15, 3, 13,
//    2, 14,  6, 18, 11, 9,  8,
//   10, 17,  4, 16, 20, 1
// ]