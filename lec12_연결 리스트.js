/* 연결 리스트 ( Linked List ) */
// - 각 노드가 데이터와 포인터를 가지며, "한 줄로 연결"되어 있는 방식으로 데이터를 저장하는 자료구조

// - 구성요소
//   - Node 
//     - data : 어떠한 element의 값, 실제 가지고 있는 값
//     - next : 포인터, 또다른 노드를 가리킴
//   - Linked List
//     [ Head ] --> [ Node ( data | next )] --> [ Node ( data | next )] --> [ Node ( data | next )] --> null


/* 연결 리스트 구현 (1) */
// Node() : data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList() : head와 length를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size() : 연결리스트 내 노드의 개수 확인
LinkedList.prototype.size = function() {
  return this.length;
}

// isEmpty() : 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function() {
  return this.length;
}


/* Test Code */
let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);

// OUTPUT
// LinkedList { 
//   head: null, 
//   length: 0 
// }

// LinkedList { 
//   head: Node { data: 123, next: null },
//   length: 1 
// }

// LinkedList {
//   head: Node { data: 123, next: Node { data: 456, next: null } },
//   length: 2
// }


/* 연결 리스트 구현 (2) */
// printNode() : 노드 출력
LinkedList.prototype.printNode = function() {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} -> `);
  }
  console.log("null");
}


// append() : 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
  let node = new Node(value), current = this.head;

  if (this.head == null) { // node가 없을 경우
    this.head = node;
  } else {                 // node가 있을 경우
    while (current.next != null) { // next 값이 있을 경우
      current = current.next;
    }
    current.next = node; // next 값이 있을 경우
  }
  this.length++;
}

/* Test Code */
let ll2 = new LinkedList();

ll2.append(1);
ll2.append(10);
ll2.append(100);

ll2.printNode();
console.log(ll2.size());

// OUTPUT
// 1 -> 10 -> 100 -> null
// 3


/* 연결 리스트 구현 (3) */
// insert() : position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value), 
      current = this.head, 
      index = 0, 
      prev;

  if (position == 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }
  this.length++;
  
  return true;
}

/* Test Code */
let ll3 = new LinkedList();

ll3.insert(1);
ll3.insert(10);
ll3.insert(100);
ll3.printNode();

ll3.insert(2, 1);
ll3.insert(3, 3);
ll3.printNode();

console.log(ll3.size());

// OUTPUT
// 100 -> 10 -> 1 -> null
// 100 -> 2 -> 10 -> 3 -> 1 -> null
// 5


/* 연결 리스트 구현 (4) */
// remove(); value 데이터를 찾아 노드 삭제
LinkedList.prototype.remove = function (value) {
  let current = this.head,
      prev = current;

  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }

  if (current.data != value) {
    return null;
  }

  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }

  this.length--;

  return current.data;
}

/* Test Code */
let ll4 = new LinkedList();

ll4.insert(1);
ll4.insert(10);
ll4.insert(100);
ll4.insert(2, 1);
ll4.insert(3, 3);
ll4.printNode();

console.log(ll4.remove(1000));
ll4.printNode();
console.log(ll4.remove(1));
ll4.printNode();
console.log(ll4.remove(2));
ll4.printNode();
console.log(ll4.remove(100));
ll4.printNode();

console.log(ll4.size());

// OUTPUT
// 100 -> 2 -> 10 -> 3 -> 1 -> null

// null
// 100 -> 2 -> 10 -> 3 -> 1 -> null
// 1
// 100 -> 2 -> 10 -> 3 -> null
// 2
// 100 -> 10 -> 3 -> null
// 100
// 10 -> 3 -> null

// 2


/* 연결 리스트 구현 (5) */
// removeAt(); position 위치 노드 삭제
LinkedList.prototype.removeAt = function (position = 0) {
  // position이 범위 밖일 경우
  if (position < 0 || position >= this.length) {
    return null;
  }

  let current = this.head,
      index = 0,
      prev;

  if (position == 0) {
    this.head = current.next;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
  this.length--;

  return current.data;
}

/* Test Code */
let ll5 = new LinkedList();

ll5.insert(1);
ll5.insert(10);
ll5.insert(100);
ll5.insert(2, 1);
ll5.insert(3, 3);
ll5.printNode();

console.log(ll5.removeAt(1000));
ll5.printNode();
console.log(ll5.removeAt(4));
ll5.printNode();
console.log(ll5.removeAt());
ll5.printNode();
console.log(ll5.removeAt(1));
ll5.printNode();

console.log(ll5.size());

// OUTPUT
// 100 -> 2 -> 10 -> 3 -> 1 -> null
// null
// 100 -> 2 -> 10 -> 3 -> 1 -> null
// 1
// 100 -> 2 -> 10 -> 3 -> null
// 100
// 2 -> 10 -> 3 -> null
// 10
// 2 -> 3 -> null
// 2


/* 연결 리스트 구현 (6) */
// indexOf() : value 값을 갖는 노드 위치 반환
LinkedList.prototype.indexOf = function (value) {
  let current = this.head,
      index = 0;
  
  while (current != null) {
    if (current.data == value) {
      return index;
    }

    index++;
    current = current.next;
  }

  return -1; // 없으면 -1 반환
}

// remove2() : indexOf + removeAt() = remove
LinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
}


/* Test Code */
let ll6 = new LinkedList();

ll6.insert(1);
ll6.insert(10);
ll6.insert(100);
ll6.insert(2, 1);
ll6.insert(3, 3);
ll6.printNode();

console.log(ll6.indexOf(1000));
console.log(ll6.indexOf(1));
console.log(ll6.indexOf(100));
console.log(ll6.indexOf(10));

console.log(ll6.remove2(1000));
ll6.printNode();
console.log(ll6.remove2(1));
ll6.printNode();
console.log(ll6.remove2(2));
ll6.printNode();
console.log(ll6.remove2(100));
ll6.printNode();

console.log(ll6.size());

// OUTPUT
// 100 -> 2 -> 10 -> 3 -> 1 -> null

// -1
// 4
// 0
// 2

// null
// 100 -> 2 -> 10 -> 3 -> 1 -> null
// 1
// 100 -> 2 -> 10 -> 3 -> null
// 2
// 100 -> 10 -> 3 -> null
// 100
// 10 -> 3 -> null

// 2