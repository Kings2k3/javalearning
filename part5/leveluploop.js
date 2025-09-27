// let tea = ['green tea', 'black tea', 'chai', 'oolong tea'];
// let selectedTea = [];

// for (let i = 0; i < teas.length; i++) {
//     if(teas[i] === 'chai'){
//         break;
//     }
//     selectedTea.push(teas[i])

    
// }


// let cities = ['London', 'New york', 'Paris', 'Berlin']
// let VisitedCities = []

// for (let i = 0; i < cities.length; i++) {
//    if (cities[i] === 'Paris') {
//       continue; 
//    }
   
//     VisitedCities.push(cities[i])
    
// }

// console.log(VisitedCities);


// let numbers = [1, 2, 3, 4, 5]
// let smartnumbers = []

// for (const num of numbers) {
//     if (num === 4) {
//         break;
//     }
//     smartnumbers.push(num)
    
// }
// console.log(smartnumbers);

// let teatype = ['chai', 'green tea', 'herbal tea', 'black tea']
// let prefferredteas = []

// for (const tea of teatype) {
//     if (tea === 'herbal tea') {
//         continue;
//     }

//     prefferredteas.push(tea)
    
// }

// console.log(prefferredteas);

// let citiespopulation = {
//     'london': 8900000,
//     'new york': 8400000,
//     'paris': 2200000,
//     'berlin': 3500000,

// }

// let citypopulatioon = []

// for (const city in citiespopulation) {
//    if (city == 'berlin') {
//     break;
//    }

// }

// console.log(citypopulatioon);

// let worldcities = {
//  'sydney': 5000000,
//  'tokyo': 9000000,
//  'berlin': 3500000,
//  'paris': 2000000
// }

// let largecities = []

// for (const country in worldcities) {
//     if (worldcities[country] <= 3000000) {
//         continue;
//     }

//     largecities[country] = worldcities[country]
    
// }

// console.log(largecities);


// let teacollection = ['earl grey', 'green tea', 'chai', 'oolong tea'];
// let availableteas = []

// teacollection.forEach((tea) => {
//     if (tea === 'chai') {
//         return;

//     }
//     availableteas.push(tea)
    
// });

// console.log(availableteas);


// let myworldcities = ['berlin', 'tokyo', 'sydney', 'paris']
// let travelcities = []

// myworldcities.forEach((city) => {
//     if (city === 'sydney') {
//         return;

//     }
//    travelcities.push(city)
// }); 

// console.log(travelcities);


// let number = [2, 5, 7, 9];
// let doubleNumbers = []

// for (let i = 0; i < number.length; i++) {
//     if (number[i] === 7) {
//         continue;
//     }

//   doubleNumbers.push(number[i] * 2)
    
// }

// console.log(doubleNumbers);


let citites = ['paris', 'new york', 'tokyo', 'london'];
let citylist = [];

for (let i = 0; i < citites.length; i++) {
    const mycity = citites[i];
    citylist.push(mycity);
}

console.log(citylist);


