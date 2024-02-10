function argumentInfo(...data) {
    let result = {};
    for (el of data) {
        let type = typeof el;
        console.log(`${type}: ${el}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 1;
        } else {
            result[type] += 1;
        }
    }

    let entries = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for(entry of entries){
        let type = entry[0];
        let count = entry[1];
        console.log(`${type} = ${count}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })