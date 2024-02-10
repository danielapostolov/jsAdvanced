function breakfastRobot() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function (data) {

        let [command, order, qty] = data.split(' ');

        if (command == 'restock') {
            return restock(order, qty);
        } else if (command == 'prepare') {
            return prepare(order, qty);
        } else {
            return report();
        }
    }

    function restock(order, qty) {
        stock[order] += Number(qty);
        return 'Success';
    }

    function prepare(order, qty) {
        let entries = Object.entries(recipes[order]);
        let usedProducts = {};
        for (let [el, value] of entries) {

            let neededElQty = value * qty;
            let availableQty = stock[el];

            if (availableQty < neededElQty) {
                return `Error: not enough ${el} in stock`;
            }
            usedProducts[el] = neededElQty
        }

        for (let [el, value] of Object.entries(usedProducts)) {

            stock[el] -= value;
        }
        return 'Success';
    }

    function report() {

        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }
}
let manager = breakfastRobot()
console.log(manager('prepare turkey 1'))
console.log(manager('restock protein 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock carbohydrate 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare turkey 1'))
console.log(manager('report'))