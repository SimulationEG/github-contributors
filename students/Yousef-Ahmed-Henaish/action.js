const storageKey = "yousef-henaish-portfolio-projects";
const projectList = document.querySelector("#project-list");
const projectForm = document.querySelector("#project-form");
const formStatus = document.querySelector("#form-status");
const currentYear = document.querySelector("#current-year");

function showStatus(message, isError = false) {
    formStatus.textContent = message;
    formStatus.dataset.error = String(isError);
}

function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = "project-card";

    const category = document.createElement("p");
    category.className = "project-category";
    category.textContent = "Added project";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    article.append(category, title, description);

    if (project.url) {
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "View project ↗";
        article.append(link);
    }

    return article;
}

function readSavedProjects() {
    const savedProjects = localStorage.getItem(storageKey);
    if (!savedProjects) {
        return [];
    }

    const projects = JSON.parse(savedProjects);
    if (!Array.isArray(projects) || !projects.every(isValidProject)) {
        throw new Error("Saved projects have an invalid format.");
    }

    return projects;
}

function isValidProject(project) {
    return project !== null
        && typeof project === "object"
        && typeof project.title === "string"
        && typeof project.description === "string"
        && typeof project.url === "string";
}

try {
    readSavedProjects().forEach((project) => projectList.append(createProjectCard(project)));
} catch (error) {
    showStatus("Saved projects could not be loaded. Clear this site's saved data and try again.", true);
    console.error("Unable to load saved portfolio projects.", error);
}

projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(projectForm);
    const project = {
        title: formData.get("title").trim(),
        description: formData.get("description").trim(),
        url: formData.get("url").trim()
    };

    if (!project.title || !project.description) {
        showStatus("Enter a project name and description.", true);
        return;
    }

    if (project.url) {
        try {
            const url = new URL(project.url);
            if (url.protocol !== "https:" && url.protocol !== "http:") {
                throw new Error("Project links must use HTTP or HTTPS.");
            }
        } catch (error) {
            showStatus("Enter a valid project link starting with http:// or https://.", true);
            return;
        }
    }

    try {
        const projects = readSavedProjects();
        projects.push(project);
        localStorage.setItem(storageKey, JSON.stringify(projects));
        projectList.append(createProjectCard(project));
        projectForm.reset();
        showStatus("Project added and saved in this browser.");
    } catch (error) {
        showStatus("The project could not be saved. Check your browser storage settings and try again.", true);
        console.error("Unable to save portfolio project.", error);
    }
});

currentYear.textContent = String(new Date().getFullYear());
