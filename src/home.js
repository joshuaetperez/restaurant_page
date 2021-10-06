import './style.css';

export default function displayHome() {
    const contentDiv = document.querySelector("#content");

    // Header
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    const headingText = document.createElement("h3");
    headingText.innerText = "Zenith";
    headerDiv.appendChild(headingText);

    // Navbar
    const navDiv = document.createElement("div");
    navDiv.classList.add("navbar");
    const tabList = document.createElement("ul");
    const tabHome = document.createElement("li");
    const tabMenu = document.createElement("li");
    const tabContact = document.createElement("li");
    const homeButton = document.createElement("span");
    const menuButton = document.createElement("span");
    const contactButton = document.createElement("span");
    tabHome.classList.add("selected-tab");
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";
    tabHome.appendChild(homeButton);
    tabMenu.appendChild(menuButton);
    tabContact.appendChild(contactButton);
    tabList.appendChild(tabHome);
    tabList.appendChild(tabMenu);
    tabList.appendChild(tabContact);
    navDiv.appendChild(tabList);

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
    const disclaimerDiv = document.createElement("div");
    disclaimerDiv.classList.add("disclaimer");
    disclaimerDiv.textContent = "*Zenith does not take responsibility for any painful injuries or deaths resulting from falling from a high place*";
    footerDiv.appendChild(disclaimerDiv);

    // Append to contentDiv
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(navDiv);
    contentDiv.appendChild(containerDiv);
    contentDiv.appendChild(footerDiv);
}