/* Carga de cada producto en el arreglo productos */

class Producto{
    constructor(name, id, image, categoryName, categoryId, price){
        this.name = name;
        this.id = id;
        this.image = image;
        this.categoryName = categoryName;
        this.categoryId = categoryId;
        this.price = price;
    }
}

const productos = [];

const firstTshirt = new Producto("Jordan Flight MVP", "tshirt-01", "../assets/img/remeras-camisetas/remera-1.jpg", "Tshirts", "tshirts", 1000);
const secondTshirt = new Producto("Nike Sportswear", "tshirt-02", "../assets/img/remeras-camisetas/remera-2.jpg", "Tshirts", "tshirts", 1000);
const thirdTshirt = new Producto("NikeCourt", "tshirt-03", "../assets/img/remeras-camisetas/remera-3.jpg", "Tshirts", "tshirts", 1000);
const fourthTshirt = new Producto("Nike Dri-FIT UV Hyverse", "tshirt-04", "../assets/img/remeras-camisetas/remera-4.jpg", "Tshirts", "tshirts", 1000);
const fifthTshirt = new Producto("Nike Sportswear Club", "tshirt-05", "../assets/img/remeras-camisetas/remera-5.jpg", "Tshirts", "tshirts", 1000);

const firstTrouser = new Producto("Jordan Dri-FIT Sport Breakfast Club", "trouser-01", "../assets/img/pantalones-calzas/pantalon-1.jpg", "Trousers", "trousers", 1000);
const secondTrouser = new Producto("Jordan Artist Series by Umar Rashid", "trouser-02", "../assets/img/pantalones-calzas/pantalon-2.jpg", "Trousers", "trousers", 1000);
const thirdTrouser = new Producto("Nike Challenger", "trouser-03", "../assets/img/pantalones-calzas/pantalon-3.jpg", "Trousers", "trousers", 1000);
const fourthTrouser = new Producto("Nike Pro Dri-FIT", "trouser-04", "../assets/img/pantalones-calzas/pantalon-4.jpg", "Trousers", "trousers", 1000);
const fifthTrouser = new Producto("Nike Pro Dri-FIT", "trouser-05", "../assets/img/pantalones-calzas/pantalon-5.jpg", "Trousers", "trousers", 1000);

const firstJacket = new Producto("Jordan Essentials", "jacket-01", "../assets/img/buzos-camperas/campera-1.jpg", "Jackets", "jackets", 1000);
const secondJacket = new Producto("Jordan Essential", "jacket-02", "../assets/img/buzos-camperas/campera-2.jpg", "Jackets", "jackets", 1000);
const thirdJacket = new Producto("FFF AWF", "jacket-03", "../assets/img/buzos-camperas/campera-3.jpg", "Jackets", "jackets", 1000);
const fourthJacket = new Producto("Jordan Essentials Statement", "jacket-04", "../assets/img/buzos-camperas/campera-4.jpg", "Jackets", "jackets", 1000);
const fifthJacket = new Producto("Jordan Flight MVP", "jacket-05", "../assets/img/buzos-camperas/campera-5.jpg", "Jackets", "jackets", 1000);

productos.push(firstTshirt);
productos.push(secondTshirt);
productos.push(thirdTshirt);
productos.push(fourthTshirt);
productos.push(fifthTshirt);

productos.push(firstTrouser);
productos.push(secondTrouser);
productos.push(thirdTrouser);
productos.push(fourthTrouser);
productos.push(fifthTrouser);

productos.push(firstJacket);
productos.push(secondJacket);
productos.push(thirdJacket);
productos.push(fourthJacket);
productos.push(fifthJacket);


