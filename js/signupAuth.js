// Onfocus

//let btn = document.getElementById('signupButton');

// window.addEventListener('DOMContentLoaded', hello);

// function hello() {
//     btn.setAttribute('disabled', 'true');
//     console.log('Hi');
// }

const signupForm = document.formName;

signupForm.addEventListener('submit', processForm);


const bizName = document.formName.bizName;
const bizEmail = document.formName.bizEmail;
const password = document.getElementById('password');
const cPassword = document.getElementById('cPassword');
const confirmPass = document.getElementById('confirmPass');
const passwordAuth = document.getElementById('passwordAuth');
const passwordSecure = document.getElementById('passwordSecure');
let lowerCase = window.getComputedStyle( document.getElementById('lowerCase'), '::before').getPropertyValue('color');
console.log(lowerCase);

bizName.addEventListener('focus', checkNameFocus);
bizName.addEventListener('input', checkNameInput);
bizEmail.addEventListener('focus', checkEmailFocus);
bizEmail.addEventListener('input', checkEmailInput);
password.addEventListener('focus', checkPasswordFocus);
password.addEventListener('input', checkPasswordInput);
cPassword.addEventListener('focus', checkConfirmPassFocus);
cPassword.addEventListener('input', checkConfirmPassInput);

function checkNameFocus() {
    if(bizName.value === '') bizName.style.border = '1px solid red';
}

function checkNameInput() {
    //hello.style.border = '1px solid red';
    if(bizName.value === '') {
        bizName.style.border = '1px solid red';
    }else {
        bizName.style.border = '1px solid green';
    }
    //if(bizName.value === '') bizName.style.border = '1px solid red';
}

function checkEmailFocus() {
    if(bizEmail.value === '') bizEmail.style.border = '1px solid red';
}

function checkEmailInput() {
    if(bizEmail.value === '') {
        bizEmail.style.border = '1px solid red';
    }else {
        bizEmail.style.border = '1px solid green';
    }
}

function checkPasswordFocus() {
    if(password.value === '') password.style.border = '1px solid red';
}

function checkPasswordInput() {
    if(password.value.length >= 8 ) {
        passwordSecure.style.display = 'block' 
        confirmPass.style.display = 'block'
        password.style.border = '1px solid green'
    }else {
        passwordSecure.style.display = 'none' 
        confirmPass.style.display = 'none';
        password.style.border = '1px solid red'
    } 
    //password.value === '' ? password.style.border = '1px solid red' : password.style.border = '1px solid green';
}


function checkConfirmPassFocus() {
    if(cPassword.value === '') cPassword.style.border = '1px solid red';
}

function checkConfirmPassInput() {
    if(cPassword.value === password.value) {
        cPassword.style.border = '1px solid green';
    }else {
        cPassword.style.border = '1px solid red';
    } 
    //cPassword.value === '' ? cPassword.style.border = '1px solid red' : cPassword.style.border = '1px solid green';
}



function hello1() {
    if(checkNameInput && checkEmailInput && checkPasswordInput) {
        console.log('Hello1');
        //btn.setAttribute('disabled', 'false');
    }else {
        let btn = document.getElementById('signupButton');
        btn.removeAttribute('disabled');
        
        
    }
}

hello1();




function processForm(e) {

}
