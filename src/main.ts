function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let right = 0;
    let max = 0;
    let zeroCount = 0;
    while (right < nums.length) {
        if (nums[right] === 0) {
        zeroCount++;
        }
        while (zeroCount > k) {
        if (nums[left] === 0) {
            zeroCount--;
        }
        left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
}

//example
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); 