import { projects } from "./data.js";
import renderCarousel from "./render-carousel.js";
import renderMainContent from "./render-main-content.js";

/**
 * Initializes the application by rendering the main content and carousel,
 * and sets up event listeners for user interactions.
 */

function initializeApp() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="app-container">
      <div class="main-content">
        ${renderMainContent(projects[0])}
      </div>
      ${renderCarousel()}
    </div>
  `;

  const carouselItems = document.querySelectorAll(".carousel-item");
  carouselItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectId = parseInt(item.getAttribute("data-project-id"));
      const selectedProject = projects.find((p) => p.id === projectId);

      // Update main content when carousel item is clicked
      document.querySelector(".main-content").innerHTML =
        renderMainContent(selectedProject);
    });
  });
}

document.addEventListener("DOMContentLoaded", initializeApp);
