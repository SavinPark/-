/* 원형 연결 리스트 ( Circular Linked List ) */
// - 각 노드가 데이터와 포인터를 가지며, "원형 형태로 연결"되어 있는 방식으로 데이터를 저장하는 자료구조

// - 구성요소
//   - Node 
//     - data : 어떠한 element의 값, 실제 가지고 있는 값
//     - next : 포인터, 다음 노드를 가리킴
//   - Linked List
//     [ Head ] --> [ Node ( data | next )] --> [ Node ( data | next )] --> [ Node ( data | next )]
//                             <---------------------------------------------------------------


/* 원형 연결 리스트 구현 (1) */
// Node() : data와 point를 가지고 있는 객체
function Node(data) {
    this.data = data;
    this.next = null;
}

// LinkedList() : head와 length를 가지고 있느 객체
function CircularLinkedList() {
    this.head = null;
    this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function() {
    return this.length;
}

// isEmpty() : 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function() {
    return this.length === 0;
}

/* Test Code */
let cll = new CircularLinkedList();
let node;
console.log(cll);

node = new Node(123);
cll.head = node;
node.next = cll.head;
cll.length++;
console.log(cll);

node = new Node(456);
node.next = cll.head.next;
cll.head.next = node;
cll.length++;
console.log(cll);

// OUTPUT
// CircularLinkedList { head: null, length: 0 }

// CircularLinkedList {
//   head: <ref *1> Node { data: 123, next: [Circular *1] },
//   length: 1
// }

// CircularLinkedList {
//   head: <ref *1> Node {
//     data: 123,
//     next: Node { data: 456, next: [Circular *1] }
//   },
//   length: 2
// }


/* 원형 연결 리스트 구현 (2) */
// printNode() : 노드 출력
CircularLinkedList.prototype.printNode = function () {
    process.stdout.write("head -> ");
    if(this.length != 0) {
        process.stdout.write(`${this.head.data} -> `);
        for (let node = this.head.next; node != this.head; node = node.next) {
            process.stdout.write(`${node.data} -> `);
        }
    }
    console.log("null");
}

// append() : 연결 리스트 가장 끝에 노드 추가
CircularLinkedList.prototype.append = function (value) {
    let node = new Node(value),
        current = this.head;

    if (this.head === null) {
        this.head = node;
    } else {
        while (current.next != this.head) {
            current = current.next;
        }
        current.next = node;
    }
    node.next = this.head;

    this.length++;
}

/* Test Code */
let cll2 = new CircularLinkedList();

cll2.append(1);
cll2.append(10);
cll2.append(100);

console.log(cll2);
cll2.printNode();
console.log(cll2.size());

// OUTPUT
// CircularLinkedList {
//   head: Node { data: 1, next: Node { data: 10, next: [Node] } },
//   length: 3
// }
// head -> 1 -> 10 -> 100 -> null
// 3


/* 원형 연결 리스트 구현 (3) */
// insert() : position 위치에 노드 추가
CircularLinkedList.prototype.insert = function (value, position = 0) {
    if (position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value),
        current = this.head,
        index = 0,
        prev;

    if (position === 0) {
      node.next = current;

      if (this.isEmpty()) {
        current = node;
      } else {
        while (current.next != this.head) {
          current = current.next;
        }
      }

      this.head = node;
      current.next = this.head;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }
      node.next = current;
      prev.next = node;
      if (node.next == null) {
        node.next = this.head;
      }
    }
    this.length++;
    return true;
}

/* Test Code */
let cll3 = new CircularLinkedList();

cll3.insert(1);
cll3.insert(10);
cll3.insert(100);
cll3.printNode();

cll3.insert(2, 1);
cll3.insert(3, 3);
cll3.printNode();

// OUTPUT
// head -> 100 -> 10 -> 1 -> null
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

/* 원형 연결 리스트 구현 (4) */
// remove() : value 데이터를 찾아 노드 삭제
CircularLinkedList.prototype.remove = function(value) {
    let current = this.head,
        prev = current,
        data;
    
        while (current.data != value && current.next != this.head) {
            prev = current;
            current = current.next;
        }

        if (current.data != value) {
            return null;
        }

        data = current.data;
        if (current === this.head) {
            while(current.next != this.head) {
              current = current.next;
            }

            this.head = this.head.next;
            current.next = this.head;
        } else {
            prev.next = current.next;
        }

        this.length--;

        return data;
}

/* Test Code */
let cll4 = new CircularLinkedList();

cll4.insert(1);
cll4.insert(10);
cll4.insert(100);
cll4.insert(2, 1);
cll4.insert(3, 3);
cll4.printNode();

console.log(cll4.remove(1000));
cll4.printNode();
console.log(cll4.remove(1));
cll4.printNode();
console.log(cll4.remove(2));
cll4.printNode();
console.log(cll4.remove(100));
cll4.printNode();

console.log(cll4.size());


// OUTPUT
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

// null
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// 1
// head -> 100 -> 2 -> 10 -> 3 -> null
// 2
// head -> 100 -> 10 -> 3 -> null
// 100
// head -> 10 -> 3 -> null

// 2


/* 원형 연결 리스트 구현 (5) */
// removeAt() : position 위치 노드 삭제
CircularLinkedList.prototype.removeAt = function (position = 0) {
    if (position < 0 || position >= this.length) {
        return null;
    }

    let current = this.head,
        index = 0,
        prev,
        data;
    
    if (position === 0) {
        data = current.data;

        while (current.next != this.head) {
          current = current.next;
        }
        this.head = this.head.next;
        current.next = this.head;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        data = current.data;
        prev.next = current.next;
    }
    this.length--;

    return data;
}

/* Test Code */
let cll5 = new CircularLinkedList();

cll5.insert(1);
cll5.insert(10);
cll5.insert(100);
cll5.insert(2, 1);
cll5.insert(3, 3);
cll5.printNode();

console.log(cll5.removeAt(1000));
cll5.printNode();
console.log(cll5.removeAt(4));
cll5.printNode();
console.log(cll5.removeAt());
cll5.printNode();
console.log(cll5.removeAt(1));
cll5.printNode();

console.log(cll4.size());

// OUTPUT
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null

// null
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// 1
// head -> 100 -> 2 -> 10 -> 3 -> null
// 100
// head -> 2 -> 10 -> 3 -> null
// 10
// head -> 2 -> 3 -> null

// 2


/* 원형 연결 리스트 구현 (6) */
// indexOf() : value 값을 갖는 노드 위치 반환
CircularLinkedList.prototype.indexOf = function (value) {
    let current = this.head,
        index = 0;
    do {
      if (current.data === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    while (current != this.head);

    return -1;
}

// remove2() : indexOf + removeAt = remove
CircularLinkedList.prototype.remove2 = function (value) {
    let index = this.indexOf(value);
    return this.removeAt(index);
}

/* Test Code */
let cll6 = new CircularLinkedList();

cll6.insert(1);
cll6.insert(10);
cll6.insert(100);
cll6.insert(2, 1);
cll6.insert(3, 3);
cll6.printNode();

console.log(cll6.indexOf(1000));
console.log(cll6.indexOf(1));
console.log(cll6.indexOf(100));
console.log(cll6.indexOf(10));

console.log(cll6.remove2(1000));
cll6.printNode();
console.log(cll6.remove2(1));
cll6.printNode();
console.log(cll6.remove2(2));
cll6.printNode();
console.log(cll6.remove2(100));
cll6.printNode();

console.log(cll6.size());

// OUTPUT
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// -1
// 4
// 0
// 2
// null
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// 1
// head -> 100 -> 2 -> 10 -> 3 -> null
// 2
// head -> 100 -> 10 -> 3 -> null
// 100
// head -> 10 -> 3 -> null
// 2