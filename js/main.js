

var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPassword = document.getElementById('signUpPassword');
var signUpButton = document.getElementById('signUpButton');

var usersList = [];
// console.log(signUpName.value);
// console.log(signUpEmail.value);
// console.log(signUpPassword.value);

signUpButton.addEventListener('click', function () {addUser();});

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
