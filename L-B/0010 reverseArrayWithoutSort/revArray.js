function reverseArray(arr){
    var newArr = [];
    for(var i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log(reverseArray(arr))
