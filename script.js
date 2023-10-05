console.log("script.js loaded");

const headerImage = document.getElementById("header-image");

document.addEventListener("scroll", (event) => {
    document.getElementById("header-image").style.objectPosition = "0vw " + scrollY/3 + "px";
    document.getElementById("header-image").style.filter = "brightness(" + (60+(-scrollY/100)) + "%) blur(" + ((scrollY/100)) + "px)";

    if(scrollY !== 0) {
        document.getElementById("dock").style.backgroundColor = "rgba(180, 180, 180, " + 0 + ")";
        document.getElementById("dock").style.opacity = "1"; 
    } else document.getElementById("dock").style.opacity = "0"; 
    document.getElementById("dock").style.transition = "all 0.5s";
    document.getElementById("dock").style.backgroundColor = "rgba(180, 180, 180, " + 0.4 + ")"
});