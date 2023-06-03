// Se comienza verificando si hay algo en el carrito viendo el local Storage

const CERO = 0;
let productsInBag = localStorage.getItem("products-in-bag");
productsInBag = JSON.parse(productsInBag);

const emptyBagContainer = document.querySelector("#empty-bag");
const productsBagContainer = document.querySelector("#bag-products");
const bagActionsContainer = document.querySelector("#bag-actions");
const finishPurchaseContainer = document.querySelector("#finish-purchase");
let buttonsDelete = document.querySelector(".bag-product-delete"); 
const btnClear = document.querySelector("#bag-actions-clear");
const btnBuy = document.querySelector("#bag-actions-buy"); 
const containerTotal = document.querySelector("#total");

/************************* START FUNCTIONS **************************/

/* Las funciones son declaradas luego de inicializar las variables
que funcionan como selectores simplemente por scope (me quedaria probar
si declarando las funciones antes, el programa funciona igualmente). */ 

function loadProductsInBag(){
    // Si no hay productos en el carritO JSON.parse(productsInBag) evalua a null y null -> false
    
    if(productsInBag && productsInBag.length > CERO){
        emptyBagContainer.classList.add("disabled");
        productsBagContainer.classList.remove("disabled");
        bagActionsContainer.classList.remove("disabled");
        finishPurchaseContainer.classList.add("disabled");
        
        productsBagContainer.innerHTML = "";
        
        productsInBag.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("bag-product");   
            div.innerHTML = `
                <img class="bag-product-image" src="${product.image}" alt="${product.name}">
                <div class="bag-product-title">
                    <small>Nombre</small>
                    <h3>${product.name}</h3>
                </div>
                <div class="bag-product-cant">
                    <small>Cantidad</small>
                    <p>${product.cant}</p>
                </div>
                <div class="bag-product-price">
                    <small>Precio</small>
                    <p>$${product.price}</p>
                </div>
                <div class="bag-product-subtotal">
                    <small>Subtotal</small>
                    <p>$${product.price * product.cant}</p>
                </div>
                <button class="bag-product-delete" id="${product.id}">
                    <i class="bi bi-trash-fill"></i>
                </button>`;

                productsBagContainer.append(div);
        })
    } else {
        emptyBagContainer.classList.remove("disabled"); 
        productsBagContainer.classList.add("disabled");
        bagActionsContainer.classList.add("disabled");
        finishPurchaseContainer.classList.add("disabled");
    }

    refreshDeleteButtons();
    refreshTotal();
}

const refreshDeleteButtons = () => {
    buttonsDelete = document.querySelectorAll(".bag-product-delete");

    buttonsDelete.forEach(btn => {
        btn.addEventListener("click", deleteOfBag);
    });
}

const deleteOfBag = (event) => {
    const idBtn = event.currentTarget.id; 
    const index = productsInBag.findIndex(product => product.id === idBtn); 
    
    productsInBag.splice(index,1);          // Borra un elemento del producto seleccionado
    loadProductsInBag();

    localStorage.setItem("products-in-bag", JSON.stringify(productsInBag));
}

const clearBag = () => {
    productsInBag.length = 0;
    localStorage.setItem("products-in-bag", JSON.stringify(productsInBag));
    loadProductsInBag();
}

const refreshTotal = () => {
    const totalAmmount = productsInBag.reduce((acc, producto) => acc + (producto.price * producto.cant), 0);
    containerTotal.innerText = `$${totalAmmount}`; 
}

const confirm = () => {
    productsInBag.length = 0;
    localStorage.setItem("products-in-bag", JSON.stringify(productsInBag));

    emptyBagContainer.classList.add("disabled"); 
    productsBagContainer.classList.add("disabled");
    bagActionsContainer.classList.add("disabled");
    finishPurchaseContainer.classList.remove("disabled");
}

/************************* END FUNCTIONS **************************/

loadProductsInBag();                            // Se cargan los productos en el carrito
btnClear.addEventListener("click", clearBag);
btnBuy.addEventListener("click", confirm);

