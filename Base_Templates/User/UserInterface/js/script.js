// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
// const navBarLinks = document.querySelectorAll('.navbar-nav a');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
// changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// navBarLinks.forEach((link) => {
//     link.addEventListener('click', function(){
//         navBarLinks.forEach((link) => {
//             link.style.color = "black";
//         });
//         link.style.color = "blue";
//     });
// });

function page1(){
    
    var tl = gsap.timeline();

    tl.from('.navbar-brand', {
        scale: 0.1,
        opacity: 0,
        duration: 0.5,
        delay: 0.2
    })
    tl.from('.nav-item', {
        scale: 0.5,
        opacity: 0,
        duration: 0.1,
        stagger: 0.1
    })
    tl.from('.search-bar-box ', {
        opacity: 0,
        scale: 0.5,
    })
    tl.from('.header-inner-left',{
        opacity: 0,
        x: -100,
        duration: 0.3,
        ease: "back"
    })
    tl.from('.header-inner-right img', {
        opacity: 0,
        x: 100,
        duration: 0.3,
        ease: "back"
    }, "-=0.5")
}

if (!sessionStorage.getItem("page1Animated")) {
    page1();
    sessionStorage.setItem("page1Animated", "true");
}