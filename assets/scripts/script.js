const tipRange = document.querySelector('#tip-range');
const splitRange = document.querySelector('#splitRange');
const billTotal = document.querySelector("#billTotal");
const tipTop = document.querySelector("#tipTop");

//DOM Txt's
const tipNum = document.querySelector('#tipNum');
const splitNum = document.querySelector('#splitNum');
const tipAndBill = document.querySelector('#tipAndBill');
const tipBottom = document.querySelector('#tipBottom');
const splitBills = document.querySelector('#splitBills');

//Variables
let tipPercent = 0.01
let splitPeople = 1
let bill = 0

//Event listeners
tipRange.addEventListener('input', function () {


    if (this.value < 10) {
        tipPercent = Number(`0.0${this.value}`)

    } else {
        tipPercent = this.value * 0.01
    }
    tipNum.innerHTML = `${this.value}%`
    calcExpenses()
})

splitRange.addEventListener('input', function () {
    splitPeople = this.value
    splitNum.innerHTML = `${splitPeople}`
    calcExpenses()
})

billTotal.addEventListener('input', function () {
    bill = Number(this.value)
    console.log(bill);
    calcExpenses()
})

//calc expenses function

function calcExpenses() {
    let totalExpense = bill + (bill * tipPercent)
    let tip = bill * tipPercent
    let splitTip = tip / splitPeople
    let splitBill = totalExpense / splitPeople
    tipTop.innerHTML = `${parseInt(tip).toFixed(2)}`
    tipAndBill.innerHTML = `${parseInt(totalExpense).toFixed(2)}`
    tipBottom.innerHTML = `${parseInt(splitTip).toFixed(2)}`
    splitBills.innerHTML = `${parseInt(splitBill).toFixed(2)}`

}