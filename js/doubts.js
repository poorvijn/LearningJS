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