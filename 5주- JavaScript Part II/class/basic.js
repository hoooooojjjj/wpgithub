// 클래스 정의하기
class Person{
    constructor(name, age){ // 생성자 = 클래스를 호출해서 객체를 만들때 초기값을 넣어주는 용도
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`안녕하세요, ${this.name}입니다.`)
    }
}
// 객체 생성하기
const person1 = new Person("Kim", 24); // 초기값을 넣어줌
console.log(person1.name); // Kim
person1.sayHello(); // 안녕하세요, Kim입니다.

// 객체 생성하기
const person2 = new Person("Jim", 24);
console.log(person2.name); // Kim
person2.sayHello(); // 안녕하세요, Kim입니다.