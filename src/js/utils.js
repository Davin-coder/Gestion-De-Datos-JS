const btnCrte = document.getElementById("crt-product");

//create a Set for conserve the product's ID
const setIDs = new Set();

//create a Map for the info about the product
const prodMap = new Map();

//Function for create a object 
const addProduct = function(name, price, id){
    product = {
        id: id,
        name: name,
        price: price
    };
    return product;
};

//Function that read info about the product
const readProduct = function(productID){
    const ID = productID;
    const productInfo = prodMap.get(ID);
    return alert(`Product Information:\n
        Name: ${productInfo.title}\n
        Category: ${productInfo.category}\n
        Price: $${productInfo.price}`);
};

//Function that delete elements from the list, and remove their ID from the Set and Map.
const delElement = function(element, elementID){
    setIDs.delete(elementID);
    prodMap.delete(elementID);
    element.parentElement.remove();
};

//Function when user clicks on the button for add a new product
btnCrte.addEventListener("click", () => {
    const prodName = document.getElementById("product-name"),
        prodPrice = document.getElementById("product-price"),
        prodID = document.getElementById("product-id"),
        prodCatg = document.getElementById("product-category"),
        prodContainer = document.getElementById("products-container"),
        uniqueID = prodID.value;
    
    //validates the correct entrace of values
    if (prodName.value == false || prodPrice.value == false || prodID.value == false || prodCatg.value == false){
        return alert("All fields are required.");
    }else if (prodPrice.value < 0 || prodID.value < 0){
        return alert("Values can't be negative.");
    }else{
        if (setIDs.has(uniqueID)){
            return alert("Product already exist with that ID.");
        };
        const product = addProduct(prodName.value, prodPrice.value, uniqueID);
        prodContainer.innerHTML += `
            <li>
            ID: ${uniqueID} - "${product.name}" 
            <button onclick="readProduct('${uniqueID}')">INFO</button>
            <button onclick="delElement(this, '${uniqueID}')" >DEL</button>
            </li>`;
        
        //Save ID's in a Set
        setIDs.add(uniqueID);
        
        //Add product to a Map
        prodMap.set(uniqueID, {title: product.name, category: prodCatg.value, price: product.price});
        console.log(prodMap);
    };
});