//validate contact form
const cntFrm = document.contactForm
const errs = document.querySelector("#errs")

cntFrm.elements.submit.addEventListener("click", contactValidation)

function contactValidation(event) {
    //initialize an empty array for errors
    let errors = []
    for(let i=0; i<cntFrm.elements.length; i++) {
        //loop through all the fields to check their validity
        let field = cntFrm.elements[i]

        //check required fields
        if(field.required && field.value == "") {
            //field is required and not currently set
            if(field.labels) {
                //use the label to specify which field needs to be filled
                errors.push(`Please enter a value for your ${field.labels[0].innerHTML}`)
            }
            else {
                errors.push("You are missing some information.")
            }
        }

        //check email validity
        if(field.type == "email" && !field.value.match(/^\S+@\S+\.\S+$/)) {
            //email field and value does not match a regex check for nonwhitespace@nonwhitespace.nonwhitespace
            errors.push("Please enter a valid email address")
        }
    }

    if(errors.length > 0) {
        //if there are any errors, print them in the errs element
        errs.innerHTML = errors.join("<br>")
        //unhide errs
        errs.classList.remove("hidden")
        //prevent default HTML form validation
        event.preventDefault()
    }
}