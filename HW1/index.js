"1Task"
console.log("My first debug");
"2Task"
let age = 17;
let petName = "Lucky";
console.log(age, petName)
"4Task"
let Number = 10;
let string = "asdfg";
let boolean = true;
console.log(typeof 10)
console.log(typeof true)
console.log(typeof "asdfg")
"5Task"
const student = {name: "{Ваше имя}", surname: "{Ваша фамилия}", isActive: true}
console.log(typeof student.isActive);

"6Task"
let fruits = ["apple", "pear", "orange", "grapes", "cherry"]
let numbers = [1, 2, 3, 4, 5]
let students = [
    {name: "John", surname: "Smith", isActive: true}, 
    {name: "Max", surname: "Smith", isActive: true}, 
    {name: "Sally", surname: "Smith", isActive: true}, 
    {name: "Dan", surname: "Smith", isActive: true}, 
    {name: "Bob", surname: "Smith", isActive: true}
]
"taskWithStar1"
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function returnFirstItem(arr) {
    return arr[arr.length - 10];
  }
  function returnLastItem(arr) {
    return arr[arr.length - 1];
  }
console.log(returnFirstItem(array), returnLastItem(array))  
"taskWithStar2"
console.log("студент:", student.name, student.surname, "сейчас активен:", student.isActive)