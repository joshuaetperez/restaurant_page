import './style.css';

export default function displayHome() {
    const contentDiv = document.querySelector("#content");

    // Header
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    const headingText = document.createElement("h3");
    headingText.innerText = "Zenith";
    headerDiv.appendChild(headingText);

    // Middle container
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    // Card
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.textContent = "Welcome to Zenith, a towering restaurant floating above the heavens! Eat at one of the world's finest establishments while taking a look at the most beautiful sights from above!";
    containerDiv.appendChild(cardDiv);

    // Footer
    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footer");
    footerDiv.textContent = "Made with the approval of the Gods";

    // Append to contentDiv
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(containerDiv);
    contentDiv.appendChild(footerDiv);
}