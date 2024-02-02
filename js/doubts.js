// a=10;
// console.log(10) --> allowed

// var b = 10;
// var b = 100; --> only 1 'b' variable present in global space

// function x()
// {
//     a=0
//     setTimeout(function(){
//         console.log(a);
//     },3000)
//     a++;
// }
// x(); --> the callback function points to the reference of 'a', not its value, so it prints 1, not 0

// const users = [
//     {firstName:"poorvi", lastName:"nayak", age:20},
//     {firstName:"aditi", lastName:"bhoomireddy", age:31},
//     {firstName:"rithika", lastName:"bhat", age:22},
// ];

// const output = users.reduce(function(acc,curr){
//     if(curr.age<30)
//         acc.push(curr.firstName);
//     return acc;
// },[]);

// console.log(output);

// function x(y)
// {
//     y(5);
// };

// x(function y(a){
//     console.log(++a);
// });

// y(6); --> Uncaught reference error, y is not defined, because y is defined in the execution context of x only,
// and not in the global scope

// const GITHUB_API = "https://api.github.com/users/";
// user = fetch(GITHUB_API);
// console.log(user);
// user.then(function (){
//     console.log("Promise resolved");
// })
// console.log("Entered here");  --> JS does not wait for the promise to be fulfilled and 
// executes this statement and then once the promise is resolved, it executes the statement within the function
// mentioned in the promise


const radius  = [1,2,3,4];
const area = function(radius){
    return Math.PI*radius*radius;
}
const diameter = function(radius){
    return 2*radius;
}
const circumference = function(radius){
    return 2*Math.PI*radius;
}

Array.prototype.calculate = function(logic){
    const output=[];
    for(let i=0;i<radius.length;i++)
        output.push(logic(radius[i]));
    return output;
}

console.log(radius.calculate(area));