// Sign Up --------------------------------------------------------------------
var signupScreenTitle = document.getElementById('signupScreenTitle');
var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPassword = document.getElementById('signUpPassword');
var signUpButton = document.getElementById('signUpButton');
var haveAccount = document.getElementById('haveAccount');
// -----------------------------------------------------------------------------



// Login------------------------------------------------------------------------
var loginScreenTitle = document.getElementById('loginScreenTitle');
var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');
var loginButton = document.getElementById('loginButton');
var haveNotAccount = document.getElementById('haveNotAccount');
// -----------------------------------------------------------------------------

var validAccountAlert = document.getElementById('validAccountAlert');


var authScreen = document.querySelector('.authScreen');
;

var homeScreen = document.querySelector('.homeScreen');
var homeUserNameTitle = document.querySelector('.homeScreen h1');

var usersList = [];


// when user open the website---------------------------------------------------------------
if (localStorage.getItem('users')) { usersList = JSON.parse(localStorage.getItem('users')); }
signUpDisplay();
// --------------------------------------------------------------------------------------------



signUpButton.addEventListener('click', function () {
    var user = {
        userName: signUpName.value,
        userEmail: signUpEmail.value,
        userPassword: signUpPassword.value,
    }

    if (validation(signUpEmail) && validation(signUpPassword) && validation(signUpName)) {
        usersList.push(user);
        localStorage.setItem('users', JSON.stringify(usersList));
        signUpHide();
        loginDisplay();

    }
    else {
        if (validation(signUpEmail) === false) window.alert('Your Email is wrong !\n Example : maihetemy@gmail.com')
        if (validation(signUpPassword) === false) window.alert('Your Password is wrong !\n Example : 123456789&Mm')
        if (validation(signUpName) === false) window.alert('Your name is wrong !\n Example : Mai Hetemy')

    }


});


loginButton.addEventListener('click', function () {

    var mogod = 0 , emailBs = 0, message = '';
    for (var i = 0; i < usersList.length; i++) {
        if (loginPassword.value === usersList[i].userPassword && loginEmail.value === usersList[i].userEmail) {
            console.log('mogooooooood');
            mogod = 1;
            home();
            break;
        }
        if (loginEmail.value === usersList[i].userEmail) {
            emailBs = 1;
        }
    }
    if (mogod === 0 && emailBs === 1) {message = 'elpassword 8alt';}
    if (mogod === 0 && emailBs === 0) {message = 'msh mogood';}
    console.log(message);
    validAccountAlert.innerHTML = `${message}`;
    validAccountAlert.classList.replace('d-none', 'd-block');
}

);

// function verifyLoginInputs(){
//     for(var i=0; i<usersList.length; i++){
//         if(loginPassword.value == usersList[i].userPassword && loginEmail.value == usersList[i].userEmail){
//             console.log('mogooooooood');
//             return true;
//         }
//         else if(){}
//         else if
//     }
//     return false;
// }

// -------------------------------------------------------------------
// sign up
function signUpDisplay() {
    signupScreenTitle.classList.replace('d-none', 'd-block');
    signUpName.classList.replace('d-none', 'd-block');
    signUpEmail.classList.replace('d-none', 'd-block');
    signUpPassword.classList.replace('d-none', 'd-block');
    signUpButton.classList.replace('d-none', 'd-block');
    haveAccount.classList.replace('d-none', 'd-block');
}
function signUpHide() {
    signupScreenTitle.classList.replace('d-block', 'd-none');
    signUpName.classList.replace('d-block', 'd-none');
    signUpEmail.classList.replace('d-block', 'd-none');
    signUpPassword.classList.replace('d-block', 'd-none');
    signUpButton.classList.replace('d-block', 'd-none');
    haveAccount.classList.replace('d-block', 'd-none');
}

// -------------------------------------------------------------------
// login
function loginDisplay() {
    loginScreenTitle.classList.replace('d-none', 'd-block');
    loginEmail.classList.replace('d-none', 'd-block');
    loginPassword.classList.replace('d-none', 'd-block');
    loginButton.classList.replace('d-none', 'd-block');
    haveNotAccount.classList.replace('d-none', 'd-block');
}
function loginHide() {
    loginScreenTitle.classList.replace('d-block', 'd-none');
    loginEmail.classList.replace('d-block', 'd-none');
    loginPassword.classList.replace('d-block', 'd-none');
    loginButton.classList.replace('d-block', 'd-none');
    haveNotAccount.classList.replace('d-block', 'd-none');
}


// -------------------------------------------------------------------
// home
function home() {
    homeScreen.classList.replace('d-none', 'd-flex');
    authScreen.classList.replace('d-flex', 'd-none');
    homeUserNameTitle.innerHTML = `Hello ${signUpName.value} !`
}

// ---------------------------------------------------------------------
// validation
function validation(user) {
    var regex = {
        signUpName: /^[A-Z]\w+ [A-Z]\w+$/,
        signUpPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        signUpEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }

    if (regex[user.id].test(user.value)) {
        user.nextElementSibling.classList.replace('d-block', 'd-none');
        user.classList.add('is-valid');
        user.classList.remove('is-invalid');
        console.log('yes');
        return true;
    }
    else {
        user.nextElementSibling.classList.replace('d-none', 'd-block');
        user.classList.add('is-invalid');
        user.classList.remove('is-valid');
        console.log('no');
        return false;
    }
}

