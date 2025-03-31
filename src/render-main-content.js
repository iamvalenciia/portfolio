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
