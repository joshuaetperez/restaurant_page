import './style.css';
import FruitPunch from './fruit_punch.jpg';
import WaterGlass from './water_glass.jpg';

export default function displayMenu() {
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
  menuTab.classList.add("selected-tab");
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

  // Beverage Cards
  const beverageHeader = document.createElement("h3");
  beverageHeader.textContent = "Beverages";

  const fruitPunchCard = document.createElement("div");
  const fruitPunchHeadingText = document.createElement("h4");
  const fruitPunchDescriptionText = document.createElement("p");
  const fruitPunchImg = new Image();
  fruitPunchCard.classList.add("menu-card");
  fruitPunchImg.classList.add("menu-image");
  fruitPunchImg.src = FruitPunch;
  fruitPunchHeadingText.textContent = "Ambrosia, the Drink of the Gods";
  fruitPunchDescriptionText.textContent = "The Drink of the Gods themselves. Definetely not just regular fruit punch. Not at all. Don't be ridiculous.";
  fruitPunchCard.appendChild(fruitPunchHeadingText);
  fruitPunchCard.appendChild(fruitPunchDescriptionText);
  fruitPunchCard.appendChild(fruitPunchImg);

  const waterGlassCard = document.createElement("div");
  const waterGlassHeadingText = document.createElement("h4");
  const waterGlassDescriptionText = document.createElement("p");
  const waterGlassImg = new Image();
  waterGlassCard.classList.add("menu-card");
  waterGlassImg.classList.add("menu-image");
  waterGlassImg.src = WaterGlass;
  waterGlassHeadingText.textContent = "A Glass of Water";
  waterGlassDescriptionText.textContent = "Imagine coming to such a luxurious place and ordering water. As much as I want to throw you out the restaurant myself, I have to cater to every customer's wishes.";
  waterGlassCard.appendChild(waterGlassHeadingText);
  waterGlassCard.appendChild(waterGlassDescriptionText);
  waterGlassCard.appendChild(waterGlassImg);

  cardDiv.appendChild(beverageHeader);
  cardDiv.appendChild(fruitPunchCard);
  cardDiv.appendChild(waterGlassCard);
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