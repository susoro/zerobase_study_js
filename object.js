/*
자바스크립트(JavaScript) 객체는 데이터와 기능을 하나로 묶는 데이터 구조입니다. 
객체는 키-값 쌍의 모음으로, 키는 문자열이고 값은 임의의 데이터 타입일 수 있습니다. 
자바스크립트 객체에 대해 좀 더 구체적으로 설명하겠습니다.

복합적인 데이터를 표현할때 사용한다.
*/

// 1. 객체 리터럴을 사용한 생성
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
// /여기서 person 객체는 name, age 프로퍼티와 greet 메서드를 가집니다.

// 2. 생성자 함수를 사용한 생성
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

let person1 = new Person("John", 30);
let person2 = new Person("Jane", 25);


// 프로퍼티 접근하는 방법은 2가지

// 1. 점 표기법:
console.log(person.name); // John
// 2. 대괄호 표기법:
console.log(person["name"]); // John


// 프로퍼티 추가 및 삭제
// 1. 추가
person.job = "Developer";
console.log(person.job); // Developer


// 2. 삭제
delete person.age;
console.log(person.age); // undefined


// 매서드
/*
객체의 메서드는 객체 내의 함수로, 객체의 데이터를 조작하거나 특정 동작을 수행할 수 있습니다. 
this 키워드는 메서드 내에서 객체 자신을 참조합니다.
*/
let car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() {
        console.log(this.brand + " " + this.model + " is starting.");
    }
};

car.start(); // Toyota Corolla is starting.


// 객체의 내장 메서드
// 자바스크립트 객체는 다양한 내장 메서드를 제공하며, 이를 통해 객체를 쉽게 조작할 수 있습니다.

// Object.keys(): 객체의 모든 키를 배열로 반환합니다.
let keys = Object.keys(person);
console.log(keys); // ["name", "greet", "job"]

// Object.values(): 객체의 모든 값을 배열로 반환합니다.
let values = Object.values(person);
console.log(values); // ["John", function, "Developer"]


// Object.entries(): 객체의 키-값 쌍을 배열의 배열 형태로 반환합니다.
let entries = Object.entries(person);
console.log(entries); // [["name", "John"], ["greet", function], ["job", "Developer"]]


// Object.assign(): 하나 이상의 소스 객체로부터 타겟 객체로 프로퍼티를 복사합니다.
let target = {};
let source = {a: 1, b: 2};
Object.assign(target, source);
console.log(target); // {a: 1, b: 2}



// 상속과 프로토타입

/*
자바스크립트는 프로토타입 기반 상속을 사용합니다. 
객체는 프로토타입이라는 또 다른 객체를 가리킬 수 있으며, 
프로토타입 체인을 통해 상속이 이루어집니다. */

let animal = {
    eat: function() {
        console.log("The animal is eating.");
    }
};

let dog = Object.create(animal);
dog.bark = function() {
    console.log("The dog is barking.");
};

dog.eat(); // The animal is eating.
dog.bark(); // The dog is barking.


/*
이 예제에서 dog 객체는 animal 객체를 프로토타입으로 가지며, 
eat 메서드를 상속받아 사용할 수 있습니다.

자바스크립트 객체는 유연하고 강력한 기능을 제공하여 다양한 용도로 활용될 수 있습니다. 
이를 이해하고 활용하면 자바스크립트 프로그래밍의 기본과 응용을 더 잘 이해할 수 있습니다 */

