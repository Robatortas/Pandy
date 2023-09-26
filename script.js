console.log("script.js loaded");

const headerImage = document.getElementById("header-image");

document.addEventListener("scroll", (event) => {
    //document.getElementById("header-image").style.objectPosition = "0vw " + -scrollY/10 + "px";
    document.getElementById("header-image").style.height = 80 + scrollY/100 + "vw";
    document.getElementById("header-image").style.filter = "brightness(" + (60+(scrollY/200)) + "%) blur(" + (3+(scrollY/100)) + "px)";
}); 