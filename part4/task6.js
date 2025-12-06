/* You have an array name `popularTeas` containing "Green-tea", "Black-tea", "Oolong", "Chai", "Herbal-tae".
Create a soft copy of this array named `softCopyTeas`.*/

let popularTeas = ["Green-tea", "Black-tea", "Oolong", "Chai", "Herbal-tae"];

let softCopyTeas = popularTeas;
popularTeas.pop();

console.log(softCopyTeas);
console.log(popularTeas);