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

function empty () {
basket = [];
}
empty();
console.log(basket);

function isFull() {
    return basket.length >= maxItems;
}
console.log(isFull());

