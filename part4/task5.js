/* You have an array named `teaOrders` containing "Green", "Black", "Oolong", "White", "Herbal".
Remove the last element from the array using the `pop` method and store it in a variable named `lastOrder`. */

let teaOrders = ["Green-tea", "Black-tea", "Oolong-tea", "White-tea", "Herbal-tea"];

const lastOrder = teaOrders.pop();

console.log(lastOrder);
console.log(teaOrders);