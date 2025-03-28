const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];// adding a new elemtnt to the array
products.push({name:"Desk",price:150,category:"Furniture"});
console.log(products);

//find element with the name Watch
console.log(products.find(product=>product.name==="Watch"));
// displaying array of only names
const arrNames=products.map(product=>product.name);
console.log(arrNames);
//elements has price that are above 100 
console.log(products.filter(product=>product.price>100));

//displaying products with its corresponding price 
products.forEach(product=>{
    console.log(`Product:${product.name}, Price:$${product.price}`);
    });
//calculating the average of the price
const total =products.reduce((sum,product)=>sum+product.price,0)
const average=total/products.length;
console.log(`the average price of all products are:${average}`);

// displaying our products as a html page

const container= document.getElementById("productList");

products.forEach(product=>{
    const productDiv=document.createElement("div");
    productDiv.innerHTML=`
    <p>Product:${product.name}, Price$${product.price}<p>`;

    container.appendChild(productDiv)
});
