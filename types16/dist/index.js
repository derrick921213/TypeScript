var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
    Feature[Feature["None"] = 2] = "None";
})(Feature || (Feature = {}));
let hat = { name: "Hat", price: 100, feature: Feature.Waterproof };
let gloves = { name: "Gloves", price: 75, feature: Feature.Insulated };
let umbrella = {
    name: "Umbrella",
    price: 30,
    feature: Feature.Waterproof,
    hasFeature: function (checkFeature) {
        return this.feature === checkFeature;
    }
};
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}: ${prod.price}`));
