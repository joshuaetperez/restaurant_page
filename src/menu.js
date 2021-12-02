import './style.css';
import FruitPunch from './fruit_punch.jpg';
import WaterGlass from './water_glass.jpg';
import Salad from './salad.jpg';
import Chips from './chips.jpg';
import Pizza from './pizza.jpg';
import Cake from './cake.jpg';
import Apple from './apple.jpg';

export default function displayMenu() {
  const contentDiv = document.querySelector("#content");

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
  fruitPunchDescriptionText.textContent = "The Drink of the Gods themselves. Definitely not just regular fruit punch. Not at all. Don't be ridiculous.";
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
  waterGlassDescriptionText.innerHTML = `Imagine going to a luxurious place and ordering water. Just go order the ${"fruit punch".strike()} ambrosia instead.`;
  waterGlassCard.appendChild(waterGlassHeadingText);
  waterGlassCard.appendChild(waterGlassDescriptionText);
  waterGlassCard.appendChild(waterGlassImg);

  cardDiv.appendChild(beverageHeader);
  cardDiv.appendChild(fruitPunchCard);
  cardDiv.appendChild(waterGlassCard);

  // Entrée Cards
  const entreeHeader = document.createElement("h3");
  entreeHeader.classList.add("menu-heading-margin");
  entreeHeader.textContent = "Entrées";

  const saladCard = document.createElement("div");
  const saladHeadingText = document.createElement("h4");
  const saladDescriptionText = document.createElement("p");
  const saladImg = new Image();
  saladCard.classList.add("menu-card");
  saladImg.classList.add("menu-image");
  saladImg.src = Salad;
  saladHeadingText.textContent = "Salad";
  saladDescriptionText.textContent = "Literally just raked leaves off the floor and put them onto a plate. Bon appetite.";
  saladCard.appendChild(saladHeadingText);
  saladCard.appendChild(saladDescriptionText);
  saladCard.appendChild(saladImg);

  const chipsCard = document.createElement("div");
  const chipsHeadingText = document.createElement("h4");
  const chipsDescriptionText = document.createElement("p");
  const chipsImg = new Image();
  chipsCard.classList.add("menu-card");
  chipsImg.classList.add("menu-image");
  chipsImg.src = Chips;
  chipsHeadingText.textContent = "Tortilla Chips";
  chipsDescriptionText.textContent = "Very crunchy. Nom nom nom. Dipping sauce is not included.";
  chipsCard.appendChild(chipsHeadingText);
  chipsCard.appendChild(chipsDescriptionText);
  chipsCard.appendChild(chipsImg);

  const pizzaCard = document.createElement("div");
  const pizzaHeadingText = document.createElement("h4");
  const pizzaDescriptionText = document.createElement("p");
  const pizzaImg = new Image();
  pizzaCard.classList.add("menu-card");
  pizzaImg.classList.add("menu-image");
  pizzaImg.src = Pizza;
  pizzaHeadingText.textContent = "Vegetable Pizza";
  pizzaDescriptionText.textContent = "We CANNOT guarantee this pizza is bodacious, outrageous, downright amazing, and no doubt the best pizza you've had all day. Well, unless this is the only pizza you've had all day... but I don't think you can call this a pizza anyways.";
  pizzaCard.appendChild(pizzaHeadingText);
  pizzaCard.appendChild(pizzaDescriptionText);
  pizzaCard.appendChild(pizzaImg);

  cardDiv.appendChild(entreeHeader);
  cardDiv.appendChild(saladCard);
  cardDiv.appendChild(chipsCard);
  cardDiv.appendChild(pizzaCard);

  // Desert Cards
  const desertHeader = document.createElement("h3");
  desertHeader.classList.add("menu-heading-margin");
  desertHeader.textContent = "Deserts";

  const cakeCard = document.createElement("div");
  const cakeHeadingText = document.createElement("h4");
  const cakeDescriptionText = document.createElement("p");
  const cakeImg = new Image();
  cakeCard.classList.add("menu-card");
  cakeImg.classList.add("menu-image");
  cakeImg.src = Cake;
  cakeHeadingText.textContent = "Celestial Cake";
  cakeDescriptionText.textContent = "A cake of the highest caliber. Everything about this cake is absolutely divine. A desert that will make you feel like you are truly above the heavens. CURRENTLY OUT OF STOCK.";
  cakeCard.appendChild(cakeHeadingText);
  cakeCard.appendChild(cakeDescriptionText);
  cakeCard.appendChild(cakeImg);

  const appleCard = document.createElement("div");
  const appleHeadingText = document.createElement("h4");
  const appleDescriptionText = document.createElement("p");
  const appleImg = new Image();
  appleCard.classList.add("menu-card");
  appleImg.classList.add("menu-image");
  appleImg.src = Apple;
  appleHeadingText.textContent = "A Partially Eaten Apple";
  appleDescriptionText.textContent = "A partially eaten apple.";
  appleCard.appendChild(appleHeadingText);
  appleCard.appendChild(appleDescriptionText);
  appleCard.appendChild(appleImg);

  cardDiv.appendChild(desertHeader);
  cardDiv.appendChild(cakeCard);
  cardDiv.appendChild(appleCard);
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
  contentDiv.appendChild(containerDiv);
  contentDiv.appendChild(footerDiv);
}