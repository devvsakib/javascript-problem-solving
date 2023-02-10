// function findingBadData(arr) {
    // let badData = 0;
    // const err = "Given input must be Array";

    // if (Array.isArray(arr)) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i] < 0) {
    //             badData++;
    //         }
    //     }
    //     return badData;
    // }
    // return err;
// }
function countBadData(data) {
    let count = 0;
    for (const ele of data) {
        if (typeof ele !== "number" || ele < 0) {
            count++;
        }
    }
    return count;
}

const dataInput = [1, 2, 3, 4, -5, 6, 7, 8, 9, -10, "L-B", "L-B"];
const badData = countBadData(dataInput);
console.log(badData);