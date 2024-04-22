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

function splitArrayInHalf(arr){
    let n = arr.length;
    let half = Math.ceil(n/2);

    let arrLeft = arr.slice(0,half);
    let arrRight = arr.slice(half);

    return [arrLeft, arrRight];
}

function mergeSort(arr){
    if (arr.length<=1)
        return arr;

    let [arrLeft,arrRight] = splitArrayInHalf(arr);

    arrLeft = mergeSort(arrLeft);
    //console.log('LEFT', arrLeft);

    arrRight = mergeSort(arrRight);
    //console.log('RIGHT', arrRight);

    return mergeSortedArrays(arrLeft,arrRight);
}

if (0){
    console.log(mergeSortedArrays([1,2,3],[4,5,6]));
    console.log(mergeSortedArrays([4,5,6],[1,2,3]));
    console.log(mergeSortedArrays([1,3,5],[2,4,6]));
    console.log(mergeSortedArrays([1,3],[2,4,5,6]));
    console.log(mergeSortedArrays([2,4,5,6],[1,3]));
    
    console.log(splitArrayInHalf([1]));
    console.log(splitArrayInHalf([1,2]));
    console.log(splitArrayInHalf([1,2,3]));
    console.log(splitArrayInHalf([1,2,3,4]));
    console.log(splitArrayInHalf([1,2,3,4,5]));
    console.log(splitArrayInHalf([1,2,3,4,5,6]));
}

arr_test = [[3,2,1,13,8,5,0,1],
            [105,79,100,110],
            [],
            [10]
];
for (let arr of arr_test){
    console.log(arr, mergeSort(arr));
}

