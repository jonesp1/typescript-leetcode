function compress(chars:string[]): number {
    let count = 1;
    let index = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
        count++;
        } else {
        chars[index++] = chars[i];
        if (count > 1) {
            for (let j of count.toString().split('')) {
            chars[index++] = j;
            }
        }
        count = 1;
        }
    }
    return index;
}

//example
const result = compress(["a","a","b","b","c","c","c"]);
// Log the result and runtime
console.log("Result:", result);
