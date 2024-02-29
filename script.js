let select_No = document.querySelectorAll('.no_ratings .number');
let button = document.querySelector('button');
let rate_no = document.querySelector('.rate');
let card_section = document.querySelector('.section');
let thank_card = document.querySelector('.thank-you');

let rate = null;

select_No.forEach((ratings) =>{
    ratings.addEventListener('click', (e) =>{
        let checked_no = document.querySelector('.checked');
        if(checked_no){
            checked_no.classList.remove("checked");
        }
        let card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
    })
})

button.addEventListener('click', () => {
    if(rate){
        rate_no.innerText = rate;
        card_section.classList.add("hidden");
        thank_card.classList.remove("hidden");
    }
})
