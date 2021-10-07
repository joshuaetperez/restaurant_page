export default function displayHeader() {
  // Header and navbar container
  const headerNavContainer = document.createElement("div");

  // Header
  const headerDiv = document.createElement("div");
  const body = document.querySelector("body");
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
  const homeText = document.createElement("span");
  const menuText = document.createElement("span");
  const contactText = document.createElement("span");
  homeTab.id = "home-tab";
  menuTab.id = "menu-tab";
  contactTab.id = "contact-tab";
  navDiv.classList.add("navbar");
  homeText.textContent = "Home";
  menuText.textContent = "Menu";
  contactText.textContent = "Contact";
  homeTab.appendChild(homeText);
  menuTab.appendChild(menuText);
  contactTab.appendChild(contactText);
  listTab.appendChild(homeTab);
  listTab.appendChild(menuTab);
  listTab.appendChild(contactTab);
  navDiv.appendChild(listTab);

  headerNavContainer.appendChild(headerDiv);
  headerNavContainer.appendChild(navDiv);
  body.prepend(headerNavContainer)
}