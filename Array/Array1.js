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
// console.log(RemoveArray([1,2,3,4,4,5]));

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


