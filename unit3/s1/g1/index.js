var User = /** @class */ (function () {
    function User(name, lastName) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.minutiTotali = 0;
        this.name = name;
        this.lastName = lastName;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    User.prototype.chiamata = function (minutiDurata) {
        if (this.credito - (minutiDurata * 0.20) < 0) {
            console.log("Impossibile effettuare la chiamata");
            return;
        }
        this.credito -= (minutiDurata * 0.20);
        this.numeroChiamate += 1;
        this.minutiTotali += minutiDurata;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    Object.defineProperty(User.prototype, "numero404", {
        get: function () {
            return this.credito;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getNumeroChiamate", {
        get: function () {
            return this.minutiTotali;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var me = new User('Rosa', 'Sorpreso');
me.ricarica(20);
me.chiamata(5);
me.chiamata(3);
me.chiamata(3);
console.log(me.numero404);
console.log(me.getNumeroChiamate);
