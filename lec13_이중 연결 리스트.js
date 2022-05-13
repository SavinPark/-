/* 이중 연결 리스트 ( Double Linked List ) */
// - 각 노드가 데이터와 포인터를 가지며, "두 줄로 연결"되어 있는 방식으로 데이터를 저장하는 자료구조

// - 구성요소
//   - Node 
//     - prev : 포인터, 이전 노드를 가리킴
//     - data : 어떠한 element의 값, 실제 가지고 있는 값
//     - next : 포인터, 다음 노드를 가리킴
//   - Linked List
//     [ Head ] --> [ Node ( prev | data | next )] --> [ Node ( prev | data | next )] --> [ Node ( prev | data | next )] --> null
//      null <-- [ Node ( prev | data | next )] <-- [ Node ( prev | data | next )] <-- [ Node ( prev | data | next )] <-- [ TAIL ]


/* 이중 연결 리스트 구현 (1) */
// Node() : data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

// LinkedList() : head, tail과 length를 가지고 있느 객체
function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

// size() : 연결 리스트 내 노드 개수 확인
DoubleLinkedList.prototype.size = function() {
    return this.length;
}

// isEmpty() : 객체 내 노드 존재 여부 파악
DoubleLinkedList.prototype.isEmpty = function() {
    return this.length === 0;
}

/* Test Code */
let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);

// OUTPUT
// DoubleLinkedList { head: null, tail: null, length: 0 }

// DoubleLinkedList {
//   head: Node { data: 123, next: null, prev: null },
//   tail: Node { data: 123, next: null, prev: null },
//   length: 1
// }

// DoubleLinkedList {
//   head: <ref *1> Node {
//     data: 123,
//     next: Node { data: 456, next: null, prev: [Circular *1] },
//     prev: null
//   },
//   tail: <ref *2> Node {
//     data: 456,
//     next: null,
//     prev: <ref *1> Node { data: 123, next: [Circular *2], prev: null }
//   },
//   length: 2
// }


/* 이중 연결 리스트 구현 (2) */
// printNode() : 노드 정방향 출력
DoubleLinkedList.prototype.printNode = function () {
    process.stdout.write("head -> ");
    for (let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }
    console.log("null");
}

// printNodeInverse() : 노드 역방향 출력
DoubleLinkedList.prototype.printNodeInverse = function () {
    let temp = [];
    process.stdout.write("null <- ");
    for (let node = this.tail; node != null; node = node.prev) {
        temp.push(node.data);
    }
    for (let i = temp.length - 1; i >= 0; i--) {
        process.stdout.write(`${temp[i]} <- `);
    }
    console.log("tail");
}

// append() : 연결 리스트 가장 끝에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
    let node = new Node(value);

    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    this.length++;
}

/* Test Code */
let dll2 = new DoubleLinkedList();

dll2.append(1);
dll2.append(10);
dll2.append(100);

dll2.printNode();
dll2.printNodeInverse();

// OUTPUT
// head -> 1 -> 10 -> 100 -> null
// null <- 1 <- 10 <- 100 <- tail


/* 이중 연결 리스트 구현 (3) */
// insert() : position 위치에 노드 추가
DoubleLinkedList.prototype.insert = function (value, position = 0) {
    if (position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value),
        current = this.head,
        index = 0,
        prev;

    if (position === 0) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = current;
            current.prev = node;
            this.head = node;
        } 
    } else if (position === this.length) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }

        node.next = current;
        prev.next = node;

        current.prev = node;
        node.prev = prev;
    }
    this.length++;
    return true;
}

/* Test Code */
let dll3 = new DoubleLinkedList();

dll3.insert(1);
dll3.insert(10);
dll3.insert(100);
dll3.printNode();
dll3.printNodeInverse();

dll3.insert(2, 1);
dll3.insert(3, 3);
dll3.printNode();
dll3.printNodeInverse();

// OUTPUT
// head -> 100 -> 10 -> 1 -> null
// null <- 100 <- 10 <- 1 <- tail
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail


/* 이중 연결 리스트 구현 (4) */
// remove() : value 데이터를 찾아 노드 삭제
DoubleLinkedList.prototype.remove = function(value) {
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
            if (this.length === 1) {
                this.tail = null;
            } else {
                this.head.prev = null;
            }
        } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            prev.next = current.next;
            current.next.prev = prev;
        }

        this.length--;

        return current.data;
}

/* Test Code */
let dll4 = new DoubleLinkedList();

dll4.insert(1);
dll4.insert(10);
dll4.insert(100);
dll4.insert(2, 1);
dll4.insert(3, 3);
dll4.printNode();
dll4.printNodeInverse();

console.log(dll4.remove(1000));
dll4.printNode();
dll4.printNodeInverse();
console.log(dll4.remove(1));
dll4.printNode();
dll4.printNodeInverse();
console.log(dll4.remove(2));
dll4.printNode();
dll4.printNodeInverse();
console.log(dll4.remove(100));
dll4.printNode();
dll4.printNodeInverse();

// OUTPUT
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

// null
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail

// 1
// head -> 100 -> 2 -> 10 -> 3 -> null
// null <- 100 <- 2 <- 10 <- 3 <- tail

// 2
// head -> 100 -> 10 -> 3 -> null
// null <- 100 <- 10 <- 3 <- tail

// 100
// head -> 10 -> 3 -> null
// null <- 10 <- 3 <- tail


/* 이중 연결 리스트 구현 (5) */
// removeAt() : position 위치 노드 삭제
DoubleLinkedList.prototype.removeAt = function (position = 0) {
    if (position < 0 || position >= this.length) {
        return null;
    }

    let current = this.head,
        index = 0,
        prev;
    
    if (position === 0) {
        this.head = current.next;
        if (this.length === 1) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }
    } else if (position === this.length - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        current.next.prev = prev;
    }
    this.length--;

    return current.data;
}

/* Test Code */
let dll5 = new DoubleLinkedList();

dll5.insert(1);
dll5.insert(10);
dll5.insert(100);
dll5.insert(2, 1);
dll5.insert(3, 3);
dll5.printNode();
dll5.printNodeInverse();

console.log(dll5.removeAt(1000));
dll5.printNode();
dll5.printNodeInverse();
console.log(dll5.removeAt(4));
dll5.printNode();
dll5.printNodeInverse();
console.log(dll5.removeAt());
dll5.printNode();
dll5.printNodeInverse();
console.log(dll5.removeAt(1));
dll5.printNode();
dll5.printNodeInverse();

// OUTPUT
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
// null
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
// 1
// head -> 100 -> 2 -> 10 -> 3 -> null
// null <- 100 <- 2 <- 10 <- 3 <- tail
// 100
// head -> 2 -> 10 -> 3 -> null
// null <- 2 <- 10 <- 3 <- tail
// 10
// head -> 2 -> 3 -> null
// null <- 2 <- 3 <- tail



/* 이중 연결 리스트 구현 (6) */
// indexOf() : value 값을 갖는 노드 위치 반환
DoubleLinkedList.prototype.indexOf = function (value) {
    let current = this.head,
        index = 0;

    while (current != null) {
        if (current.data === value) {
            return index;
        }

        index++;
        current = current.next;
    }
    return -1;
}

// remove2() : indexOf + removeAt = remove
DoubleLinkedList.prototype.remove2 = function (value) {
    let index = this.indexOf(value);
    return this.removeAt(index);
}

/* Test Code */
let dll6 = new DoubleLinkedList();

dll6.insert(1);
dll6.insert(10);
dll6.insert(100);
dll6.insert(2, 1);
dll6.insert(3, 3);
dll6.printNode();
dll6.printNodeInverse();

console.log(dll6.indexOf(1000));
console.log(dll6.indexOf(1));
console.log(dll6.indexOf(100));
console.log(dll6.indexOf(10));

console.log(dll6.remove(1000));
dll6.printNode();
dll6.printNodeInverse();
console.log(dll6.remove(1));
dll6.printNode();
dll6.printNodeInverse();
console.log(dll6.remove(2));
dll6.printNode();
dll6.printNodeInverse();
console.log(dll6.remove(100));
dll6.printNode();
dll6.printNodeInverse();

console.log(dll6.size());

// OUTPUT
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
// -1
// 4
// 0
// 2
// null
// head -> 100 -> 2 -> 10 -> 3 -> 1 -> null
// null <- 100 <- 2 <- 10 <- 3 <- 1 <- tail
// 1
// head -> 100 -> 2 -> 10 -> 3 -> null
// null <- 100 <- 2 <- 10 <- 3 <- tail
// 2
// head -> 100 -> 10 -> 3 -> null
// null <- 100 <- 10 <- 3 <- tail
// 100
// head -> 10 -> 3 -> null
// null <- 10 <- 3 <- tail
// 2