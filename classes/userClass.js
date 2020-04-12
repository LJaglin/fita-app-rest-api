class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    generateLog() {
        console.log(`New user: first name is ${this.firstName} and last name is ${this.lastName}`);
    }
}

module.exports = User;