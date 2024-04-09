function closeStrings(word1: string, word2: string): boolean {
    if(word1.length !== word2.length) return false;

    const freqMap1: Map<string, number> = new Map();
    const freqMap2: Map<string, number> = new Map();

    for(const char of word1) {
        freqMap1.set(char, (freqMap1.get(char) || 0) + 1);
    }

    for(const char of word2) {
        freqMap2.set(char, (freqMap2.get(char) || 0) + 1);
    }

    const set1 = new Set(freqMap1.values());
    const set2 = new Set(freqMap2.values());

    const chars1 = new Set(freqMap1.keys());
    const chars2 = new Set(freqMap2.keys());

    return setEqual(set1, set2) && setEqual(chars1, chars2);
}
    function setEqual(set1: Set<any>, set2: Set<any>): boolean {
        if(set1.size !== set2.size) return false;
        for(const val of set1) {
            if(!set2.has(val)) return false;
        }
        return true;
}

//example
console.log(closeStrings("abc", "bca"));

