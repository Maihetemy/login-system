

var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPassword = document.getElementById('signUpPassword');
var signUpButton = document.getElementById('signUpButton');
var loginButton = document.getElementById('loginButton');

var title = document.querySelector('h1');
var signInAndUpSapn = document.getElementById('signInAndUpSapn');

var usersList = [];
if(localStorage.getItem('users')){
    usersList = JSON.parse(localStorage.getItem('users'));
}

// sign up event
signUpButton.addEventListener('click', function () {
    addUser();
    switchSpan();
    switchButtons();
    removeNameInput();
    changeTitleName();
});

function addUser() {
    var user = {
        userName: signUpName.value,
        userEmail: signUpEmail.value,
        userPassword: signUpPassword.value,
    }
    usersList.push(user);
    localStorage.setItem('users', JSON.stringify(usersList));
    console.log(usersList);
}

// ---------------------------------


// switch functions
function switchSpan() {
    signInAndUpSapn.innerHTML = 'sign up';
}
function switchButtons() {
    loginButton.classList.replace('d-none', 'd-block');
    signUpButton.classList.replace('d-block', 'd-none');
}
function removeNameInput(){
    signUpName.classList.replace('d-block', 'd-none');
}
function changeTitleName(){
    title.innerHTML = 'Smart login System';
}

