'use strict'

let dolor = require("dolor")
let fs = require("fs")

fs.writeFile('./ELEN4014.txt', dolor.sentences(4), (err) => {
    if (err) throw err
})