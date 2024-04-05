function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const chars = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (vowels.has(chars[left]) && vowels.has(chars[right])) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        } else if (vowels.has(chars[left])) {
            right--;
        } else {
            left++;
        }
    }

    return chars.join('');
}

//example
console.log(reverseVowels('hello'));