'use strict'

let numbers = [76, 55.7, 89, 37.5, 61]
numbers.push(19) //[76, 55.7, 89, 37.5, 61, 19]
numbers.unshift(61)//[61, 76, 55.7, 89, 37.5, 61, 19]
numbers[1] = 12 //[61, 12, 55.7, 89, 37.5, 61, 19]
numbers.splice(3, 1, 99)//[61, 12, 55.7, 99, 37.5, 61, 19]
console.log(numbers)//displays [61, 12, 55.7, 99, 37.5, 61, 19]
console.log(numbers[7])//displays undefined
