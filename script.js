// Task 2: Accessing Elements

// 1. Access the h1 element using document.getElementById()
const h1Element = document.getElementById("main").querySelector("h1");
console.log("Task 1 - Accessing h1 Element:");
console.log(h1Element);

// 2. Access the p element using document.querySelector()
const pElement = document.querySelector(".description");
console.log("Task 2 - Accessing p Element:");
console.log(pElement);

// 3. Access the list items using document.getElementsByClassName()
const listItemsByClass = document.getElementsByClassName("tasks")[0].getElementsByTagName("li");
console.log("Task 3 - Accessing List Items by Class:");
console.log(listItemsByClass);

// 4. Access the ul using document.getElementsByTagName()
const ulElement = document.getElementsByTagName("ul")[0];
console.log("Task 4 - Accessing ul Element:");
console.log(ulElement);

// 5. Access all list items using document.querySelectorAll()
const allListItems = document.querySelectorAll(".tasks li");
console.log("Task 5 - Accessing All List Items:");
console.log(allListItems);

//The window.addEventListener helps erase the errors in the ulElement and h1Element
window.addEventListener("load", function() {

    // Task 3: Traversing Elements

    // 1. Access the parent node of the ul
    const ulElement = document.querySelector("ul");
    const ulParent = ulElement.parentNode;
    console.log("Task 1 - Accessing the Parent Node of ul:");
    console.log(ulParent);

    // 2. Access the previous sibling of the ul
    const ulPreviousSibling = ulElement.previousElementSibling;
    console.log("Task 2 - Accessing the Previous Sibling of ul:");
    console.log(ulPreviousSibling);

    // 3. Access the next sibling of the h1
    const h1Element = document.querySelector("h1");
    const h1NextSibling = h1Element.nextElementSibling;
    console.log("Task 3 - Accessing the Next Sibling of h1:");
    console.log(h1NextSibling);
});


window.addEventListener("load", function() {
    
    // Task 4: Modifying Content

    // 1. Change the text content of the h1 element to "Updated DOM Lab".
    const h1Element = document.querySelector("h1");
    h1Element.textContent = "Updated DOM Lab";

    // 2. Add an additional list item "Task 4" to the ul using innerHTML.
    const ulElement = document.querySelector(".tasks");
    ulElement.innerHTML += "<li>Task 4</li>";

    // 3. Update the p text content to say "This is an updated description."
    const pElement = document.querySelector(".description");
    pElement.textContent = "This is an updated description.";
});
