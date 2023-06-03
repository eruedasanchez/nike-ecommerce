/* Carga de cada producto en el arreglo productos */

class Product{
    constructor(name, id, image, categoryName, categoryId, price){
        this.name = name;
        this.id = id;
        this.image = image;
        this.categoryName = categoryName;
        this.categoryId = categoryId;
        this.price = price;
    }
}

const products = [];

const firstTshirt = new Product("Jordan Flight MVP", "tshirt-01", "../assets/img/remeras-camisetas/remera-1.jpg", "Remeras y Camisetas", "tshirts", 1000);
const secondTshirt = new Product("Nike Sportswear", "tshirt-02", "../assets/img/remeras-camisetas/remera-2.jpg", "Remeras y Camisetas", "tshirts", 1000);
const thirdTshirt = new Product("NikeCourt", "tshirt-03", "../assets/img/remeras-camisetas/remera-3.jpg", "Remeras y Camisetas", "tshirts", 1000);
const fourthTshirt = new Product("Nike Dri-FIT UV Hyverse", "tshirt-04", "../assets/img/remeras-camisetas/remera-4.jpg", "Remeras y Camisetas", "tshirts", 1000);

const firstTrouser = new Product("Jordan Dri-FIT Sport Breakfast Club", "trouser-01", "../assets/img/pantalones-calzas/pantalon-1.jpg", "Pantalones y Calzas", "trousers", 1000);
const secondTrouser = new Product("Jordan Artist Series by Umar Rashid", "trouser-02", "../assets/img/pantalones-calzas/pantalon-2.jpg", "Pantalones y Calzas", "trousers", 1000);
const thirdTrouser = new Product("Nike Challenger", "trouser-03", "../assets/img/pantalones-calzas/pantalon-3.jpg", "Pantalones y Calzas", "trousers", 1000);
const fourthTrouser = new Product("Nike Pro Dri-FIT", "trouser-04", "../assets/img/pantalones-calzas/pantalon-4.jpg", "Pantalones y Calzas", "trousers", 1000);

const firstJacket = new Product("Jordan Essentials", "jacket-01", "../assets/img/buzos-camperas/campera-1.jpg", "Buzos y Camperas", "jackets", 1000);
const secondJacket = new Product("Jordan Essential", "jacket-02", "../assets/img/buzos-camperas/campera-2.jpg", "Buzos y Camperas", "jackets", 1000);
const thirdJacket = new Product("FFF AWF", "jacket-03", "../assets/img/buzos-camperas/campera-3.jpg", "Buzos y Camperas", "jackets", 1000);
const fourthJacket = new Product("Jordan Essentials Statement", "jacket-04", "../assets/img/buzos-camperas/campera-4.jpg", "Buzos y Camperas", "jackets", 1000);

products.push(firstTshirt);
products.push(secondTshirt);
products.push(thirdTshirt);
products.push(fourthTshirt);

products.push(firstTrouser);
products.push(secondTrouser);
products.push(thirdTrouser);
products.push(fourthTrouser);

products.push(firstJacket);
products.push(secondJacket);
products.push(thirdJacket);
products.push(fourthJacket);

const btnCategory = document.querySelectorAll(".btn-category");
const productsContainer = document.querySelector("#products-container");
const mainTitle = document.querySelector("#main-title");
let btnAdd = document.querySelectorAll(".add-product");   // Seleccion de todos los botones "add"
const quantity = document.querySelector("#quantity");


/************************* START FUNCTIONS **************************/

function addToBag(event){
    const idBtn = event.currentTarget.id;
    const addedProduct = products.find(product => product.id === idBtn);            // Obtencion del objeto que se clickea

    if(productsInBag.some(product => product.id === idBtn)){
        /* El producto ya fue agregado al carrito */
        const index = productsInBag.findIndex(product => product.id === idBtn);    // Obtencion del indice en el arreglo del producto
        productsInBag[index].cant++;
    } else {
        /* El producto es agregado al carrito por primera vez */
        addedProduct.cant = 1;                                                      // Se agrega propiedad cantidad a los productos
        productsInBag.push(addedProduct);
    }

    refreshQuantity();
    
    /* Se guarda al arreglo en el local Storage para cargarlo desde carrito.html */ 
    localStorage.setItem("products-in-bag", JSON.stringify(productsInBag));
}

function refreshQuantity(){
    let newQuantity = productsInBag.reduce((acc, product) => acc + product.cant, 0);   // Se cuenta la cantidad de productos del arreglo y como los repetidos se almacenan en cant, se aplica reduce 
    quantity.innerText = newQuantity;
}

/* 
refreshAddBtn() logra que cada vez que se carguen elementos nuevos, 
tambien se actualicen los botones de agregar. 
Es decir, vuelva a buscar en el HTML que funcionen todos los botones.
La razon por la que no se declara btnAdd simplemente abajo de la 
funcion loadProducts() es porque el contenedor de productos se vacia,
los botones agregar son totalmente nuevos y no van a exitir para el documento. 
*/

function refreshAddBtn(){
    btnAdd = document.querySelectorAll(".add-product");
    btnAdd.forEach(btn => {
        btn.addEventListener("click", addToBag);
    })
}

function loadProducts(productsChosen){
    productsContainer.innerHTML = "";           // Vacia el contenedor para que no vaya acumulando las categorias filtradas dado que se le aplica un append 
    
    productsChosen.forEach(product => {
        const div = document.createElement("div"); // creacion del elemento div
        div.classList.add("product"); // asignacion de la clase producto a div
        div.innerHTML = `
        <img class="product-img" src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="add-product" id="${product.id}">Agregar</button>
            </div>
        `;
        
        productsContainer.append(div);
    })
    refreshAddBtn();
}

/************************* END FUNCTIONS **************************/

loadProducts(products);

/**** Filtrado de productos ****/

btnCategory.forEach(btn => {
    btn.addEventListener("click", (event) => {
        btnCategory.forEach(btn => btn.classList.remove("active"));   // Elimina active de todos los botones que estaban activos
        event.currentTarget.classList.add("active");                  // Activa el boton que se clickea 
    
        /* Filtrado de productos por categoria */
        if(event.currentTarget.id != "allproducts"){
            const categoryProducts = products.find(product => product.categoryId === event.currentTarget.id);
            mainTitle.innerText = categoryProducts.categoryName;
            const selected = products.filter(product => product.categoryId === event.currentTarget.id);
            loadProducts(selected);
        } else{
            mainTitle.innerHTML = "Toda la ropa";
            loadProducts(products);                                   // Evita que la lista quede vacia cuando se pasea del filtro de remeras a todos por ejemplo 
        }
    })
});

let productsInBag;
let productsInBagLocalStorage = localStorage.getItem("products-in-bag");

if(productsInBagLocalStorage){
    productsInBag = JSON.parse(productsInBagLocalStorage);
    refreshQuantity();                                      // Se evita que el contador de productos vuelva a 0 cuando regresa de la pagina del carrito
} else {
    productsInBag = [];
}