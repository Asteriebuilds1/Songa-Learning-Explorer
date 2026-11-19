# Songa Learning Resource Explorer

A responsive resource directory for Songa scholars. Search resources by title or description, filter by category, and mark learning resources as completed.

## Features
- Eight sample learning resources across JavaScript, CSS, Git & GitHub, and Career Skills.
- Case-insensitive search across titles and descriptions.
- Category filtering; search and category filtering work together.
- Dynamically created resource cards.
- Completion buttons toggle between completed and incomplete.
- Resource count follows current filters; completed count covers the full resource array.
- No-results message and responsive styling.

## Files
- `index.html`: webpage structure and controls.
- `style.css`: layout, cards, responsive styles, and visual states.
- `script.js`: resource data, rendering, searching, filtering, event delegation, and progress counts.

## How to Run it locally
1. Keep the three files in the same folder.
2. Open `index.html` in a modern browser.
3. Try a search, choose a category, and click a completion button.
4. Open Developer Tools → Console to check for errors if any.

## Concepts used
- Week 1: variables, strings, numbers, Boolean values, template literals, Console debugging, and linking JavaScript to HTML.
- Week 2: arrays of objects, functions, conditions, array iteration, `filter()`, and `find()`.
- Week 3: DOM selection, creating elements, changing text content, input/change/click events, search, category filtering, and event delegation.

## Note
This project does not use an API, database, or browser storage and that' s because we haven't gotten there yet and instructed to avoid them. Completion status resets when the page is refreshed.
