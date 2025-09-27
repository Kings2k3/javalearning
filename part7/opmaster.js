let car = {
    make: 'toyota',
    model: 'camery',
    year: 2020,

    getDescription: function () {
        return `${this.make} ${this.model} was made in ${this.year}`;
    }
};

console.log(car.getDescription());

//lets discuss more on class //

class vehicle {
    
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        return `${this.make} is a car from ${this.model}`;
    }

};


//getter and setter//

class Employer { // Class names should be capitalized by convention
    constructor(name, salary) {
        this.name = name;
        this._salary = salary; // _salary suggests it's a private property
    }

    // Getter for salary
    get salary() {
        return this._salary;
    }

    // Setter for salary
    set salary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        }
    }
}

let emp = new Employer('Alice', 50000);
console.log(emp.salary); // Use the getter to access the salary
