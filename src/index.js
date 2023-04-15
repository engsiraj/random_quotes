let nam = `Random Quotes`
let des = `build with Vanila Javascript and design source`
document.getElementById("head").innerHTML = nam;
document.getElementById("text").innerHTML = des;

//random quotes app
let btn = document.getElementById('review_button');
let says = document.getElementById("review");
let person = document.getElementById('person');
let post = document.getElementById('position');
//reviews Data
const reviews = [{
    says: `this is said `,
    person: ``,
    post: ``,
},
{
    says: `also this is a qoute `,
    person: ` `,
    post: ``,
},
{
    says: `qoute no 3`,
    person: ``,
    post: ``,
},
{
    says: `qoute no 4`,
    person: ``,
    post: ``,
},
{
        says: `not a qoute`,
        person: ``,
        post: ``,
},
];
//reviews logic
const Review = () => {
    const random = Math.floor(Math.random() * reviews.length);
    says.innerText = reviews[random].says;
    person.innerText = reviews[random].person;
    post.innerText = reviews[random].post;
}
btn.addEventListener('click', Review);