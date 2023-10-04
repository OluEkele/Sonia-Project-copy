let menu_icon_box = document.querySelector(".menu-bar");
let box = document.querySelector(".slide-bar");
let closeBar = document.querySelector(".times");


menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("open");
    box.classList.toggle("open");
}
closeBar.onclick = function(){
    closeBar.classList.remove("open");
    box.classList.remove("open");
}