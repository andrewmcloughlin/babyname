// script.js
import { generateSuggestions } from './suggestions.js'; 
import { getNames } from './get_names.js'; 

// Get the input element and the button
const parentNamesInput = document.getElementById('parentNamesInput');
const submitButton = document.getElementById('submitButton');
const resultsDiv = document.getElementById('results'); 

// Event listener for the submit button
submitButton.addEventListener('click', async () => { 
  const parentNames = parentNamesInput.value.split(',').map(name => name.trim()); 

  try {
    const babyNames = await getNames('names.json'); 
    const suggestions = await generateSuggestions(parentNames, babyNames); 

    // Sort suggestions by score in descending order
    suggestions.sort((a, b) => b[1] - a[1]); 

    resultsDiv.innerHTML = ''; 
    if (suggestions.length === 0) {
      resultsDiv.innerHTML = '<p>No suggestions found.</p>';
    } else {
      const list = document.createElement('ul');
      suggestions.forEach(([name, score]) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${name}`;
        list.appendChild(listItem);
      });
      resultsDiv.appendChild(list);
    }
  } catch (error) {
    // Handle errors (e.g., network errors, file loading errors)
    console.error("Error:", error);
    resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});