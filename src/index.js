import { createHomepage } from "./homepage.js";
import { createAboutpage } from "./aboutpage.js";
import { createContactspage } from "./contactpage.js";

const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector("#about");
const contactButton = document.querySelector("#contacts");

homeButton.addEventListener("click", createHomepage);
aboutButton.addEventListener("click", createAboutpage);
contactButton.addEventListener("click", createContactspage);