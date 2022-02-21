const login = document.querySelector('.button-login');
const sign = document.querySelector('.button-sign');
const buttonReturn = document.querySelector('.button-return');
const buttonReturnSign = document.querySelector('.button-return-sign');
const buttonSignRegister = document.querySelector('.button-sign-register');

function functionRemoveLogin(){
    const inputButtons = document.querySelector('.input-buttons');
    const h1 = document.querySelector('.text-box-login h1');

    h1.innerHTML = 'Welcome Back';
    inputButtons.className = inputButtons.className.replace('show', 'hide');
    functionShowForm();
}

function functionShowForm(){
    const form = document.querySelector('.form-login');
    form.className = form.className.replace('hide', 'show');
    functionButtonReturn();
}

function functionButtonReturn(){
    buttonReturn.addEventListener('click', function(event){
        const inputButtons = document.querySelector('.input-buttons');
        const h1 = document.querySelector('.text-box-login h1');
        const form = document.querySelector('.form-login');

        form.className = form.className.replace('show', 'hide');
        inputButtons.className = inputButtons.className.replace('hide', 'show');
        h1.innerHTML = 'Hello, dear INVESTOR';
    });
}

function functionButtonReturnSign(){
    buttonReturnSign.addEventListener('click', function(event){
        const welcome = document.querySelector('.welcome');
        const input = document.querySelector('.box-form-sign');
        const boxImg = document.querySelector('.img-login');
        const boxLogin = document.querySelector('.box-login-js');

        boxLogin.className = boxLogin.className.replace('hide', 'show');
        boxImg.className = boxImg.className.replace('hide', 'show');
        input.className = input.className.replace('show', 'hide');
        welcome.className = welcome.className.replace('show', 'hide');
    });
}

function functionRemoveAllFromContainer(){
    const boxImg = document.querySelector('.img-login');
    const boxLogin = document.querySelector('.box-login-js');

    boxLogin.className = boxLogin.className.replace('show', 'hide');
    boxImg.className = boxImg.className.replace('show', 'hide');
    functionShowFormSign();
}

function functionShowFormSign(){
    const boxSign = document.querySelector('.box-form-sign');
    const welcome = document.querySelector('.welcome');

    boxSign.className = boxSign.className.replace('hide', 'show');
    welcome.className = welcome.className.replace('hide', 'show');
    functionButtonReturnSign();
}

function registerNewUser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let number = document.getElementById('number');
    let cpf = document.getElementById('cpf');
    let birth = document.getElementById('birth');

    let data = JSON.parse(localStorage.getItem('dataUsers'));

    if(data == null){
        localStorage.setItem('dataUsers', '[]');
        data = [];
    }

    let saveData = {
        name: name.value,
        email: email.value,
        password: password.value,
        number: number.value,
        cpf: cpf.value,
        birth: birth.value
    }

    data.push(saveData);
    localStorage.setItem('dataUsers', JSON.stringify(data));
}


buttonSignRegister.addEventListener('click', function(event){
    registerNewUser();
    alert('Conta Registrada Com Sucesso')
});

login.addEventListener('click', function(event){    
    functionRemoveLogin();
});

sign.addEventListener('click', function(event){
    functionRemoveAllFromContainer();
});

