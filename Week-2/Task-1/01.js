// Write a function that takes an input of them prices and returns the total bill
function calculateTotalBill(prices){
    if(!Array.isArray(prices) || prices.length === 0) {
        return "Please provide a valid array of prices. ";
     }
     let total = prices.reduce((sum,price) => sum + prices, 0);
        return `Total Bill: $${total.toFixed(2)}`;
}
let itemPrices = [10.99,5.49,20.00,3.50];
console.log(calculateTotalBill(itemPrices));