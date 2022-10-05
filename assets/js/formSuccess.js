//get the form fields from the query string (GET request)
let formFields = new URLSearchParams(window.location.search)

//insert the name the user gave into the thank you message
document.querySelector("#yourName").innerHTML = 
    `${formFields.get("fname")} ${formFields.get("lname")}`

//generate a custom message based on outreach value
let msg = ""
let outreach = formFields.get("outreach")

if(outreach == 1) {// word of mouth
    msg = "Please talk to your friends and help us get the word out."
} else if(outreach == 2) { //podcast
    msg = "Keep listening!"
} else if(outreach == 3) { //youtube
    msg = "Keep watching!"
} else { //other or no answer
    msg = "Your engagement is appreciated."
}

//display custom message
document.querySelector("#msg").innerHTML = msg
