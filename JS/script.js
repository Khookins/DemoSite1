//- Start Of Script -- Global Vars
var navLinks = document.getElementById("navLinks")
var reviewLarry = document.getElementsByClassName("review-item-wrapper")
var reviewLength = document.getElementsByClassName("review-item-wrapper").length
var reviewCount = 1
let timeoutID = null
const createDot = () =>
{
    const dot = document.createElement("div")
    dot.className = "dot"
    return dot
}
function getVisibleReviews(larry){
    const visibleReviews = []
    for (var i = 0; i < larry.length; i++){
        // Skip .Hidden Class
        if (larry.item(i).classList.contains("hidden")){
            continue
        }
        else{
            visibleReviews.push(larry.item(i))
        }
    }
    return visibleReviews
}
function getActiveReview(){

}
function setActiveReview(i, manual){
    var dotParent = document.getElementById("carousel-dots")
    var dotLarry = dotParent.childNodes

    // Interval Between Reviews
    timeoutID = setTimeout(() => {
        var manual = false;
        setActiveReview(reviewCount++ % getVisibleReviews(reviewLarry).length, false)
        console.log("Current Review: " + reviewCount)
    }, 5000 * (manual ? 0 : 1));

    for (var index = 0; index < getVisibleReviews(reviewLarry).length; index++){
        if (i == index){
            reviewLarry.item(index).classList.add("active")
            dotLarry.item(index).classList.add("active-dot")
        }
        else if(reviewLarry.item(index).classList.contains("active")){
            reviewLarry.item(index).classList.add("previously-active")
            reviewLarry.item(index).classList.remove("active")
            dotLarry.item(index).classList.remove("active-dot")
        }
        else{
            reviewLarry.item(index).classList.remove("active")
            dotLarry.item(index).classList.remove("active-dot")
            reviewLarry.item(index).classList.remove("previously-active")
        }
        // CREATE HELPER FUNCTIONS FOR GETTING ACTIVE REVIEWS!!!
        console.log("Review Larry Item: " + reviewLarry.item(index))
        console.log("Dot Larry Item: " + dotLarry.item(index))
        console.log("Current Index: " + index)
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
    // Use Getter Functions Instead For Review Count
    const dotIndex = i
    dot.onclick = (e) => {
        // Clearing Old Timeout
        clearTimeout(timeoutID)
        var manual = true;
        console.log("Cleared Timeout: " + timeoutID)
        setActiveReview(dotIndex, manual)
        reviewCount = dotIndex
    }
}

setActiveReview(0)


console.log("Amount Of Reviews: " + reviewLength)
