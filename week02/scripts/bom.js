const input = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");



button.addEventListener("click", function () {


    // Check that input is not empty
    if (input.value.trim() !== "") {


        // Create list item
        const li = document.createElement("li");


        // Create delete button
        const deleteButton = document.createElement("button");



        // Add chapter text
        li.textContent = input.value;



        // Add delete button symbol
        deleteButton.textContent = "❌";



        // Accessibility label
        deleteButton.setAttribute(
            "aria-label",
            "Remove " + input.value
        );



        // Add delete button to list item
        li.append(deleteButton);



        // Add list item to webpage
        list.append(li);



        // Delete functionality
        deleteButton.addEventListener("click", function () {

            list.removeChild(li);

            input.focus();

        });



        // Clear input
        input.value = "";



        // Return cursor to input
        input.focus();


    }

});