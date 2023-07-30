
// let num1;
// let num2;
// let operator;

// const operations = {
//     "+" : function add(num1, num2) {
//         return num1 + num2;
//     },
//     "-" : function subtract(num1, num2) {
//         return num1 - num2;
//     },
//     "/" : function divide(num1, num2) {
//         return num1 / num2;
//     },
//     "*" : function multuply(num1, num2) {
//         return num1 * num2;
//     },
// }


// function operate(list, operator) {
//    return list.reduce(operations[operator]);
// }

// console.log(operate([4,2], "+"));

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function (e) {
    console.log(e.target.value);
}))





