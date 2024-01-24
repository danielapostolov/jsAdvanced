function addAndRemoveElements(commands) {
    let numToAdd = 1;
    let arr = []
    for (let command of commands) {
        if (command == 'add') {
            arr.push(numToAdd);
            numToAdd++;
        } else {
            arr.pop();
            numToAdd++;
        }
    }
    if (arr.length) {
        arr.forEach(el => console.log(el));
    } else {
        console.log('Empty');
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
