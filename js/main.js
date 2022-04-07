// scroll to top
window.addEventListener('scroll' , scrolltop);
const scrollbtn = document.querySelector(".scrollTop");

scrollbtn.addEventListener('click' , (e) =>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});

function scrolltop(e){
    if ( window.scrollY >= 1200){
        scrollbtn.classList.add("active");
    }
    else if ( window.scrollY < 1200){
        scrollbtn.classList.remove("active");
    }
}

// nav bar

const bars = document.querySelector(".bars_mobile");
const navBar = document.querySelector(".navbar");

bars.addEventListener('click', togglenav);

function togglenav (e){
    navBar.classList.toggle("mobile");

}