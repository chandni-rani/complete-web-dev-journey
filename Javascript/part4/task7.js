/* You have an array named `topCities` containing "New York", "Los Angeles", "Chicago", "Houston", "Phoenix".
Create a hard copy of this array named `hardCopyCities`.*/

let topCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

let hardCopyCities = [...topCities];

topCities.pop();
console.log(hardCopyCities);
console.log(topCities);