const journalForm = document.querySelector("#journal-form");
const entriesList = document.querySelector("#entries-list");

journalForm.addEventListener("submit", e => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the entry text from the text