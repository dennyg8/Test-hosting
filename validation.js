/* Project 4
Name: Dennis Giesbrecht
Date: August 1
Description: Company website  */


/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	// Hides all error elements on the page
	hideErrors();

	// Determine if the form has errors
	if (formHasErrors()) {
		// Prevents the form from submitting
		e.preventDefault();

		// When using onSubmit="validate()" in markup, returning false would prevent
		// the form from submitting
		return false;
	}

	// When using onSubmit="validate()" in markup, returning true would allow
	// the form to submit
	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e  A reference to the event object
 * return   True allows the reset to happen; False prevents
 *          the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear order?')) {
		// Ensure all error fields are hidden
		hideErrors();

		// Set focus to the first text field on the page
		document.getElementById("name").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}

/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
	// Determine if any items are in the cart
	// When the cart has not items, submission of form is halted
// Declaring flags that will be used later

    let errorFlag = false; //The general error flag, true when at least one error was found
    let selectFlag = false; //Flag to show whether an error has been given focus/select or not, true when focus/select has been given

	// Validation of name
	let name = document.getElementById("name");

	if (!formFieldHasInput(name)) {
		// name is not valid
		// Show name error
		document.getElementById("name_error").style.display = "block";
		errorFlag = true;

		// If no errors have been detected yet, set focus to this field and select all text in it
		if (!selectFlag) {
			name.focus();
			name.select();
			selectFlag = true;
		}
	}
    
    // Validation of phonenumber
	let phonenumber = document.getElementById("phonenumber");

	if (!formFieldHasInput(phonenumber)) {
		//phonenumber is not valid
		//Show phonenumber error
		document.getElementById("phonenumber_error").style.display = "block";
		errorFlag = true;

		// If no errors have been detected yet, set focus to this field and select all text in it
		if (!selectFlag) {
			phonenumber.focus();
			phonenumber.select();
			selectFlag = true;
		}
	}
    
    // Validation of phonenumber
	let regex = new RegExp(/^\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^\d{10}$|^1\s\d{3}(-|\s)\d{3}(-|\s)\d{4}$|^(1\s?)?\(\d{3}\)(\s|\-)?\d{3}\-\d{4}$/);

	let phonenumberformat = document.getElementById("phonenumber");

	if (!regex.test(phonenumberformat.value)) {
		// phonenumber is not valid
		// Show phonenumber error
		document.getElementById("phonenumberformat_error").style.display = "block";
		errorFlag = true;

		// If no errors have been detected yet, set focus to this field and select all text in it
		if (!selectFlag) {
			phonenumberformat.focus();
			phonenumberformat.select();
			selectFlag = true;
		}
	}
     
    // Validation of email
	let email = document.getElementById("email");

	if (!formFieldHasInput(email)) {
		//email is not valid
		//Show email error
		document.getElementById("email_error").style.display = "block";
		errorFlag = true;

		// If no errors have been detected yet, set focus to this field and select all text in it
		if (!selectFlag) {
			email.focus();
			email.select();
			selectFlag = true;
		}
	}

    // Validation of email
	let regex2 = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

	let emailAddress = document.getElementById("email");

	if (!regex2.test(emailAddress.value)) {
		// email is not valid
		// Show email error
		document.getElementById("emailformat_error").style.display = "block";
		errorFlag = true;

		// If no errors have been detected yet, set focus to this field and select all text in it
		if (!selectFlag) {
			emailAddress.focus();
			emailAddress.select();
			selectFlag = true;
		}
	}

    return errorFlag;
}

/*
 * Hides all of the error elements.
 */
function hideErrors() {
	// Get an array of error elements
	let error = document.getElementsByClassName("error");

	// Loop through each element in the error array
	for (let i = 0; i < error.length; i++) {
		// Hide the error element by setting it's display style to "none"
		error[i].style.display = "none";
	}
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
function formFieldHasInput(fieldElement) {
	// Check if the text field has a value
	if (fieldElement.value == null || fieldElement.value.trim() == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

/*
 * Handles the load event of the document.
 */
function load() {

	// Hide all errors upon function load
	hideErrors();

    // Add event listener for the form submit
	document.getElementById("orderform").addEventListener("submit", validate);

    // Add event linstner for sustom form submit
	document.getElementById("orderform").addEventListener("reset", resetForm)
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);