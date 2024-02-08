// document.querySelector("#expenseTrackerForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // Add your form submission handling logic here
//     var amount = document.getElementById("expAmt").value;
//     var description = document.getElementById("expDesc").value;
//     var category = document.getElementById("expCate").value;

//     // Create the expenseListContainer and expenseList only if they don't exist
//     if (!document.getElementById("expenseListContainer")) {
//         // Create a container div
//         var expenseListContainer = document.createElement("div");
//         expenseListContainer.id = "expenseListContainer";

//         // Create a ul element for the expense list
//         var expenseList = document.createElement("ul");
//         expenseList.id = "expenseList";

//         // Append the ul element to the container
//         expenseListContainer.appendChild(expenseList);

//         // Append the container to the body
//         document.body.appendChild(expenseListContainer);
//     }

//     // Get the expenseList ul element
//     var expenseList = document.getElementById("expenseList");

//     // Create a new list item
//     var listItem = document.createElement("li");
//     listItem.textContent = `Amount: ${amount} - Description: ${description} - Category: ${category}`;

//     // Create delete button
//     var deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", function () {
//         // Remove the corresponding list item
//         expenseList.removeChild(listItem);
//     });

//     // Create edit button
//     var editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", function () {
//         // Delete the current list item
//         expenseList.removeChild(listItem);

//         // Populate form fields with existing values
//         document.getElementById("expAmt").value = amount;
//         document.getElementById("expDesc").value = description;
//         document.getElementById("expCate").value = category;
//     });

//     // Append the delete and edit buttons to the list item
//     listItem.appendChild(deleteButton);
//     listItem.appendChild(editButton);

//     // Append the new list item to the expense list
//     expenseList.appendChild(listItem);

//     // Clear the form fields
//     document.getElementById("expAmt").value = "";
//     document.getElementById("expDesc").value = "";
//     document.getElementById("expCate").value = "";
// });

















document.querySelector("#expenseTrackerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Add your form submission handling logic here
    var amount = document.getElementById("expAmt").value;
    var description = document.getElementById("expDesc").value;
    var category = document.getElementById("expCate").value;

    // Store data in local storage
    localStorage.setItem("amount", amount);
    localStorage.setItem("description", description);
    localStorage.setItem("category", category);

    // Create the expenseListContainer and expenseList only if they don't exist
    if (!document.getElementById("expenseListContainer")) {
        // Create a container div
        var expenseListContainer = document.createElement("div");
        expenseListContainer.id = "expenseListContainer";

        // Create a ul element for the expense list
        var expenseList = document.createElement("ul");
        expenseList.id = "expenseList";

        // Append the ul element to the container
        expenseListContainer.appendChild(expenseList);

        // Append the container to the body
        document.body.appendChild(expenseListContainer);
    }

    // Get the expenseList ul element
    var expenseList = document.getElementById("expenseList");

    // Create a new list item
    var listItem = document.createElement("li");
    listItem.textContent = `Amount: ${amount} - Description: ${description} - Category: ${category}`;

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        // Remove the corresponding list item
        expenseList.removeChild(listItem);

        // Remove the corresponding data from local storage
        localStorage.removeItem("amount");
        localStorage.removeItem("description");
        localStorage.removeItem("category");
    });

    // Create edit button
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
        // Delete the current list item
        expenseList.removeChild(listItem);

        // Remove the corresponding data from local storage
        localStorage.removeItem("amount");
        localStorage.removeItem("description");
        localStorage.removeItem("category");

        // Populate form fields with existing values
        document.getElementById("expAmt").value = amount;
        document.getElementById("expDesc").value = description;
        document.getElementById("expCate").value = category;
    });

    // Append the delete and edit buttons to the list item
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);

    // Append the new list item to the expense list
    expenseList.appendChild(listItem);

    // Clear the form fields
    document.getElementById("expAmt").value = "";
    document.getElementById("expDesc").value = "";
    document.getElementById("expCate").value = "";
});
