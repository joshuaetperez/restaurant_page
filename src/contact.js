import './style.css';

export default function displayContact() {
  const contentDiv = document.querySelector("#content");

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
  contentDiv.appendChild(containerDiv);
  contentDiv.appendChild(footerDiv);
}