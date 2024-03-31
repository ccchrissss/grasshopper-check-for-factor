function checkForFactor(base, factor) {
  
  return base % factor === 0 ?  true : false

}


console.log(checkForFactor(12, 7))


// params: base, factor     // a non-negative number, a positive number
// return: boolean
// e.g. checkForFactor(12, 7)
// results in false


// ternary expression to evalute if (base % factor === 0). if true return true : else return false