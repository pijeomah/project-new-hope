const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageTransitions(){
    //on button click, hide other buttons
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function (){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn'
        }
    )}
}
pageTransitions();