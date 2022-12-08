// scripts.js
const journalForm = document.querySelector("#journal-form");
const entriesList = document.querySelector("#entries-list");

if (journalForm) {
  // The page is the main page with the journal entry form

  journalForm.addEventListener("submit", e => {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the entry text from the textarea
    const entryText = journalForm.querySelector("#entry-text").value;

    // Create a new entry object with the current date and the entry text
    const entry = {
      date: new Date().toISOString(),
      text: entryText
    };

    // Save the entry to local storage
    let journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    journalEntries.push(entry);
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));

    // Clear the textarea
    journalForm.querySelector("#entry-text").value = "";
  });
}

if (entriesList) {
  // The page is the entries page with the entries list

  // Get the journal entries from local storage
  let journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

    // Sort the entries by date in descending order
    const sortedEntries = journalEntries.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });
  
    // Clear the existing entries from the list
    entriesList.innerHTML = "";
    
    // Iterate over the sorted entries array
    sortedEntries.forEach(entry => {
        // Create a new li element for the entry
        const li = document.createElement("li");
    
        // Set the date and entry text on the li element
        li.innerHTML = `
        <div class="entry-date">${entry.date}</div>
        <div class="entry-text">${entry.text}</div>
        `;
    
        // Add the li element to the entries list
        entriesList.appendChild(li);
    });
};