const add = function (a, b) { // function expression assigned to 'add'
return a + b
}

const result = add(2, 3) // execute the function
console.log(result)

const anotherAdd = add
console.log(anotherAdd(12, 4)) // execute it again