"task1"
const a = 1
const b = 2
console.log(a == b)
console.log(a != b)
console.log(a == a)
console.log(a != a)

let string = "text"
let string2 = "Text"
let c = 5
console.log(string == c)
console.log(string != c)
console.log(string == string2)
console.log(string == string)

let boolean = true
let boolean2 = false
let string3 = "true"
const d = 0
const e = 17
let string4 = ""
let string5 = "17"
console.log(boolean == string3)
console.log(boolean == boolean2)
console.log(boolean2 == d)
console.log(boolean2 === d)
console.log(string4 == boolean2)
console.log(string4 !== boolean2)
console.log(e === boolean)
console.log(string5 === boolean)

let num = undefined
const n = null
let arr = {}
console.log(num===n)
console.log(num==n)
console.log(arr===arr)

"task4"
let number = 15
number += 5
number *= 5
number /= 5
console.log(number)

"task5"
let p = "100"
console.log("100"*"2")
console.log(typeof Number(p))
console.log(+p)

"task6"
let t = 4
let r = 3
console.log((t+r)*(t-r) == (t^2)+(r^2))