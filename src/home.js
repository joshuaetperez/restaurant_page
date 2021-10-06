import './style.css';

export default function displayHome() {
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
  const tabContact = document.createElement("li");
  const homeButton = document.createElement("span");
  const menuButton = document.createElement("span");
  const contactButton = document.createElement("span");
  navDiv.classList.add("navbar");
  homeTab.classList.add("selected-tab");
  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";
  homeTab.appendChild(homeButton);
  menuTab.appendChild(menuButton);
  tabContact.appendChild(contactButton);
  listTab.appendChild(homeTab);
  listTab.appendChild(menuTab);
  listTab.appendChild(tabContact);
  navDiv.appendChild(listTab);

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