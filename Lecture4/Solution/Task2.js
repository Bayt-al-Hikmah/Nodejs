class BankAccount {
    #accountNumber;
    #ownerName;
    #balance;
    #transactions;

    constructor(accountNumber, ownerName, initialBalance = 0) {
        if (initialBalance < 0) throw new Error("Initial balance cannot be negative");
        this.#accountNumber = accountNumber;
        this.#ownerName = ownerName;
        this.#balance = initialBalance;
        this.#transactions = [];
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Deposit amount must be positive");
        this.#balance += amount;
        this.#transactions.push({ type: "deposit", amount, date: new Date() });
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Withdrawal amount must be positive");
        if (amount > this.#balance) throw new Error("Insufficient funds");
        this.#balance -= amount;
        this.#transactions.push({ type: "withdrawal", amount, date: new Date() });
    }

    getBalance() {
        return this.#balance;
    }

    getStatement() {
        console.log(`Statement for ${this.#ownerName} (${this.#accountNumber}):`);
        console.log('Current balance:', this.#balance);
        console.log('Transactions:');
        this.#transactions.forEach(t => {
            console.log(`- ${t.date.toISOString()}: ${t.type} ${t.amount}`);
        });
    }

    static transfer(sourceAccount, targetAccount, amount) {
        try {
            sourceAccount.withdraw(amount);
            targetAccount.deposit(amount);
            console.log(`Transfer of ${amount} successful`);
        } catch (error) {
            console.error('Transfer failed:', error.message);
            throw error;
        }
    }
}

try {
    const acc1 = new BankAccount('123', 'Alice', 1000);
    const acc2 = new BankAccount('456', 'Bob');
    
    acc1.deposit(500);
    acc1.withdraw(200);
    BankAccount.transfer(acc1, acc2, 300);
    
    acc1.getStatement();
    acc2.getStatement();
} catch (error) {
    console.error('Bank error:', error.message);
}