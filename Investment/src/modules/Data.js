export function registerNewUser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let number = document.getElementById('number');
    let cpf = document.getElementById('cpf');
    let birth = document.getElementById('birth');

    let data = JSON.parse(localStorage.getItem('dataUsers')); //LENDO DADOS ARMAZENADOS

    if(data == null){
        alert('Por favor, tente Novamente')
        localStorage.setItem('dataUsers', '[]');
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
    localStorage.setItem('dataUsers', JSON.stringify(data)); //ARMAZENANDO DADOS
    
}

export let data = JSON.parse(localStorage.getItem('dataUsers')); //LENDO DADOS ARMAZENADOS