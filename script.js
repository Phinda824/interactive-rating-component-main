let container = document.querySelector('.section');
let selectNo = document.querySelectorAll('.no_ratings .number');
let submit = document.querySelector('button');
let number = document.querySelector('span');

for(let i=0; i >= selectNo.length; i++){
    selectNo[i].addEventListener('click', () =>{
        rate.innerHtml = selectNo[i];
    });
    
}
