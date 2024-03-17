let num = 42;
let firstName = 'Nikita';
const isProgrammer = true;

/*coment guide( разрешеные команды)!!!
// let $ = 'test'
// let $num = 42
// let nim$ = 42
// let _ = 49
// let _num = 12
// let num_ = 12
// let first_name = 'Elena'// можно писать но не кто не использует
// let myNum = 34 //  все пишут вот так после 1 слова, следующие слова с большой буквы
// firstName = 'Maximus';
 isProgrammer = false;
 */
/* Запрещеные команды 
let 42num = '11'
let my-num = 1
let const*/
// alert(firstName);
// console.log('Test:', num, isProgrammer,);
// console.log(num + 10);
// console.log(num - 10);
// console.log(num * 10);
// console.log(num / 10);
// console.log(num);
// let num2 = num + 10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);
// const fullName = firstName + ''+' Lishyha';
// console.log(fullName)
const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';

plusBtn.onclick = function () {
    action = '+';
};

minusBtn.onclick = function () {
    action = '-';
};
function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}
function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    // if (actionSymbol == '+') {
    //     return num1 + num2;
    // }
    // if (actionSymbol == '-') {
    //     return num1 - num2;
    // }
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}
submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);
    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value);
    //     printResult(sum);
    // } else if (action == '-') {
    //     const sum = Number(input1.value) - Number(input2.value);
    //     printResult(sum);
    // }
};
