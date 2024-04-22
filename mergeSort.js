// Helper function to merge sorted arrays
function mergeSortedArrays(arr1,arr2){
    let i1=0, i2=0;
    let n1=arr1.length;
    let n2=arr2.length;

    let mergedArr = [];
    
    while (i1<n1 && i2<n2){
        if (arr1[i1] <= arr2[i2]){
            mergedArr.push(arr1[i1]);
            i1++
        } else {
            mergedArr.push(arr2[i2]);
            i2++;
        }
    }

    // Append the remaining items
    // (at least one of the following does not execute)

    while (i1<n1){
        mergedArr.push(arr1[i1]);
        i1++
    }
    
    while (i2<n2){
        mergedArr.push(arr2[i2]);
        i2++
    } 
    
    return mergedArr;   
}

console.log(mergeSortedArrays([1,2,3],[4,5,6]));
console.log(mergeSortedArrays([4,5,6],[1,2,3]));
console.log(mergeSortedArrays([1,3,5],[2,4,6]));
console.log(mergeSortedArrays([1,3],[2,4,5,6]));
console.log(mergeSortedArrays([2,4,5,6],[1,3]));