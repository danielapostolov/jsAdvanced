function printElFromArr(arr, num) {

    let newArr = []
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr[i]);
    }
    return newArr
}
console.log(printElFromArr(['5',
    '20',
    '31',
    '4',
    '20'],
    2));