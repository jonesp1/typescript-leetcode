function removeStars(s: string): string {
    const stack: string[] = [];

    for (const char of s) {
        if (char === '*') {
            stack.pop(); // Remove the closest non-star character to the left
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
}

//example
console.log(removeStars('ab*cd*ef'))

