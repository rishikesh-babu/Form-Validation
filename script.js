// Name must not be less than 5 characters
// Email Id should have @ character in it
// Phone Number should not be 123456789 and must be a 10-digit number.
// Password cannot be ‘password’ or ‘name of the user’ or less than 8 characters.
// Password and confirm password should match
// Whenever any of the above are not met, the error should pop saying ex; “enter
// correct email” or “password is not strong” etc
// You can include more conditions and fields to the form validation but the above
// are mandatory.

const name = document.querySelector('.name-validation')
const email = document.querySelector('.email-validation')
const number = document.querySelector('.number-validation')
const password = document.querySelector('.password-validation')
const reenter = document.querySelector('.reenter-validation')


// function validate() {

//     const nameEnter = name.value
//     const emailEnter = email.value
//     const numberEnter = number.value
//     const passwordEnter = password.value
//     const reenterEnter = reenter.value

//     if (nameEnter.length < 5) {
//         document.querySelector('.name-error').innerText = 'Name not less than 5 character'
//         document.querySelector('.name-error').style.color = 'red'
//     } else {
//         document.querySelector('.name-error').innerText = 'Valid'
//         document.querySelector('.name-error').style.color = '#9cff9c'
//     }

//     if (emailEnter.search('@') == -1) {
//         document.querySelector('.email-error').innerText = 'Email must conttain @'
//         document.querySelector('.email-error').style.color = 'red'

//     } else {
//         document.querySelector('.email-error').innerText = 'Valid'
//         document.querySelector('.email-error').style.color = '#9cff9c'
//     }

//     if (numberEnter.length != 10) {
//         document.querySelector('.number-error').innerText = 'Number must contain 10 digits'
//         document.querySelector('.number-error').style.color = 'red'
//     console.log('hai')
//     } else {
//         document.querySelector('.number-error').innerText = 'Valid'
//         document.querySelector('.number-error').style.color = '#9cff9c'
//     } 

//     if (numberEnter == '') {
//         document.querySelector('.number-error').innerText = 'Enter vaid phone number'
//         document.querySelector('.number-error').style.color = 'red'
//     } else {
//         document.querySelector('.number-error').innerText = 'Valid'
//         document.querySelector('.number-error').style.color = '#9cff9c'
//     }

//     if (numberEnter == 123456789) {
//         document.querySelector('.number-error').innerText = 'Phone Number should not be 123456789 and must be a 10-digit number'
//         document.querySelector('.number-error').style.color = 'red'
//     }

//     if (passwordEnter == 'password') {
//         document.querySelector('.password-error').innerText = 'Password cannot be "password" '
//         document.querySelector('.password-error').style.color = 'red'
//     } else {
//         document.querySelector('.password-error').innerText = 'Valid'
//         document.querySelector('.password-error').style.color = '#9cff9c'
//     }

//     if (passwordEnter == nameEnter) {
//         document.querySelector('.password-error').innerText = 'Password cannot be "Users name" '
//         document.querySelector('.password-error').style.color = 'red'
//     } else {
//         document.querySelector('.password-error').innerText = 'Valid'
//         document.querySelector('.password-error').style.color = '#9cff9c'
//     }

//     if (passwordEnter == '') {
//         document.querySelector('.password-error').innerText = 'Password cannot be "NULL" '
//         document.querySelector('.password-error').style.color = 'red'
//     } else {
//         document.querySelector('.password-error').innerText = 'Valid'
//         document.querySelector('.password-error').style.color = '#9cff9c'
//     }

//     if (passwordEnter.length < 8) {
//         document.querySelector('.password-error').innerText = 'Password must not be less than 8'
//         document.querySelector('.password-error').style.color = 'red'
//     } else {
//         document.querySelector('.password-error.password-error').innerText = 'Valid'
//         document.querySelector('.password-error.password-error').style.color = '#9cff9c'
//     }

//     if (passwordEnter == '') {
//         document.querySelector('.password-error').innerText = 'Password cannot be NULL'
//         document.querySelector('.password-error').style.color = 'red'
//     } else {
//         document.querySelector('.password-error').innerText = 'Valid'
//         document.querySelector('.password-error').style.color = '#9cff9c'
//     }

//     if (reenterEnter != passwordEnter) {
//         document.querySelector('.reenter-error').innerText = 'Reenter the correct password'
//         document.querySelector('.reenter-error').style.color = 'red'
//     } else {
//         document.querySelector('.reenter-error').innerText = 'Valid'
//         document.querySelector('.reenter-error').style.color = '#9cff9c'
//     }
// }
function validate() {
    event.preventDefault(); 
    const nameEnter = name.value
    const emailEnter = email.value
    const numberEnter = number.value
    const passwordEnter = password.value
    const reenterEnter = reenter.value

    let nameValid, emailValid, numberValid, passwordValid, reenterValid
    //Validating name
    if (nameEnter == '') {
        document.querySelector('.name-error').innerText = 'Enter the name'
        document.querySelector('.name-error').style.color = 'red'
    } else if (nameEnter.length < 5) {
        document.querySelector('.name-error').innerText = 'Name must not be less than 5 character'
        document.querySelector('.name-error').style.color = 'red'

    } else {
        document.querySelector('.name-error').innerText = 'Valid'
        document.querySelector('.name-error').style.color = 'rgb(0 255 0)'
        nameValid = true
    }

    // Validating email
    if (emailEnter == '') {
        document.querySelector('.email-error').innerText = 'Enter email'
        document.querySelector('.email-error').style.color = 'red'
    } else if (emailEnter.search('@') == -1) {
        document.querySelector('.email-error').innerText = 'Enter valid Email'
        document.querySelector('.email-error').style.color = 'red'
    } else {
        document.querySelector('.email-error').innerText = 'Valid'
        document.querySelector('.email-error').style.color = 'rgb(0 255 0)'
        emailValid = true
    }

    // Validating number
    if (numberEnter == '') {
        document.querySelector('.number-error').innerText = 'Enter number'
        document.querySelector('.number-error').style.color = 'red'
    } else if (numberEnter == '123456789') {
        document.querySelector('.number-error').innerText = 'Number should not be "123456789"'
        document.querySelector('.number-error').style.color = 'red'
    } else if (numberEnter.length != 10) {
        document.querySelector('.number-error').innerText = 'Number should have 10 digit'
        document.querySelector('.number-error').style.color = 'red'
    } else {
        document.querySelector('.number-error').innerText = 'Valid'
        document.querySelector('.number-error').style.color = 'rgb(0 255 0)'
        numberValid = true
    } 

    // Validating password
    if (passwordEnter == '') {
        document.querySelector('.password-error').innerText = 'Enter passoword'
        document.querySelector('.password-error').style.color = 'red'
    } else if (passwordEnter == 'password') {
        document.querySelector('.password-error').innerText = 'Password must not be "password" '
        document.querySelector('.password-error').style.color = 'red'
    } else if (passwordEnter == nameEnter) {
        document.querySelector('.password-error').innerText = 'Password must not be your user name '
        document.querySelector('.password-error').style.color = 'red'
    } else if (passwordEnter.length < 8) {
        document.querySelector('.password-error').innerText = 'Password should not less than 8 character'
        document.querySelector('.password-error').style.color = 'red'
    } else {
        document.querySelector('.password-error').innerText = 'Valid'
        document.querySelector('.password-error').style.color = 'rgb(0 255 0)'
        passwordValid = true
    } 
    
    // Validating reenter
    if (reenterEnter == '') {
        document.querySelector('.reenter-error').innerText = 'Reenter password'
        document.querySelector('.reenter-error').style.color = 'red'
    } else if (reenterEnter != passwordEnter) {
        document.querySelector('.reenter-error').innerText = 'Password did not match'
        document.querySelector('.reenter-error').style.color = 'red'
    } else {
        document.querySelector('.reenter-error').innerText = 'Valid'
        document.querySelector('.reenter-error').style.color = 'rgb(0 255 0)'
        reenterValid = true
    }
    
    if (nameValid && emailValid && numberValid && passwordValid && reenterValid) {
        alert('Validation Conform successfully')  
        console.log('Hello World')    
    }
        
}