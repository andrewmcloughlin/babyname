// get_names.js
export async function getNames(filename) {
  try {
    const response = await fetch(filename);
    const data = await response.json(); 
    return data; // Directly return the array of names
  } catch (error) {
    console.error("Error loading names from file:", error);
    return []; 
  }
}