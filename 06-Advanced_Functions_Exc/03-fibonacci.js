function fibonacci() {
    let num1 = 0;
    let num2 = 1;



    return function () {
        let result = num1 + num2;
        num1 = num2;
        num2 = result;
        return num1;
    }
}
let fib = fibonacci();
console.log(fib());//1
console.log(fib());//1
console.log(fib());//2
console.log(fib());//3
console.log(fib());//5