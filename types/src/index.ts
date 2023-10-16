function calculateTax(amount:number){
    return (amount*1.2).toFixed(2);
}

let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount/2;
