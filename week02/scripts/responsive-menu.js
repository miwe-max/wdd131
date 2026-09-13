const menubutton = document.querySelector("#menu-button");

const menuitems = document.querySelector("#navigation");



menubutton.addEventListener("click", () => {


    menuitems.classList.toggle("open");


});