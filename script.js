// step 1: change the text inside h1 into "Hello there!"
document.getElementById("heading").textContent = "Hello there!"

// step 2: add the class "small-txt" to all h2 elements
const heading2 = document.getElementsByTagName("h2");
for (let i = 0; i < heading2.length; i++) {
    heading2[i].className = "small-txt"
}

// step 3: grab the container div and append a form with 1 text input and 1 submit input to it using innerHTML
const container = document.querySelector(".container");
const form = document.createElement("form");
const textInput = document.createElement("input");
const buttonInput = document.createElement("input");

textInput.setAttribute("value", "Enter name");
buttonInput.setAttribute("type", "Submit");

form.append(textInput);
form.append(buttonInput);
container.append(form);

// step 4: change the style of the added text input to have 100% width;
textInput.style.width = "100%"

// step 5: create an array with the team members names in it
const members = ["Omer", "Amjad"];


// step 6: append a footer element to the body with a signature that says "Implement with love by: "
// and put each item in the array in here separated by a comma

const footer = document.createElement("footer");
const footerText = document.createElement("p");
footerText.textContent = "Implemented with love by: "
function implementer() {
    members.forEach(name => {
        footerText.textContent += name + " "
    });
}
implementer();

footer.append(footerText);
container.append(footer);