const h1Balance = document.getElementById('balance-value');
const depositBalance = document.getElementById('deposit');
const withdrawBalance = document.getElementById('withdraw');

class Balance{
  constructor(balance){
    this.balance = balance;
  }

  get deposit(){
    return h1Balance.innerHTML = `R$ ${this.balance}`
  }

  set deposit(value){
    this.balance += value;
    createPDeposit(value);
    loadNewBalance(this.balance);
    saveBalance(this.balance);
  }

  get withdraw(){
    return h1Balance.innerHTML = `R$ ${this.balance}`
  }

  set withdraw(value){
    if(value > this.balance || value === 0){
      alert('Invalid Withdraw. Withdrawal amount is higher than available');
      return;
    }

    this.balance -= value;
    createPWithdraw(value);
    loadNewBalance(this.balance);
    saveBalance(this.balance);
  }

}

function saveBalance(balance){
  let saveData = {
    balance: balance
  }

  localStorage.setItem('balance', JSON.stringify(saveData));
}

function loadNewBalance(text){
  const h1Balance = document.getElementById('balance-value');
  h1Balance.innerHTML = `R$ ${text}`
}

function createPDeposit(text){
  const p = document.createElement('p');
  const div = document.querySelector('.data');

  p.setAttribute('class', 'deposit-balance');

  p.innerHTML = `R$ ${text}`;
  div.appendChild(p);
}

function createPWithdraw(text){
  const p = document.createElement('p');
  const div = document.querySelector('.data');

  p.setAttribute('class', 'withdraw-balance');

  p.innerHTML = `R$ ${text}`;
  div.appendChild(p);
}


let dataPrice = JSON.parse(localStorage.getItem('balance'));
export default function attBalance(){
    if(JSON.parse(localStorage.getItem('balance')) === null){
        const test = new Balance(0);
        test.deposit;
            depositBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            
            if(Number(input.value) > 100000){
            alert('Invalid Deposit. Max: R$ 100000');
            return;
            }
        
            test.deposit = Number(input.value);
        });
        
        withdrawBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            test.withdraw = Number(input.value);
        });
    }
        
    else{
        const test = new Balance(dataPrice.balance);
        test.deposit;
        depositBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            
            if(Number(input.value) > 100000){
            alert('Invalid Deposit. Max: R$ 100000');
            return;
            }
        
            test.deposit = Number(input.value);
        });
        
        withdrawBalance.addEventListener('click', () => {
            const input = document.querySelector('.input-balance');
            test.withdraw = Number(input.value);
        });
    }
      
}