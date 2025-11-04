function sortColor(nums){
    let low=0;
    let mid=0;
    let high=nums.length-1;
    while(mid<=high){
        if(nums[mid]===0){
            let temp=nums[mid];
            nums[mid]=nums[low];
            nums[low]=temp;
            low++;
            mid++;
        }else if(nums[mid]===1){
            mid++;
        }else{
            let temp=nums[mid];
            nums[mid]=nums[high];
            nums[high]=temp;
            high--;
        }
    }
    return nums;
}
console.log(sortColor([2,1,0]));