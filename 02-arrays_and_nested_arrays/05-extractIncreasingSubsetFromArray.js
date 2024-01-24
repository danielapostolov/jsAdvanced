function extractIncreasingSubsetFromArray(arr) {
    let biggestNum = arr.shift();
    let result = [];
    result.push(biggestNum);
    arr.forEach(x => {
        if (biggestNum <= x) {
            biggestNum = x;
            result.push(biggestNum);
        }
    })
    return result;
}
console.log(extractIncreasingSubsetFromArray([1,
    3, 8, 4, 10, 12, 3, 2, 24]))