// Variables

let btn = document.querySelector('#new-qoute');
let qoute = document.querySelector('.qoute');
let person = document.querySelector('.person');


const qoutes = [{
    qoute: "She was a beautiful dreamer. The kind of girl, who kept her head in the clouds, loved above the stars and left regret beneath the earth she walked on.",
    person: "- Robert M Drake"
}, {
    qoute: "When you have a dream, you've got to grab it and never let go.",
    person: "- Carol Burnett"
}, {
    qoute: "Nothing is impossible. The word itself says 'I'm possible!'",
    person: "- Audrey Hepburn"
}, {
    qoute: "There is nothing impossible to they who will try.",
    person: "- Alexander the Great"
}, {
    qoute: "The bad news is time flies. The good news is you're the pilot.",
    person: "- Michael Altshuler"
}, {
    qoute: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    person: "- Nicole Kidman"
}, {
    qoute: "Keep your face always toward the sunshine, and shadows will fall behind you.",
    person: "- Walt Whitman"
}, {
    qoute: "Death is the easy part, the hard part is living and knowing you could be so much more then you’re willing to be.",
    person: "- Robert M Drake"
}, ];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;

})