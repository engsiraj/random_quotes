let nam = `Random Quotes`
let des = `build with Vanila Javascript and design source`
document.getElementById("head").innerHTML = nam;
document.getElementById("text").innerHTML = des;

//random quotes app
let btn = document.getElementById('review_button');
let quote = document.getElementById("review");
let person = document.getElementById('person');
let date = document.getElementById('position');
//reviews Data
const reviews = [
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        person: "Thomas Edison",
        date: "1879"
    },
    {
        quote: "Be the change you wish to see in the world.",
        person: "Mahatma Gandhi",
        date: "1913"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        person: "Winston Churchill",
        date: "1941"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        person: "Wayne Gretzky",
        date: "1983"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs",
        date: "2005"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt",
        date: "1902"
    },
    {
        quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        person: "Jimmy Dean",
        date: "1970"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela",
        date: "1994"
    },
    {
        quote: "If you want to achieve greatness stop asking for permission.",
        person: "Unknown",
        date: "Unknown"
    },
    {
        quote: "I have a dream that one day this nation will rise up and live out the true meaning of its creed.",
        person: "Martin Luther King Jr.",
        date: "1963"
    },
    {
        quote: "The only true wisdom is in knowing you know nothing.",
        person: "Socrates",
        date: "Unknown"
    },
    {
        quote: "Life is 10% what happens to you and 90% how you react to it.",
        person: "Charles R. Swindoll",
        date: "Unknown"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        person: "Alan Kay",
        date: "1971"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        person: "Robert Frost",
        date: "1953"
    },
    {
        quote: "I am not a product of my circumstances. I am a product of my decisions.",
        person: "Stephen Covey",
        date: "Unknown"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt",
        date: "1933"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        person: "Albert Einstein",
        date: "Unknown"
    },
];

//reviews logic
const Review = () => {
    const random = Math.floor(Math.random() * reviews.length);
    quote.innerText = reviews[random].quote;
    person.innerText = reviews[random].person;
    date.innerText = reviews[random].date;
}
btn.addEventListener('click', Review);