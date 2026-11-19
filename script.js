// Songa Learning Resource Explorer — Weeks 1, 2, and 3 concepts.

const resources = [
  { id: 1, title: "JavaScript Fundamentals", category: "JavaScript", description: "Review variables, data types, operators, and template literals to build a strong programming foundation.", completed: false },
  { id: 2, title: "JavaScript Logic and Functions", category: "JavaScript", description: "Practise conditions, loops, reusable functions, arrays, objects, and array methods.", completed: false },
  { id: 3, title: "Responsive CSS Guide", category: "CSS", description: "Learn how spacing, typography, flexible layouts, and media queries help pages work on different screens.", completed: false },
  { id: 4, title: "CSS Layout Practice", category: "CSS", description: "Use Flexbox and CSS Grid to arrange content into clear, responsive sections and cards.", completed: false },
  { id: 5, title: "Git and GitHub Beginner Guide", category: "Git & GitHub", description: "Learn repositories, staging, commits, pushing changes, and publishing a project on GitHub.", completed: false },
  { id: 6, title: "Writing a Useful Project README", category: "Git & GitHub", description: "Explain what a project does, how to run it, and which technologies or concepts it uses.", completed: false },
  { id: 7, title: "Career Goals and Skill Mapping", category: "Career Skills", description: "Identify your goals, assess your current skills, and choose practical next steps for career development.", completed: false },
  { id: 8, title: "Communication and Presentation Skills", category: "Career Skills", description: "Practise explaining ideas clearly, presenting with confidence, and collaborating with a team.", completed: false }
];

const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const resourceList = document.querySelector("#resource-list");
const resourceCount = document.querySelector("#resource-count");
const completedCount = document.querySelector("#completed-count");
const noResults = document.querySelector("#no-results");

function displayResources(resourcesToDisplay) {
  resourceList.replaceChildren();

  resourcesToDisplay.forEach(function(resource) {
    const card = document.createElement("article");
    card.classList.add("resource-card");

    if (resource.completed) {
      card.classList.add("is-completed");
    }

    const topline = document.createElement("div");
    topline.classList.add("card-topline");

    const category = document.createElement("span");
    category.classList.add("category-tag");
    category.textContent = resource.category;

    const status = document.createElement("span");
    status.classList.add("status");
    status.textContent = resource.completed ? "Completed" : "Not completed";
    if (resource.completed) status.classList.add("done");

    const title = document.createElement("h3");
    title.textContent = resource.title;

    const description = document.createElement("p");
    description.textContent = resource.description;

    const button = document.createElement("button");
    button.classList.add("completion-button");
    button.type = "button";
    button.dataset.resourceId = resource.id;
    button.textContent = resource.completed ? "Mark as Incomplete" : "Mark as Completed";
    button.setAttribute("aria-label", `${button.textContent}: ${resource.title}`);

    topline.appendChild(category);
    topline.appendChild(status);
    card.appendChild(topline);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);
    resourceList.appendChild(card);
  });

  noResults.hidden = resourcesToDisplay.length !== 0;
  resourceCount.textContent = resourcesToDisplay.length;
  updateCompletedCount();
}

function updateCompletedCount() {
  const completedResources = resources.filter(function(resource) {
    return resource.completed;
  });
  completedCount.textContent = completedResources.length;
}

function filterResources() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;

  const matchingResources = resources.filter(function(resource) {
    const titleMatches = resource.title.toLowerCase().includes(searchTerm);
    const descriptionMatches = resource.description.toLowerCase().includes(searchTerm);
    const matchesSearch = titleMatches || descriptionMatches;
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  displayResources(matchingResources);
}

searchInput.addEventListener("input", filterResources);
categoryFilter.addEventListener("change", filterResources);

// One parent listener handles clicks on dynamically created completion buttons.
resourceList.addEventListener("click", function(event) {
  const button = event.target.closest("button[data-resource-id]");
  if (!button || !resourceList.contains(button)) return;

  const resourceId = Number(button.dataset.resourceId);
  const selectedResource = resources.find(function(resource) {
    return resource.id === resourceId;
  });

  if (selectedResource) {
    selectedResource.completed = !selectedResource.completed;
    filterResources();
  }
});

filterResources();
