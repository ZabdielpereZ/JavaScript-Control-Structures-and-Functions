let userComplete = {name: "John Doe", age: 30, email: "johndoe@example.com"};
let items1 = {name: 'PS5', price: 500};
let items2 = {name: 'Xbox Series X', price: 600};

// greeting user 
function userLogIn(name, email) {
    console.log("Welcome user: ", name," Email: ", email);
}
userLogIn("John Doe", "johndoe@example.com");


// Function to handle adding items to the cart
function addToCart(items1) {
    console.log("Item added to cart: ", items1.name, " Price: $",items1.price);
}
addToCart(items1);

// Function to handle adding items to the cart
function addToCart(items2) {
    console.log("Item added to cart: ", items2.name, " Price: $",items2.price);
}
addToCart(items2);

// Function to calculate total price of items in the cart
function calculateTotal(items1, items2) {
    let total = items1.price + items2.price;
    console.log("Total price: $", total);
}
calculateTotal(items1, items2);


/*
// creating bank account object and performing transactions
let arr = {account: 3000, withdrawing: 1100, depositing: 200};
// let withdrawal ={withdrawing: 1100};
// let deposit = {depositing: 200};
let {account, withdrawing, depositing} = arr;

console.log(account);
console.log(withdrawing);
console.log(depositing);
*/

let account = 3000;

// Create a function to handle depositing into a bank account
function deposit(balance, depositAmount) {
    balance += depositAmount;
    console.log("Deposited: $", depositAmount, " New Balance: $", balance);
}
deposit(account, 200);

// function to handle withdrawing from a bank account
function withdraw(balance, withdrawAmount) {
    balance -= withdrawAmount;
    console.log("Withdrew: $", withdrawAmount, " New Balance: $", balance);
    if(balance < 0) {
        console.log("Insufficient funds");
    }
    return balance;
}
withdraw(account, 1100);

/*
// creating a function displaying the current balance
function bankAccount(balance) {
    console.log(balance);
}
bankAccount(balance);

// creating a function performing withdrawal
*/

