console.log("script.js loaded");

const headerImage = document.getElementById("header-image");

document.addEventListener("scroll", (event) => {
    document.getElementById("header-image").style.objectPosition = "0vw " + scrollY/3 + "px";
    document.getElementById("header-image").style.filter = "brightness(" + (60+(-scrollY/100)) + "%) blur(" + ((scrollY/100)) + "px)";
    //document.getElementById("actions_image").style.objectPosition = "0vw " + (-document.getElementById("actions_image").offsetWidth/6 + scrollY/5 + "px";
    // if(document.getElementById("actions_image").style.width > scrollY)
    // document.getElementById("actions_image").style.width = 10 + scrollY/100 + "vw";
    //document.getElementById("actions_image").style.filter = "blur(" + ((((scrollY*3) - document.getElementById("actions_image").style.top)/2000)) + "px)";
    if(document.getElementById("dock").getBoundingClientRect().y+document.querySelector(".header").getBoundingClientRect().height/2 <= scrollY) {
        // document.getElementById("dock").style.objectPosition = "0px " + scrollY*10 + "px";
        // document.getElementById("dock").getBoundingClientRect(). y = scrollY;
        document.getElementById("dock").style.position = "fixed";
        console.log("hey");
    }
});