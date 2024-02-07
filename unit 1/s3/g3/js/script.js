
let bottone = document.querySelector('#bottone')
let lista = document.querySelector('#lista')
let input = document.querySelector('#input')
let toDo
let elimina

bottone.addEventListener('click',function(){
    toDo = document.createElement('li')
    elimina = document.createElement('button')
    toDo.innerText = input.value
    elimina.innerText = 'Elimina'
    lista.append(toDo)
    toDo.append(elimina)
})

/*toDo.addEventListener('click',function(){
    
})*/

/*elimina.addEventListener('click',function(){
    toDo.remove()
})*/