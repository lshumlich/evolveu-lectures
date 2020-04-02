import fetchFunc from './fetch.js';

idProblem.addEventListener('click', e => {
    console.log("before call");
    fetchFunc.showDelayProblem();
    console.log("after call");
});


idSolution.addEventListener('click', e => {
    console.log("before call");
    fetchFunc.showDelaySolution();
    console.log("after call");
});

addEventListener('load', () => {
    // fetchFunc.workWithData();
    console.log("We should have loaded.")
});
