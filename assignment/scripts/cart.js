console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = ['apples', 'oranges', 'bananas', 'grapes', 'strawberries'];

function addItem(item) {
basket.push(item);
return true;
}
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

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

const maxItems = 5;

function isFull() {
    return basket.length >= maxItems;
}
console.log(isFull());

