/**
 * Generates the main content section for a project, displaying its details.
 *
 * @param {Object} project - The project object containing its details.
 * @param {string} project.title - The title of the project.
 * @param {string} project.shortDescription - A brief description of the project.
 * @param {string} project.imageUrl - URL of the project's main image.
 * @param {string} project.fullDescription - A detailed description of the project.
 * @param {string[]} [project.technologies] - An optional array of technologies used in the project.
 * @param {string} [project.githubLink] - An optional GitHub repository link for the project.
 *
 * @returns {string} - The HTML string for the main project content.
 */

export default function renderMainContent(project) {
  return `
      <div class="project-details">
        <div class="project-header">
          <h1>${project.title}</h1>
          <p class="short-description">${project.shortDescription}</p>
        </div>
        <div class="project-content">
          <div class="project-image">
            <img src="${project.imageUrl}" alt="${project.title}">
          </div>
          <div class="project-info">
            <p>${project.fullDescription}</p>
            ${
              project.technologies
                ? `<div class="technologies">
                        <ul>
                            ${project.technologies
                              .map((tech) => `<li>${tech}</li>`)
                              .join("")}
                        </ul>
                    </div>`
                : ""
            }
            ${
              project.githubLink
                ? `<a href="${project.githubLink}" target="_blank" class="github-link">View on GitHub</a>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
}
