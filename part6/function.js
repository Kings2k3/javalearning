// function maketea(typeoftea) {
//     return `making ${typeoftea}`;
// }

// let teaorder = maketea('lemon tea');
// console.log(teaorder);



// const calculateTotal = (price, quantity) => {
//     return price * quantity
// }

// let totalcost = calculateTotal(499 * 100)
// console.log(totalcost);



function maketea(typeofTea) { 
   return `maketea: ${typeofTea}`;
}

function processTeaorder(teafunction) {
    return teafunction('earl grey');
}

let order = processTeaorder(maketea);
console.log(order);


function createTeaMaker(name) {
  return function (teatype) {
    return `making ${teatype}`
  }
}

let teamaker = createTeaMaker('kings');
let result = teamaker('green tea')
console.log(result);

