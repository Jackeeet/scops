function validate() {
    // check if login is taken
    // check if pwd1 === pwd2
    // do something 
    console.log('validated');
}

function setListeners(){
    registerButton.onclick = validate;
    loginButton.onclick = () => location.href = '/usr/login.html';
}

const surnameBox = document.getElementById('surnameBox');
const nameBox = document.getElementById('nameBox');
const patronymBox = document.getElementById('patronymBox');
const loginBox = document.getElementById('loginBox');
const pwdBox1 = document.getElementById('passwordBox1');
const pwdBox2 = document.getElementById('passwordBox2');
const registerButton = document.getElementById('bodyRegisterButton');
const loginButton = document.getElementById('bodyLoginButton');


window.onload = () => {
    setListeners();
}

// console.log only works on second click for some reason, idk honestly