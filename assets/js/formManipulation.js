/*
    when "other" is chosen for "how did you hear about us" select
    show other text input and make it required
*/

{
    //assign relevant elements to variables
    const cntFrm = document.contactForm
    const hearAbout = cntFrm.elements.outreach
    const otherOutreach = cntFrm.elements.otherOutreach
    const otherOutreachLabel = otherOutreach.labels[0]

    //add event listener to fire when the select value changes
    hearAbout.addEventListener("change", checkOther)

    //event handler for select element change event
    function checkOther() {
        if(this.value == 4) {
            //other was selected, unhide other text input
            otherOutreach.classList.remove("hidden")
            otherOutreachLabel.classList.remove("hidden")
            //make text field required
            otherOutreach.required = true
            otherOutreach.focus()
        }
        else {
            //something else has been selected, hide other text input
            otherOutreach.classList.add("hidden")
            otherOutreachLabel.classList.add("hidden")
            otherOutreach.required = false
            otherOutreach.value = ""
        }
    }
}