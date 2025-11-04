//Find largest Number;
// function largestNum(nums){
//     let n=nums.length;
//     let largest=nums[0];     //start from 0 place element;
//     for(let i=0;i<n;i++){     //loop Run for every element 
//         if(nums[i]>largest){    // If number[i] is greator then the nums[0];
//             largest=nums[i];    //largest element goes to the nums[i];

//         }
//     }
//    return largest;    // return itttt
// }
// console.log(largestNum([2,3,4,5,6]));

// second largest elememt;
// class Solution {
//   secondLargest(nums) {
//     let first = -Infinity;
//     let second = -Infinity;

//     for (const x of nums) {
//       if (x > first) {                 // new max
//         second = first;
//         first = x;
//       } else if (x < first && x > second) { // new second-max
//         second = x;
//       }
//     }
//     return second === -Infinity ? -1 : second;
//   }
// }

// // Create an instance of Solution
// const sol = new Solution();

// // quick checks
// console.log(sol.secondLargest([8, 8, 7, 6, 5])); // 7
// console.log(sol.secondLargest([4, 4, 4]));       // -1
// console.log(sol.secondLargest([1]));             // -1
// console.log(sol.secondLargest([-5, -3, -1]));    // -3


//Check the array is sorted ya not;
// function FindsortedArray(arr){
//   let n= arr.length;
//   for(let i=0;i<n;i++){
//     if(arr[i-1] > arr[i]){
//       return false;
//     }
//     }
//     return true;
//   }
//   console.log(FindsortedArray([1,2,6,4,5]));

//Remove Duplicate the array;
// function RemoveArray(arr){
//       let n= arr.length;
//       let i=0;
//       for(let j=0; j < n;j++){
//             if(arr[i] !== arr[j]){
//                   i++;
//                   arr[i] = arr[j];
//             }
//       }
//       return i+1;
// }
// console.log(RemoveArray([1,2,3,4,4,5,4]));

// //Rotate first element in an array;
// function RotateElement(arr){
//       let temp=arr[0];                        //First store first element in temp
//       for(let i=0;i<arr.length-1;i++){         //loop for last second element
//             arr[i] = arr[i+1];                   //start to the second last , shift the value at the next index into the current positions 
//       }
//       arr[arr.length-1] = temp;                  // placed the secondary store element in last positions
//       return arr;
// } 
// console.log(RotateElement([1,2,3,4,5]));


//Rotate array by K elements

// function RotateArrByK(arr,k){
//     let n=arr.length;

//     function reverse(subArr,left,right){
//         while(left<right){
//             [subArr[left], subArr[right]]=[subArr[right],subArr[left]];
//             left++;
//             right--;
//         }
//     }
//     reverse[arr,0,n-1];
//     reverse[arr,0,k-1];
//     reverse[arr,k ,n-1];
// }
// console.log(RotateArrByK([1,2,3,4,5],2))

// //Move zero to an end;
// function MoveZero(arr) {
//   let insertPosition = 0;      // Keeps track of where the next non-zero element should be placed
//   
//   for (let i = 0; i < arr.length; i++) {      // Loop through the array from start to end
//     
//     if (arr[i] !== 0) {                 // Check if the current element is NOT zero
//       
//       arr[insertPosition] = arr[i];            // Place the current non-zero element at the insertPosition index
//       
//       insertPosition++;                     // Move insertPosition forward by one so the next non-zero will be placed after it
//     }
//   }
//   // After placing all non-zero elements at the start,
//   // fill the remaining positions in the array with zeros
//   while (insertPosition < arr.length) {
//     arr[insertPosition] = 0;
//     insertPosition++;
//   }
//   // Return the modified array with zeros shifted to the end
//   return arr;
// }
// console.log(MoveZero([1, 2, 3, 0, 6, 0, 7, 7]));
//  // Output: [1, 2, 3, 6, 7, 7, 0, 0]


//Linear search Ik baar me bnaya hu mai;
// function LinearSearch(arr,k){
//     let n=arr.length;
//     let i=0;
//     for(let i=0;i<n; i++){
//     if(arr[i] === k){
//         return i; 
//     }
//     }
//     return -1;
// }
// console.log(LinearSearch([1,2,3,4,5], 3));

// //Merge two sorted array;
// function mergeArr(arr1,arr2){
//     let merge=[];
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j<arr2.length){
//         if(arr1[i] < arr2[j]){
//             merge.push(arr1[i]);
//             i++;
//         }else{
//             merge.push(arr2[j]);
//             j++;
//         }
//     }
//     return merge;
// }
// console.log(mergeArr([1,2,34],[4,5,6]));

//find the missing number In an array;

// [1,2,3,5]
// function missingNumber(arr){
//     let n= arr.length;
//    for(let i=0;i<n ; i++){
//       if(arr[i] !== i+1 ){
//         arr= i+1;
//       }

//    }
//    return n;
// }
// console.log(missingNumber([1,2,3,5]));


//find the number which is appearce once and other number twice;

// function AppearsOnce(arr){
//    let num=0;
//    for(let i=0; i<arr.length; i++){
//      num ^=  arr[i]                 //uses of xor -------
//    }
//    return num;
// }
// console.log(AppearsOnce([1,2,3,3,2]));


//Longest Subarray with given Sum K(Positives)

// function LongestSubArr(arr,k){
//    let n= arr.length;
//    let target=k;
//    for(let i=0; i<n; i++){
//       let num=target;
//       if(target ===n);
//       return    
//    }
// }