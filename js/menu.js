const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("show-aside");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("show-aside");  
})

btnCategory.forEach(btn => btn.addEventListener("click", () => {
    aside.classList.remove("show-aside");
}))