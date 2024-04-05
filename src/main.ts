function reverseWords(s: string): string {
    s = s.trim();
    const words = s.split(' ');
    const filteredWords = words.filter(word => word !== '');

    return filteredWords.reverse().join(' ');
}

//example
// Measure the runtime
const startTime = Date.now();
const result = reverseWords('the sky is blue');
const endTime = Date.now();

// Calculate the runtime in milliseconds
const runtimeInMs = endTime - startTime;

// Log the result and runtime
console.log("Reversed words:", result);
console.log("Runtime in milliseconds:", runtimeInMs);