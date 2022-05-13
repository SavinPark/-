// 스택 (Stack)
// - 나중에 넣은 데이터가 먼저 나오는 LIFO (Last In First Out) 기반의 선형 자료구조

/* 스택 구현 (1) */
// Stack() : 생성자 함수로 초기 데이터 설정
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
}

// isEmpty() : 객체 내 데이터 존재 여부 파악
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
}

let stack1 = new Stack([1, 2, 3]);

console.log(stack1);

let data = stack1.getBuffer();
console.log(data === stack1.array);
console.log(data);

console.log(stack1.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));

// OUTPUT
// Stack { array: [ 1, 2, 3 ] }
// false
// [ 1, 2, 3 ]
// false
// {
//   constructor: {
//     value: [Function: Stack],
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


/* 스택 구현 (2) */
// push() : 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
}
// pop() : 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
}
// peek() : 가장 끝 데이터 변환
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
}

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
}

let stack2 = new Stack([1, 2]);

console.log(stack2);
stack2.push(3);
console.log(stack2);

console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.peek());
console.log(stack2.size());

// OUPUT
// Stack { array: [ 1, 2 ] }
// Stack { array: [ 1, 2, 3 ] }
// 3
// 2
// 1
// 1


/* 스택 구현 (3) */
// indexOf() : 데이터 위치 값 조회
Stack.prototype.indexOf = function (element, position = 0) {
  // case 1
  // return this.array.indexOf(element, position);
  // case 2
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return i;
  }
  return -1;
}

// includes() : 데이터 존재 여부 확인
Stack.prototype.includes = function (element, position = 0) {
  // case 1
  // return this.array.includes(element, position);
  // case 2
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return true;
  }
  return false;
} 

let stack3 = new Stack([1, 2, 3]);

console.log(stack3.indexOf(1));
console.log(stack3.indexOf(1, 2));
console.log(stack3.includes(1));
console.log(stack3.includes(1, 2));

// OUTPUT
// 0
// -1
// true
// false 