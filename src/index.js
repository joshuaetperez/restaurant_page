import displayHeader from './header.js';
import displayHome from './home.js';
import displayMenu from './menu.js';
import displayContact from './contact.js';

(function () {
  // Resets page excluding heading and background picture
  function resetPage() {
    document.querySelector("#content").innerHTML = "";
  }

  // Gives navbar tabs event listeners and displays the "Home" page on startup
  function initialSetup() {
    displayHeader();

    document.querySelector("#home-tab").classList.add("selected-tab");

    document.querySelector("#home-tab").addEventListener("click", homeClickHandler);
    document.querySelector("#menu-tab").addEventListener("click", menuClickHandler);
    document.querySelector("#contact-tab").addEventListener("click", contactClickHandler);

    displayHome();
  }

  // Clicking on the "Home" tab displays the "Home" page
  function homeClickHandler() {
    if (document.querySelector("#home-tab").classList.contains("selected-tab")) {
      return;
    }
    document.querySelector("#home-tab").classList.add("selected-tab");
    document.querySelector("#menu-tab").classList.remove("selected-tab");
    document.querySelector("#contact-tab").classList.remove("selected-tab");
    resetPage();
    displayHome();
  }
  
  // Clicking on the "Menu" tab displays the "Menu" page
  function menuClickHandler() {
    if (document.querySelector("#menu-tab").classList.contains("selected-tab")) {
      return;
    }
    document.querySelector("#menu-tab").classList.add("selected-tab");
    document.querySelector("#home-tab").classList.remove("selected-tab");
    document.querySelector("#contact-tab").classList.remove("selected-tab");
    resetPage();
    displayMenu();
  }
  
  // Clicking on the "Contact" tab displays the "Contact" page
  function contactClickHandler() {
    if (document.querySelector("#contact-tab").classList.contains("selected-tab")) {
      return;
    }
    document.querySelector("#contact-tab").classList.add("selected-tab");
    document.querySelector("#home-tab").classList.remove("selected-tab");
    document.querySelector("#menu-tab").classList.remove("selected-tab");
    resetPage();
    displayContact();
  }

  initialSetup();
})();