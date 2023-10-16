enum Feature { Waterproof, Insulated, None };
let hat = {name: "Hat",price:100,feature:Feature.None};
let gloves = {name: "Gloves",price:75,feature: Feature.Insulated};
let umbrella = {
    name: "Umbrella",
    price:30,
    feature: Feature.Waterproof,
    hasFeature: function(checkFeature){
        return this.feature === checkFeature;
    }
};
let products: {
    name: string,
    price: number,
    feature: Feature,
    hasFeature?(f:Feature): boolean
}[] = [hat,gloves,umbrella];

// products.forEach(prod=> console.log(`${prod.name}: ${prod.price}` + `, Waterproof: ${prod.hasFeature(Feature.Waterproof)}`));

