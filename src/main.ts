function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowelCount = 0;
    let currentVowelCount = 0;

    // Calculate vowel count for the first window
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currentVowelCount++;
        }
    }
    maxVowelCount = currentVowelCount;

    // Slide the window and update maxVowelCount
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            currentVowelCount++;
        }
        if (vowels.has(s[i - k])) {
            currentVowelCount--;
        }
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
    }

    return maxVowelCount;
}

//example
console.log(maxVowels("abciiidef", 3)); 