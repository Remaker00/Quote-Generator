let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector(".person");

const quotes = [{
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston Churchill`
},{
    quote:`"Love is composed of a single soul inhabiting two bodies."`,
    person:`Aristotle`
},{
    quote:`"The only true wisdom is in knowing you know nothing."`,
    person:`Socrates`
},{
    quote:`"Success is not how high you have climbed, but how you make a positive difference to the world."`,
    person:`Roy T. Bennett`
},{
    quote:`"A real friend is one who walks in when the rest of the world walks out."`,
    person:`Walter Winchell`
},{
    quote:`"Happiness is not something ready-made. It comes from your own actions."`,
    person:`Dalai Lama`
},{
    quote:`"The only true wisdom is knowing that you know nothing."`,
    person:`Bill S. Preston, Esquire`
},{
    quote:`"Change is the law of life. And those who look only to the past or present are certain to miss the future."`,
    person:`John F. Kennedy`
},{
    quote:`"Logic will get you from A to B. Imagination will take you everywhere."`,
    person:` Albert Einstein`
}];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

