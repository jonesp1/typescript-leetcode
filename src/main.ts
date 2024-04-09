function uniqueOccurrences(arr: number[]): boolean {
    const countMap: Map<number, number> = new Map();

    for (const num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    const occurencesSet = new Set(countMap.values());
    return occurencesSet.size === countMap.size;
};

//example
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));

