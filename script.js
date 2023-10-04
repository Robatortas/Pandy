console.log("script.js loaded");

const headerImage = document.getElementById("header-image");

document.addEventListener("scroll", (event) => {
    document.getElementById("header-image").style.objectPosition = "0vw " + scrollY/3 + "px";
    document.getElementById("header-image").style.filter = "brightness(" + (60+(-scrollY/100)) + "%) blur(" + ((scrollY/100)) + "px)";
    
    document.getElementById("actions_image").style.objectPosition = "0vw " + (-document.getElementById("actions_image").offsetWidth/3 + scrollY/3) + "px";
    document.getElementById("actions_image").style.filter = "blur(" + (-document.getElementById("actions_image").offsetWidth/3 + (scrollY/100)) + "px)";
});