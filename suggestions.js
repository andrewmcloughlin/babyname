// suggestions.js
import { processParents } from './process_parents.js'; 
import { calculateSimilarityScore } from './similarity.js'; 

export async function generateSuggestions(parentNames, babyNames) { 

  const [parents, unionSet, parentCounters] = processParents(parentNames);
  const suggestions = [];

  for (const name of babyNames) {
    if (!parentNames.includes(name)) { 
      const nameset = new Set(name.toLowerCase());
      if (isSubset(nameset, unionSet)) { // Check if nameset is a subset of unionSet
        const overallScore = calculateSimilarityScore(nameset, parentCounters);
        suggestions.push([name, overallScore]); 
      }
    }
  }

  return suggestions;
}

function isSubset(setA, setB) {
  for (const element of setA) {
    if (!setB.has(element)) {
      return false;
    }
  }
  return true;
}