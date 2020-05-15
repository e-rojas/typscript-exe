/* E1.1
write a program that prints a greeting on your choice other than english */
function greeting(name) {
    if (name === "")
        return "Please give a name!!!";
    var greetings = [
        "Bonjour",
        "Hola",
        "Privet",
        "Ciao",
        "Guten Tag",
        "Ola",
    ];
    var randNum = Math.floor(Math.random() * greetings.length - 1);
    return greetings[randNum] + " " + name;
}
// console.log(greeting("Michael"));
// console.log(greeting("Michael"));
// console.log(greeting("Michael"));
// console.log(greeting(""));
/* E1.2
write a program that prints the sum of the first 10 positive integres */
function sumPosInt(from, to, action) {
    if (action === void 0) { action = "+"; }
    if (typeof from === "number" && typeof to === "number") {
        var arr = Array.from({ length: from + to - 1 }, function (v, k) { return k + from; });
        if (action === "+") {
            return arr.reduce(function (a, b) { return a + b; });
        }
        if (action === "*") {
            return arr.reduce(function (a, b) { return a * b; });
        }
    }
    return "Your values need to be a positive integer!!!!" + action;
}
// console.log(sumPosInt(1, 4));
// console.log(sumPosInt(1, 4, "*")); // 24
/* E1.4
write a program that prints the balance of an account after the 1st,2nd, and 3rd year with
initial balance of 1,000

*/
function printBalance(yearsLength, initialBalance, intererst) {
    var netInterest = (yearsLength * initialBalance * intererst) / 100;
    var result = yearsLength * initialBalance + netInterest;
    return "Your Balance at the end of the " + yearsLength + " year is :" + result.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
// console.log(printBalance(3, 1000, 15));
