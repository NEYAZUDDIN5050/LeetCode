//Selection Sort;
function SelectionSort(arr){
    let n=arr.length;
    for(let i=0; i<n-1; i++){//loop for passes
        let minIndex=i;//assume first element is min
        for(let j=i+1; j<n; j++){//loop for comparing with rest of the elements
            if(arr[j]<arr[minIndex]){//finding the min element index
                minIndex=j;//updating minIndex
            }
        }
        if(minIndex !== i){//if minIndex is not the position of the current element
            //swap
            let temp=arr[i];//
            arr[i]=arr[minIndex];//
            arr[minIndex]=temp;
        }
    }
 return arr;
}
console.log(SelectionSort([23,6,71,53,2]));

