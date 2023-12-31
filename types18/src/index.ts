type Product = {
    id: number,
    name: string,
    price?: number
};

type Person = {
    id: string,
    name: string,
    city: string
};

type UnionType = {
    id: number | string,
    name: string
};

let hat = {
    id: 1,
    name: "Hat",
    price: 100
};

let gloves = {
    id: 2,
    name: "Gloves",
    price: 30
};

let umbrella = {
    id: 3,
    name: "Umbrella",
    price: 30
};

let bob = {
    id: "bsmith",
    name: "Bob",
    city: "London"
};

let dataItems: (Product|Person)[] = [hat,gloves,umbrella,bob];
function isPerson(testObj: any): testObj is Person{
    return testObj.city !== undefined;
}
//dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`));
dataItems.forEach(item=>{
    if(isPerson(item)){
        console.log(`Person: ${item.name}: ${item.city}`);
    }
    else{
        console.log(`Product: ${item.name}: ${item.price}`);
    }
})
