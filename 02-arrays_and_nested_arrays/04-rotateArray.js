function rotateArray(arr, rotations) {
    for (let i = 1; i <= rotations; i++){
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }
    console.log(arr.join(' '));
}
rotateArray(['1',
    '2',
    '3',
    '4'],
    2)