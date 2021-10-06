import './style.css';
import Background from './restaurant_background.jpg';

const contentDiv = document.querySelector("#content");

// Header
const headerDiv = document.createElement("div");
headerDiv.classList.add("header");
const headingText = document.createElement("h3");
headingText.innerText = "Hi There!";
headerDiv.appendChild(headingText);

// Add the image to our existing div.
// const myBackground = new Image();
// myBackground.src = Background;
// myBackground.classList.add("cover");

// contentDiv.appendChild(myBackground);

// Middle container
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
containerDiv.textContent = "This is the container.";


// Footer
const footerDiv = document.createElement("div");
footerDiv.classList.add("footer");
footerDiv.textContent = "This is the footer.";

contentDiv.appendChild(headerDiv);
contentDiv.appendChild(containerDiv);
contentDiv.appendChild(footerDiv);