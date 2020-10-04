class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    generateLog() {
        console.log(`New user: email is ${this._email} and password is ${this._password}`);
    }
}

module.exports = User;