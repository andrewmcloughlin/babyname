// process_parents.js
export function processParents(parentNames) {
  
    const parents = parentNames.map(name => name.toLowerCase());
    const unionSet = new Set([...parents.join('')]); 
  
    const parentCounters = parents.map(parent => {
      const counter = {};
      for (const char of parent) {
        counter[char] = (counter[char] || 0) + 1;
      }
      return counter;
    });
  
    return [parents, unionSet, parentCounters];
  }