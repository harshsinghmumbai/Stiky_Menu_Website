window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navbar");


    if (window.scrollY >= 135) {
        // console.log("ok");
        navbar.classList.add('Sticky');
        navbar.style.height="60px"
    }
    else{
        navbar.classList.remove('Sticky');
    }
});