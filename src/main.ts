function maxOperations(nums: number[], k:number): number {
    let count = 0;
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        let diff = k - nums[i];
        if(map.has(diff) && map.get(diff) > 0){
            count++;
            map.set(diff, map.get(diff) - 1);
        }else{
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
    }
    return count;
}

//example
console.log(maxOperations([1,2,3,4], 5));