// 프로토타입 ( Prototype )
// - 어떠한 객체가 만들어지기 위해 객체의 모태가 되는 원형
// - 자바스크립트는 일반적인 객체지향 언어와는 다르게, 프로토타입을 이용한 복사 (Cloning)을 통해 새로운 객체 생성
// - 일반적인 객체 생성 방식 : 속성은 생성자, 메서드는 프로토타입에서 정의

// 생성자에서 속성 정의
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype을 이용한 Person 메서드 정의
Person.prototype.isAdult = function() {
  return this.age > 18;
}

// 객체 생성 
const p1 = new Person("Amy", 26);
const p2 = new Person("James", 18);


console.log(p1);
console.log(p2);

console.log(p1.isAdult());
console.log(p2.isAdult());

/* OUPUT
   Person { name: 'Amy', age: 26 }
   Person { name: 'James', age: 18 }
   true
   false
*/