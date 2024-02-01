/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    return l1 * l2
}
console.log(area(3,7))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b){
    if(a === b){
        return (a + b) * 3
    }else{
        return a + b
    }
}
console.log(crazySum(3,3))
console.log(crazySum(2,3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const b = 19
function crazyDiff(a){
    if(a > 19){
        return Math.abs(a - b) * 3
    }else{
        return Math.abs(a - b)  
    }
}
console.log(crazyDiff(3))
console.log(crazyDiff(20))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n > 20 && n <100 || n === 400){
        return true
    }
}
console.log(boundary(30))
console.log(boundary(400))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(stringa){
    if(stringa.startsWith('EPICODE')){
        return stringa
    }else{
        return 'EPICODE ' + stringa
    }
}
console.log(epify('EPICODE è una bella scuola'))
console.log(epify('è una bella scuola'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(a){
    Math.abs(a)
    if(a % 3 === 0 || a % 7 === 0){
        return 'il numero è multiplo di 3 o di 7'
    }
}
console.log(check3and7(-7))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa){
    return stringa.split('').reverse().join('')
}
console.log(reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringa){
    let newStringa = stringa.split(' ');
    for(i = 0; i < newStringa.length; i++){
        newStringa[i] = newStringa[i][0].toUpperCase() + newStringa[i].substring(1)
    }
    return newStringa.join(' ')
}
console.log(upperFirst('ciao mi chiamo rosa'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa){
    return stringa.slice(1,-1)
}
console.log(cutString('ciao mi chiamo rosa'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let arr = [];
    for(i = 0; i < n; i++){
        arr.push(Math.floor(Math.random() * 11));
    }
    return arr
}
console.log(giveMeRandom(3))