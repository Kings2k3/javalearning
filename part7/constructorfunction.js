//  function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let istperson = new person('kings', '21');
// console.log(istperson);


// function Tea(type) {
//     this.type = type;

//     this.describe = function name() {
//         return `this is a cup of ${this.type}`;                                   
        
//     }
// };

// let lemontea = new Tea('Lemon Tea');
// console.log(lemontea.describe());


function Animal(species) {
    this.species = species

    Animal.prototype.sound = function () { 
        return `${this.species} makes a sound`
        
    }

};

let see = new Animal('Dog')
console.log(see.sound());
