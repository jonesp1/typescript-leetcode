function findDifference(nums1: number[], nums2: number[]): number[][] {
    const notInNums2: number[] = [];
    const notInNums1: number[] = [];
    
    
    const setNums1 = new Set(nums1);
    const setNums2 = new Set(nums2);
    
    
    for (const num of nums1) {
        if (!setNums2.has(num)) {
            if (!notInNums2.includes(num)) {
                notInNums2.push(num);
            }
        }
    }
    
    
    for (const num of nums2) {
        if (!setNums1.has(num)) {
            if (!notInNums1.includes(num)) {
                notInNums1.push(num);
            }
        }
    }
    
    return [notInNums2, notInNums1];
};

//example
console.log(findDifference([1, 2, 3], [2, 4, 6]));

