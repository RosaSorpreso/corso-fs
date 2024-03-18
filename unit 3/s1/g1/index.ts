interface Smartphone {
    credito:number
    numeroChiamate:number
    minutiTotali:number

    ricarica(ammontare:number):void
    chiamata(minutiDurata:number):void
    get numero404():number
    get getNumeroChiamate():number
    azzeraChiamate():void
}

class User implements Smartphone {
    name:string
    lastName:string
    credito = 0
    numeroChiamate = 0
    minutiTotali = 0
    constructor(name:string, lastName:string){
        this.name = name
        this.lastName = lastName
    }
    ricarica(ammontare: number): void {
        this.credito += ammontare
    }
    chiamata(minutiDurata: number): void {
        if(this.credito - (minutiDurata * 0.20) < 0) {
            console.log("Impossibile effettuare la chiamata")
            return 
        }
        this.credito -= (minutiDurata * 0.20)
        this.numeroChiamate += 1
        this.minutiTotali += minutiDurata
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
    get numero404(){
        return this.credito
    }
    get getNumeroChiamate(){
        return this.minutiTotali
    }
}

const me = new User('Rosa', 'Sorpreso')
me.ricarica(20)
me.chiamata(5)
me.chiamata(3)
me.chiamata(3)
console.log(me.numero404);
console.log(me.getNumeroChiamate);


