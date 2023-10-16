class Product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    toString(){
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class GiftPack{
    constructor (name, ...products){
        this.name = name;
        this.products = products;
    }
}

let hat = new TaxedProduct("Hat",100);
let boots = new TaxedProduct("Boots",100,1.3);
console.log(hat.toString());
console.log(boots.toString());