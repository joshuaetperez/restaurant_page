import './style.css';

export default function displayContact() {
  const contentDiv = document.querySelector("#content");

  // Header
  const headerDiv = document.createElement("div");
  const headingText = document.createElement("h3");
  headerDiv.classList.add("header");
  headingText.innerText = "Zenith";
  headerDiv.appendChild(headingText);

  // Navbar
  const navDiv = document.createElement("div");
  const listTab = document.createElement("ul");
  const homeTab = document.createElement("li");
  const menuTab = document.createElement("li");
  const contactTab = document.createElement("li");
  const homeButton = document.createElement("span");
  const menuButton = document.createElement("span");
  const contactButton = document.createElement("span");
  navDiv.classList.add("navbar");
  contactTab.classList.add("selected-tab");
  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";
  homeTab.appendChild(homeButton);
  menuTab.appendChild(menuButton);
  contactTab.appendChild(contactButton);
  listTab.appendChild(homeTab);
  listTab.appendChild(menuTab);
  listTab.appendChild(contactTab);
  navDiv.appendChild(listTab);

  // Middle container
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  // Card
  const cardDiv = document.createElement("div");
  const phoneDiv = document.createElement("div");
  const emailDiv = document.createElement("div");
  cardDiv.classList.add("card");
  phoneDiv.textContent = "Phone: 999-999-9999";
  emailDiv.textContent = "Email: zenith@skyhigh.com";

  cardDiv.appendChild(phoneDiv);
  cardDiv.appendChild(emailDiv);
  containerDiv.appendChild(cardDiv);

  // Footer
  const footerDiv = document.createElement("div");
  const disclaimerDiv = document.createElement("div");
  footerDiv.classList.add("footer");
  disclaimerDiv.classList.add("disclaimer");
  footerDiv.textContent = "Made with the approval of the Gods";
  disclaimerDiv.textContent = "*Zenith does not take responsibility for any painful injuries or deaths resulting from falling from a high place*";
  footerDiv.appendChild(disclaimerDiv);

  // Append to contentDiv
  contentDiv.appendChild(headerDiv);
  contentDiv.appendChild(navDiv);
  contentDiv.appendChild(containerDiv);
  contentDiv.appendChild(footerDiv);
}