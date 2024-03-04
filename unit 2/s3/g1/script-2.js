class Pet {
    constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
    }

    checkSameOwner(anotherPet) {
        if (this.ownerName === anotherPet.ownerName) {
            return true
        } else {
            return false
        }
    }
}

let diego = new Pet('Diego', 'Rosa', 'Cane', 'Bulldog');
let romeo = new Pet('Romeo', 'Benedetta', 'Gatto', 'Siamese');

console.log(diego.checkSameOwner(romeo))