import registerNewUser from "./Data";
export default function domMain(){
    const login = document.querySelector('.button-login');
    const buttonLoginOpen = document.querySelector('.button-login-open');
    const sign = document.querySelector('.button-sign');
    const buttonSignRegister = document.querySelector('.button-sign-register');
    const buttonReturn = document.querySelector('.button-return');
    const buttonReturnSign = document.querySelector('.button-return-sign');
    const cpf = document.querySelector('.form-sign-cpf');
    const phone = document.getElementById('number');
    
    phone.addEventListener('keypress', function(){
        let phoneLength = phone.value.length;
        
        if(phoneLength === 0){
            phone.value += '(';
        }
        else if(phoneLength === 3){
            phone.value += ') ';
        }
        else if(phoneLength === 5){
            phone.value += ' ';
        }
        else if(phoneLength === 10){
            phone.value += '-';
        }
    
    });
    
    cpf.addEventListener('keypress', function(){
        let cpfLength = cpf.value.length;
        if(cpfLength === 3 || cpfLength === 7){
            cpf.value += '.';
        }
        else if(cpfLength === 11){
            cpf.value += '-';
        }
    
    });
    
    
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
    
    function emailVerify(textEmail){ //VERIFICA EMAILS EXISTENTES
        let data = JSON.parse(localStorage.getItem('dataUsers'));
    
        const emailVerify = data.filter(function(email){
            return email.email === textEmail;
        });
    
        return emailVerify;
    }
    
    function passwordVerify(textPassword){ //VERIFICA SENHAS EXISTENTES
        let data = JSON.parse(localStorage.getItem('dataUsers'));
    
        const passwordVerify = data.filter(function(password){
            return password.password === textPassword;
        });
    
        return passwordVerify;
    }
    
    function loginVerify(textEmail, textPassword){
        const email = emailVerify(textEmail);
        const password = passwordVerify(textPassword);
    
        function loopEmail(){
            for(let index of email){
                return index.name;
            }
        }
    
        function loopPassword(){
            for(let indexPass of password){
                return indexPass.name;
            }
        }
    
        if(loopEmail() === loopPassword()){
            alert('Login Efetuado Com Sucesso');
        }
        else{
            alert('Email ou Senha Incorreto');  
        }
    }
    
    buttonLoginOpen.addEventListener('click', () => {
        let email = document.querySelector('.email-login');
        let password = document.querySelector('.password-login');
        loginVerify(email.value, password.value);
    });
    
    buttonSignRegister.addEventListener('click', (event) => {
        registerNewUser();
        alert('Conta Registrada Com Sucesso')
    });
    
    
    
    login.addEventListener('click', (event) => functionRemoveLogin());
    sign.addEventListener('click', (event) => functionRemoveAllFromContainer());
    
    
}

