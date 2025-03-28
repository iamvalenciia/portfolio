import { projects } from "./data.js";
export default function renderCarousel() {
  return `
    <div class="carousel-container">
      <div class="carousel">
        ${projects
          .map(
            (project) => `
          <div class="carousel-item" data-project-id="${project.id}">
            <img src="${project.imageUrl}" alt="${project.title}">
            <div class="carousel-caption">
              <h3>${project.title}</h3>
              <p>${project.shortDescription}</p>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}
