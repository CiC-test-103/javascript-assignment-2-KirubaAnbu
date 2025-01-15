// 🏦 Bank and Account System 
// Bank Class: Manages multiple accounts
class Bank  {
    constructor() {
      
        this.accounts = []; // Stores all accounts in the bank
    }

    // Add methods here:
    // Example: createAccount(name, initialDeposit)
    createAccount(name, initialDeposit){
        
        let newAccount = new Account(name,initialDeposit);
        this.accounts.push(newAccount);
        console.log(`Account created for ${name}`);

        return newAccount;

    }


}

// Account Class: Represents a single user's account
class Account {
   
    constructor(name, balance = 0) {
        this.name = name; // Account holder's name
        this.balance = balance; // Initial balance (default is 0)
        this.transactionHistory = []; // Keeps a record of all transactions
    }
    
    // Add methods here:
    // Example: deposit(amount) 
    // example data to be stored in transactionHistory { transactionType: 'Deposit', amount: 500 }

    deposit(amount) 
    {
        if(amount>0){
            this.balance+=amount;
            this.transactionHistory.push({transactionType: 'Deposit', amount: amount });

            console.log(`The Amount ${amount}  Deposited / Credited for ${this.name}.Your new Balance Amount : ${this.balance}`);

        }else{
            console.log(`  ${this.name}: Your deposit amount must be greater than 0. Your Current Balance Amount : ${this.balance}`);
        }

    }

    
    // Example: withdraw(amount)
     // example data to be stored in transactionHistory { transactionType: 'Withdrawal', amount: 200 }

    withdraw(amount){
        if(amount>0 && amount <=this.balance){
            this.balance-=amount;
            this.transactionHistory.push({ transactionType: 'Withdrawal', amount: amount });

            console.log(`The Amount ${amount}  withdrawed / Debted  for ${this.name}.Your new Balance Amount : ${this.balance}`);
        }else if(amount >this.balance){
            console.log(`Insufficient funds : ${this.name} : Your withdraw amount must be less than  Amount : ${this.balance}`);

        }else {
            console.log(` ${this.name}: Your withdraw amount must be greater than 0. Your Current Balance Amount : ${this.balance}`);
        }

        

    }
   
    // Example: transfer(amount, recipientAccount)
    // example data to be stored in transactionHistory:
    // for account sending { transactionType: 'Transfer', amount: 300, to: recipientName }
    // for account recieving { transactionType: 'Received', amount: 300, from: senderName }
    transfer(amount, recipientAccount){
        if(amount>0 && amount <=this.balance){
           
            this.balance-=amount;
            this.transactionHistory.push({ transactionType: 'Transfer', amount: amount , to: recipientAccount.name });
            
            recipientAccount.balance+=amount;
            recipientAccount.transactionHistory.push({ transactionType: 'Received', amount: amount , from: this.name });

            console.log(`The Amount ${amount}  Transfered from ${this.name} to ${recipientAccount.name} .Your new Balance Amount : ${this.balance}`);
        }else if(amount >this.balance){
            console.log(`Insufficient funds : Your Transfer amount must be less than  your Balance Amount : ${this.balance}`);

        }else {
            console.log(`Your Transfer amount must be greater than 0. Your Current Balance Amount : ${this.balance}`);
        }



    }
    
    
    // Example: checkBalance()
    checkBalance(){

        console.log(` ${this.name} 's Account Balance Amount ${this.balance}`);
       
        return this.balance;
        
    }
}

//<-------------------------------DO NOT WRITE BELOW THIS LINE------------------------------>

// Function to test bank operations
function testBankOperations() {
    const bank = new Bank();

    // Create new accounts
    const johnAccount = bank.createAccount('John Doe', 1000);
    const janeAccount = bank.createAccount('Jane Doe', 500);
    console.log('Accounts created:', johnAccount, janeAccount);

    // Perform some operations on John's account
    johnAccount.deposit(500);
    johnAccount.withdraw(200);

    // Perform a transfer from John to Jane
    johnAccount.transfer(300, janeAccount);

    // Check balances
    const johnFinalBalance = johnAccount.checkBalance();
    const janeFinalBalance = janeAccount.checkBalance();
    console.log('John\'s balance:', johnFinalBalance);
    console.log('Jane\'s balance:', janeFinalBalance);

    // Return balances for testing
    return { 
        johnFinalBalance, 
        janeFinalBalance, 
        johnTransactionHistory: johnAccount.transactionHistory, 
        janeTransactionHistory: janeAccount.transactionHistory 
    };
}

module.exports = testBankOperations;

//<-------------------------------DO NOT WRITE ABOVE THIS LINE------------------------------>


console.log(testBankOperations());
