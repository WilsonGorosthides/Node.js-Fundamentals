const { getFullName, productType } = require("./service/products");
const product = require("./service/products")
const config = require("./service/config");
const database = require("./service/database");

async function main(){
    console.log("carrinho compras");

    getFullName("1 ", "teclado");
    product.getFullName("1 ", "teclado");

    console.log(productType);
    // product.getFullName("408", "mousepad"); 
    // product.getFullName("18", "mouse");
    // product.getProductLabel("mousepad");

    database.connectToDatabase("my-data");

}

main();