/* 큐 최적화 */
// * 방식 개선
//   - enqueue/dequeque 방식을 push/ shift에서 index로 변경한다.
//   - shift는 O(n)이고, index는 O(1)이기 때문~!


// Queue() : 생성자 함수로 초기 데이터 설정
function Queue(array) {
    this.array = array ? array : [];
    this.tail = array ? array.length : 0;
    this.head = 0;
}

// enqueue() : 데이터 추가
Queue.prototype.enqueue = function(element) {
    return (this.array[this.tail++] = element);
}
// dequeue() : 데이터 삭제
Queue.prototype.dequeue = function() {
    if (this.tail === this.head) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
}

let queue = new Queue([1, 2]);
console.log(queue);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);

// OUTPUT
// Queue { array: [ 1, 2 ], tail: 2, head: 0 }
// Queue { array: [ 1, 2, 3, 4 ], tail: 4, head: 0 }
// 1
// 2
// Queue { array: [ <2 empty items>, 3, 4 ], tail: 4, head: 2 }



/* benchmark */
// 성능 측정
// enqueue/dequeque의 성능 비교 : push/ shift를 사용한 queue_1과 index를 사용한 queue_2 비교

let queue_1 = new Queue();
let queue_2 = new Queue();
const count = 100000;

function benchmark(queue, enqueue) {
    let start = Date.now();
    for (let i = 0; i < count; i++) {
        enqueue ? queue.enqueue() : queue.dequeue();
    }
    return Date.now - start;
}

console.log("enqueue queue_1 : " + benchmark(queue_1, 1) + "ms"); // queue_1 : 8ms
console.log("enqueue queue_2 : " + benchmark(queue_2, 1) + "ms"); // queue_2 : 6ms

console.log("enqueue queue_1 : " + benchmark(queue_1, 0) + "ms"); // queue_1 : 5695ms
console.log("enqueue queue_2 : " + benchmark(queue_2, 0) + "ms"); // queue_2 : 9ms

