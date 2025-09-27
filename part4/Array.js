let teaFlavors = ['green tea', 'black Tea', 'ollong tea'];

const firstTea = teaFlavors[0]; 
const secondTea = teaFlavors[2];

console.log('First tea flavor:', firstTea);
console.log('Second tea flavor:', secondTea);



let cities = ['London', 'Paris','New York'];

const favoriteCity = cities[1];
console.log('My favorite city is:', favoriteCity);

let teaTypes = ['oolong', 'green', 'black'];
teaTypes[1] = 'jasmine tea';
console.log('Updated tea types:', teaTypes);

let citiesvisited = ['Tokyo', 'Berlin', 'Sydney'];
citiesvisited.push('Barcelona');
citiesvisited.unshift('Madrid');
console.log('Cities visited:', citiesvisited);


let teaorders = ['green tea', 'black tea', 'oolong tea'];
teaorders.pop();
console.log('Tea orders after pop:', teaorders);


let popularTea = ['green tea', 'black tea', 'oolong tea'];
let softcopyTea = popularTea;
console.log(softcopyTea);

let topcities = ['New York', 'Los Angeles', 'Chicago'];
let hardcopycities = [...topcities];
topcities.pop();
console.log('Original top cities:', topcities);


let europeanCities = ['London', 'Paris', 'Berlin'];
let asianCities = ['Tokyo', 'Beijing', 'Seoul'];
let allCities = [...europeanCities, ...asianCities];
console.log('All cities:', allCities);


let teaList = ['green tea', 'black tea', 'oolong tea'];
let menulenghth = teaList.length;
console.log('Total number of teas:', menulenghth);


let citybucketlist = ['New York', 'Paris', 'Tokyo'];


let topcitie = ['berlin', 'singapore', 'new york']
let hardcopycitiess = [...topcitie]
console.log(hardcopy);


let europeancoountry = ['paris', 'rome']
let asiancountry = ['china', 'tokyo']
let wordcountry = [...europeanCities, ...asiancountry]
console.log(wordcountry);
