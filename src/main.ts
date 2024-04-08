function longestSubarray(nums: number[]): number {
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    let max = 0;
    while(right < nums.length) {
        if(nums[right] === 0) {
            zeroCount++;
        }
        while(zeroCount > 1) {
            if(nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        max = Math.max(max, right - left);
        right++;
    }
    return max;
}

//example
console.log(longestSubarray([1,1,0,0,1,1,1,0,1]));
