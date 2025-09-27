// Using Object.getPrototypeOf() is the modern, standard way to get an object's prototype.
// The __proto__ property is deprecated.
let computer = { cpu: 20 };
let macbook = { screen: 'HD' };

console.log('computer prototype:', Object.getPrototypeOf(computer));

let genericCar = { tyres: 4 };

let tesla = {
    driver: 'AI',
};

// Correcting the typo from 'object.setprototype' to 'Object.setPrototypeOf'
Object.setPrototypeOf(tesla, genericCar);

// Now tesla inherits the 'tyres' property from genericCar
console.log(`Does the Tesla have tyres? Yes, ${tesla.tyres}.`);