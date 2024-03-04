class User {
    constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
    }

    compareAge(anotherUser) {
    if (this.age < anotherUser.age) {
        return `${anotherUser.firstName} è più grande di ${this.firstName}.`
    } else if (this.age > anotherUser.age) {
        return `${anotherUser.firstName} è più giovane di ${this.firstName}.`
    } else {
        return `${anotherUser.firstName} e ${this.firstName} hanno la stessa età.`
    }
    }
}

x = new User('Rosa', 'Sorpreso', 22, 'Napoli')
y = new User('Sabrina', 'Ferilli', 59, 'Roma')

console.log(x.compareAge(y))