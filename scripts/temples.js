const menuButton = document.querySelector("#menuButton");

const navigation = document.querySelector("#navigation");



menuButton.addEventListener("click", () => {


    navigation.classList.toggle("open");


    if (navigation.classList.contains("open")) {

        menuButton.textContent = "❎";

    }

    else {

        menuButton.textContent = "☰";

    }


});



// Dynamic Footer Year

const year = new Date().getFullYear();


document.querySelector("#currentyear").textContent = year;



// Last Modified Date

document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;