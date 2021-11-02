function validate() {
    // check login + pwd combo
    console.log('validated');
}


const loginBox = document.getElementById('loginBox');
const passwordBox = document.getElementById('passwordBox');

const loginButton = document.getElementById('bodyLoginButton');
// idk what to do here for now
loginButton.onclick = validate;

const registerButton = document.getElementById('bodyRegisterButton');
registerButton.onclick = () => location.href = '/usr/register.html';
