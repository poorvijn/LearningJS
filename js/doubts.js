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

const users = [
    {firstName:"poorvi", lastName:"nayak", age:20},
    {firstName:"aditi", lastName:"bhoomireddy", age:31},
    {firstName:"rithika", lastName:"bhat", age:22},
];

const output = users.filter((x)=>x.age<30).map((x)=>x.firstName);

console.log(output);