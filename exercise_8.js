'use strict'
let squared = function(number){
    return number*number
}
let arr =[1, 2, 3, 4, 5, 6, 7]

const map = function (functionToApply, array){
    let index = 0;
    array.forEach(function(element){
    array[index] = functionToApply(element)
    index++;
    });
}
map(squared, arr)
console.log(arr)

//map from javascript
let arr2 =[1, 2, 3, 4, 5, 6, 7]
const map1 = arr2.map(x => x * x);
console.log(map1);

