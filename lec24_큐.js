// 큐 (Queue)
// - 먼저 넣은 데이터가 먼저 나오는 FIFO (First In First Out) 기반의 선형 자료구조

/* 큐 구현 (1) */
// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array) {
    this.array = array ? array : [];
}

// getBuffer() : 객체 내 데이터 셋 반환
Queue.prototype.getBuffer = function() {
    return this.array.slice();
}

// isEmpty() : 객체 내 데이터 존재 여부 파악
Queue.prototype.isEmpty = function () {
    return this.array.length == 0;
}

let queue1 = new Queue([1, 2, 3]);

console.log(queue1);

let data = queue1.getBuffer();
console.log(data === queue1.array);
console.log(data);

console.log(queue1.isEmpty());

console.log(Object.getOwnPropertyDescriptors(Queue.prototype));

// OUPUT
// Queue { array: [ 1, 2, 3 ] }
// false
// [ 1, 2, 3 ]
// false
// {
//   constructor: {
//     value: [Function: Queue],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   getBuffer: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   isEmpty: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }


/* 큐 구현 (2) */
// enqueue() : 데이터 추가
Queue.prototype.enqueue = function(element) {
    return this.array.push(element);
}
// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function() {
    return this.array.shift();
}

let queue2 = new Queue([1, 2]);

console.log(queue2);

queue2.enqueue(3);
queue2.enqueue(4);
console.log(queue2);

console.log(queue2.dequeue());
console.log(queue2.dequeue());
console.log(queue2);

// OUTPUT
// Queue { array: [ 1, 2 ] }
// Queue { array: [ 1, 2, 3, 4 ] }
// 1
// 2
// Queue { array: [ 3, 4 ] }


/* 큐 구현 (3) */
// front() : 가장 첫 데이터 반환
Queue.prototype.front = function() {
    return this.array.length == 0 ? undefined : this.array[0];
}
// size() : 큐 내 데이터 개수 확인
Queue.prototype.size = function () {
    return this.array.length;
}
// clear() : 큐 초기화
Queue.prototype.clear = function () {
    this.array = [];
}

let queue3 = new Queue([1, 2, 3, 4]);

queue3.dequeue();
console.log(queue3.front());
console.log(queue3);

console.log(queue3.size());
queue3.clear();
console.log(queue3);
console.log(queue3.size());

// OUTPUT
// 2
// Queue { array: [ 2, 3, 4 ] }
// 3
// Queue { array: [] }
// 0