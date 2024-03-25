const btns = document.querySelectorAll('nav>ul>li');
const main = document.querySelector('#main');
const header = document.querySelector('header');
const articles = document.querySelectorAll('article');
const closeBtns = document.querySelectorAll('.close-btn');
const background = document.querySelector('#bg');
const textsDiv = document.querySelector('#typed-text');
const texts = textsDiv.children;


///// display typed.js texts
document.addEventListener("DOMContentLoaded", function() {
    for (let key of texts) {
        key.removeAttribute('hidden');
    }
});

var articleId = '';


///// header text
var typed = new Typed('#typed-result', {
    stringsElement: '#typed-text',
    typeSpeed: 40,
    startDelay: 1200,
    backSpeed: 40,
    backDelay: 800,
    onBegin: () => {
        for (let key of texts) {
            key.style.opacity = 1;  
        }
    },
    loop: true
}); 



///// navigation 
btns.forEach( (el, idx) => {
    
    // display article and hide header
    el.addEventListener( 'click', (e) => {

        header.style.display = 'none';
        articles[idx].style.display = 'initial';

        background.style.cursor = 'pointer';
        background.addEventListener( 'mouseover', () => {
            closeBtns[idx].style.backgroundColor = 'grey';
        })
        background.addEventListener( 'mouseout', () => {
            closeBtns[idx].style.backgroundColor = 'initial';
        })
        
        closeBtns[idx].addEventListener( 'mouseover', () => {
            closeBtns[idx].style.backgroundColor = 'grey';
        })
        closeBtns[idx].addEventListener( 'mouseout', () => {
            closeBtns[idx].style.backgroundColor = 'initial';
        })
    });

    // hide article and display header
    closeBtns[idx].addEventListener( 'click', () => closeArticle(idx));
    background.addEventListener( 'click', () => {
        closeArticle(idx);
    })
})

function closeArticle(idx) {
    header.style.display = 'initial';
    articles[idx].style.display = 'none';
}


///// Back to Top btn
const backToTopBtn = document.querySelector('#back-to-top-btn');

window.addEventListener( 'scroll', checkIfScrolled );
backToTopBtn.addEventListener( 'click', scrollToTop );


function checkIfScrolled () {
    if (window.scrollY > 50) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

function scrollToTop () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


///// Rock, Paper, Scissor
const signs = ['fa-hand-rock', 'fa-hand-paper', 'fa-hand-scissor'];