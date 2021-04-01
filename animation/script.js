console.log("merhaba");
console.log(123);
console.log(true);
console.log([1,2,3]);

let kab= new Date();

console.log(kab);
console.log(kab.getDate());

let dizi=['mahamat','kaab','tchad'];
console.log(dizi);
console.log(dizi.length);

const somme= (first,seconde,third) => {
    return  first*seconde*third;
}
const  result= somme(2,3,4);
console.log(result);

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }
}
const newAccount = new BankAccount("Will Alexander", 500);
newAccount.showBalance();
