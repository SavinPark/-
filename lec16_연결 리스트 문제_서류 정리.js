// [ 문제 02 ] 서류 정리 ( 연결 리스트 )

// INPUT
// 1 -> 3 -> 7 -> null
// 3 -> 1 -> 9 -> 6 -> 4 -> null
// 6 -> 9 -> 7 -> 2 -> 1 -> 4 -> 3 -> null

// OUTPUT
// #1 7 -> 3 -> 1 -> null
// #2 4 -> 6 -> 9 -> 1 -> 3 null
// #3 3 -> 4 -> 1 -> 2 -> 7 -> 9 -> 6 -> null

/* user code */
function File(number) {
  this.number = number;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(ll) {
  let current = ll.head,
      prev = null,
      next;
  // 1. 역방향 정렬
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // 2. head 업데이트
  ll.head = prev;

  return ll;
}

/* main code */
let input = [
  // TC: 1
  [7, 3, 1],
  // TC: 2
  [4, 6, 9, 1, 3],
  // TC: 3
  [3, 4, 1, 2, 7 ,9, 6]
];

LinkedList.prototype.printNode = function() {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.number} -> `);
  }
  console.log("null");
}

LinkedList.prototype.makeFiles = function(files) {
  let current = this.head;
  let node;
  for (let i = 0; i < files.length; i++) {
    node = new File(files[i]);
    node.next = current;
    this.head = node;
    current = node;
  }
}

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);

  let ll = new LinkedList();
  ll.makeFiles(input[i]);
  answer(ll).printNode();
}

// OUTPUT
// #1 7 -> 3 -> 1 -> null
// #2 4 -> 6 -> 9 -> 1 -> 3 -> null
// #3 3 -> 4 -> 1 -> 2 -> 7 -> 9 -> 6 -> null