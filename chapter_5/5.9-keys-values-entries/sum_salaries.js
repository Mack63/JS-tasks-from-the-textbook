let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

function sumSalaries(obj) {
    let sum = 0;
    for (let argument of Object.values(salaries)) {
        sum += argument;
    }
    return sum;
}