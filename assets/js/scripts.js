
// function for handling a button click
const clickAlert = () => {
    alert("Someone clicked a button. Was it you?")
}

// get the element
const hoverableP = document.querySelector("#hoverableP")

// register and event handler using the event property
// event handler is an anonymous arrow function
hoverableP.onmouseover = (e) => {
    document.body.style.backgroundColor = "lightblue"
}

// named event handler function
const returnToInitialBackground = function(e) {
    document.body.style.backgroundColor = "initial";
}

// register event handler using event property and named function
hoverableP.onmouseout = returnToInitialBackground

// get the element
const showMeASecret = document.querySelector("#showMeASecret")
 
// named event handler function toggles a class on the secret
function showSecret(e) {
    document.querySelector("#secret").classList.toggle("secret")
}
 
// register event handlers using event listeners
showMeASecret.addEventListener("mousedown", showSecret)
showMeASecret.addEventListener("mouseup", showSecret)

// get the element
const btn = document.querySelector("#clickbutton")

// register an event handler using event listener and an anonymous function
btn.addEventListener("click", function(e) {
    //show event details
    console.log("e: ", e)
    console.log("this: ", this)
})