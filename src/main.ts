function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  const length = Math.min(word1.length, word2.length);
  for (let i = 0; i < length; i++) {
    result += word1[i] + word2[i];
  }
  return result + word1.slice(length) + word2.slice(length);
}

//example
console.log(mergeAlternately('abc', 'pqr'));