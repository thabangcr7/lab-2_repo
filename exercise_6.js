'use strict'

let account = {
    name: 'thabang',
    balance: 0.00,
    deposit_: 0.00,
    withdrawal_: 0.00,
    deposit: function(amount){
        this.balance +=amount;
        this.deposit_+=amount;
    },
    withdraw: function(amount){
        if(this.balance!=0&&this.balance>=amount){
            this.balance-=amount;
            this.withdrawal_+=amount;
        }
    },
    summary: function(){
        return `This account has a balance of R ${this.balance}. There have been deposits totalling R ${this.deposit_} and withdrawals totalling R ${this.withdrawal_}.`
    }
}

account.deposit(300);
account.withdraw(100);
console.log(account.summary());