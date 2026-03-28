//Task 1
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

//  const numbers = [1, 2, 3, 4, 5]
//  const newNumbers = numbers.map(num => num * num);
// console.log(newNumbers);
// or
// const newNumbers = [];
// numbers.forEach(num => newNumbers.push(num * num));
//console.log(newNumbers);



//Task 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const newArray = data.flatMap((obj) => obj.values);
// console.log(newArray);


//Task 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//     { name: 'John', age: 27 },
//     { name: 'Jane', age: 31 },
//     { name: 'Bob', age: 19 },
// ];

// const checkAge = (array) => array.some((item) => item.age < 20);
// const res = checkAge(people);
// console.log(res);

//Task 4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// console.log(numbers.every((num) => num % 2 === 0));


//Task 5
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const oddNum = numbers.find((num) => num % 2 != 0);
// console.log("oddNumber", oddNum);

//Task 6
// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortArr = numbersArray.toSorted((a, b) => a - b);
// console.log(sortArr);


//Task 7
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

//  const stringArray = ['banana', 'orange', 'apple', 'pear'];

// console.log(stringArray.toSorted((a, b) => a.localeCompare(b)));


//Task 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const sortedByAge = users.toSorted((a, b) => a.age - b.age);
// console.log(sortedByAge);



//Task 9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const newArray = user.filter((el) => el.age > 20);
// console.log(newArray);


//Task 10
// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = (array) => array.reduce((acc, item) => acc + item, 0);
// const result = sum(numbers);
// console.log(result);   //15



//Task 11

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
//  операції над числом за допомогою методів класу, підтримуючи  
// ланцюжковий виклик (method chaining).
//  //
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// const calc = new Calculator();

// class Calculator{
//     constructor() {
//         this.result = 0;
//     }
//     number(num) {
//         this.result = num;
//         return this;
//     }
//     getResult() {
//         return this.result;
//     }
//     add(num) {
//         this.result += num;
//         return this;
//     }
//     subtract(num) {
//         this.result -= num;
//         return this;
//     }
//     divide(num) {
//         if (num === 0) {
//             throw new Error("неможливість ділення");
//         }
//         this.result /= num;
//         return this;
//     }
//     multiply(num) {
//         this.result *= num;
//         return this;
//     }

// }
// const calculator = new Calculator();
// console.log(calculator);

// const result = calculator
// .number(10)    // Встановлюємо початкове значення 10
// .add(5)     // Додаємо 5 (10 + 5 = 15)
// .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
// .multiply(4)  // Множимо на 4 (12 * 4 = 48)
// .divide(2)   // Ділимо на 2 (48 / 2 = 24)
// .getResult(); // Отримуємо результат: 24


// console.log(result); // 24


//Task 12
// Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
 
// class Client{
//     #login;
//     #email;
//     constructor(login,email){
//         this.#login = login;
//         this.#email = email;
//     }
//     get getLogin() {
//         return this.#login;
//     }
//     set changeLogin(newLogin) {
//         this.#login = newLogin;
//     }

//     get getEmail() {
//         return this.#email;
//     }
//     set changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }
// const client = new Client("Login", "login@gmail.com");

// client.login = "12343";
// console.log(client);

// client.changeEmail = "login99@gmail.com";
// console.log(client, getEmail);

// client.changeLogin = "12345";
// console.log(client.getLogin)
 

 //Task 13
   //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person{
//     constructor(name, age, gender, email) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.email = email;
//     }
//     getDetails() {
//         return {
//             name: this.name,
//             age: this.age,
//             gender: this.gender,
//             email: this.email,
//         }
//     }
// }

// const person= new Person("John",30,"male","john@gmail.com")
// console.log(person.getDetails());


// class Employee extends Person{ 
//     constructor(name, age, gender, email, salary, department) {
//         super(name, age, gender, email); // передаємо вручну
//         this.salary = salary;
//         this.department = department;
//     }
//     getEmployeeDetails(){
//         return {
//             ...this.getDetails(),
//             salary: this.salary,
//            department:this.department,
//     }
//     }
// }
 
// const employee = new Employee(5000, "developer","John", 30, "male", "john@gmail.com")
// console.log(employee.getEmployeeDetails());