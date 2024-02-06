//- Start Of Script
var navLinks = document.getElementById("navLinks")
var reviewLength = document.getElementsByClassName("review-item-wrapper").length
const dot = () =>
{
    const dot = document.createElement("div")
    dot.className = "dot"
    return dot
}

function showMenu(){
    navLinks.style.right = 0
}
function hideMenu(){
    navLinks.style.right = -200
}

for (var i = 0; i < reviewLength; i++){
    document.getElementById("carousel-dots").appendChild(dot())
    
}


console.log(reviewLength)