console.log("script.js loaded");

const headerImage = document.getElementById("header-image");

document.addEventListener("scroll", (event) => {
    document.getElementById("header-image").style.objectPosition = "0vw " + scrollY/3 + "px";
    //document.getElementById("header-image").style.height = 100 + scrollY/10 + "vh";
    document.getElementById("header-image").style.filter = "brightness(" + (60+(-scrollY/100)) + "%) blur(" + (3+(scrollY/100)) + "px)";
});

document.querySelectorAll("dockChild").forEach(v => {
    v.addEventListener("click", (event) => {
    });
});