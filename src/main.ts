function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const result = [];
    
    for (const num of nums1) {
        if (map.has(num)) {
        map.set(num, map.get(num) + 1);
        } else {
        map.set(num, 1);
        }
    }
    
    for (const num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
        result.push(num);
        map.set(num, map.get(num) - 1);
        }
    }
    
    return result;
}

//example
const nums1 = [1,2,2,1];
const nums2 = [2,2];
const result = intersect(nums1, nums2);
// Log the result and runtime
console.log("Result:", result);
