import mortfunc from './mortgage.js';

// console.log("Hello World");

// console.log(document.loandata);
// console.log(document.loandata.calc);

document.loandata.calc.addEventListener("click", e => {
    // console.log("Inside click event listener.");
});

document.loandata.principal.addEventListener("change", e => {
    // console.log("Inside principal change event listener.");
});


document.loandata.addEventListener("change", e => {
    // console.log("Inside loandata change event listener.");
    calc();
});


function calc() {
    let  result = mortfunc.calcLoan(
        document.loandata.principal.value,
        document.loandata.interest.value,
        document.loandata.years.value);

    document.loandata.payment.value = result.monthly;
    document.loandata.total.value = result.total;
    document.loandata.totalinterest.value = result.interest;
}