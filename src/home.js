import './style.css';

export default function displayHome() {
  const contentDiv = document.querySelector("#content");

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
  contentDiv.appendChild(containerDiv);
  contentDiv.appendChild(footerDiv);
}