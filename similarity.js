// similarity.js

export function calculateSimilarityScore(nameset, parentCounters) {
    const scores = parentCounters.map(counter => {
      let score = 0;
      for (const char of nameset) {
        score += counter[char] || 0; // Handle cases where char is not present in counter
      }
      return score;
    });
  
    const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  
    const variance = scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length;
  
    const standardDeviation = Math.sqrt(variance);
  
    return scores.reduce((sum, score) => sum + score, 0) - standardDeviation;
  }