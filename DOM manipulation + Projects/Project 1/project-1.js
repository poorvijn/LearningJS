let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
    {
        quote:"Be yourself; everyone else is already taken.",
        person:"Oscar Wilde"
    },
    {
        quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        person:"Marilyn Monroe"
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        person:"Bernard M. Baruch"
    },
    {
        quote:"In three words I can sum up everything I've learned about life: it goes on.",
        person:"Robert Frost"
    },
    {
        quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        person:"J.K. Rowling"
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        person:"Mark Twain"
    },
];

btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});