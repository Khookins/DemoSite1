//- Start Of Script
var navLinks = document.getElementById("navLinks")
var reviewLarry = document.getElementsByClassName("review-item-wrapper")
var reviewLength = document.getElementsByClassName("review-item-wrapper").length
const createDot = () =>
{
    const dot = document.createElement("div")
    dot.className = "dot"
    return dot
}
function setActiveReview(i){
    var dotParent = document.getElementById("carousel-dots")
    var dotLarry = dotParent.childNodes
    for (var index = 0; index < reviewLarry.length; index++){
        if (i == index){
            reviewLarry.item(index).classList.add("active")
            dotLarry.item(index).classList.add("active-dot")
        }
        else{
            reviewLarry.item(index).classList.remove("active")
            dotLarry.item(index).classList.remove("active-dot")
        }
        // CREATE HELPER FUNCTIONS FOR GETTING ACTIVE REVIEWS!!!
        console.log(reviewLarry.item(index))
        console.log(dotLarry.item(index))
        console.log(index)
    }
}

function showMenu(){
    navLinks.style.right = 0
}
function hideMenu(){
    navLinks.style.right = -200
}

for (var i = 0; i < reviewLength; i++){
    // Skip .Hidden Class
    if (reviewLarry.item(i).classList.contains("hidden")){
        continue
    }
    // Create Dot
    var dot = createDot()
    document.getElementById("carousel-dots").appendChild(dot)
    // Activate Dot If Current Review Is Active
    if (reviewLarry.item(i).classList.contains("active")){
        dot.className += " active-dot" 
    }
}
var reviewCount = 1

setInterval(() => {
    setActiveReview(reviewCount++ %reviewLarry.length)
    console.log("Current Review: " + reviewCount)
}, 25000);

console.log("Amount Of Reviews: " + reviewLength)
