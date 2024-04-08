function moveZeroes(nums: number[]): void {
    let nonZeroPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroPointer++] = nums[i];
        }
    }
    for (let i = nonZeroPointer; i < nums.length; i++) {
        nums[i] = 0;
    }
}

//example

const nums1: number[] = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

const nums2: number[] = [0];
moveZeroes(nums2);
console.log(nums2);
