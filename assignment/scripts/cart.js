console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['blackberries', 'oranges', 'bananas', 'grapes'];

const maxItems = 5;

function isFull() {
    return basket.length >= maxItems;
}
function addItem(item) {
return basket.push(item) ? isFull() : false;
}
console.log(`Basket is ${basket}`);
console.log('Is my basket full? (expect false)', isFull());
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log('Is my basket full? (expect true)', isFull());

function listItems(){
    for (const item of basket){
        console.log(item);
    }
}
listItems();

function isFull() {
    return basket.length >= maxItems;
}
console.log('Should expect true', isFull());

function removeItem(basket, item) {
    const index = basket.indexOf (item);
    basket.splice(index, 1);
    return (basket === null) ? 'null' : item ;
}
console.log('Currently in your basket', basket);
console.log('You removed blackberries from your basket (should expect blackberries)', removeItem(basket, 'blackberries'));

function empty () {
    basket = [];
    }
    empty();
    console.log(basket);
