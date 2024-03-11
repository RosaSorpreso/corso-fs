fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method:'GET',
    headers:{
        'Content-type':'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTcyMTJkN2IxMTAwMTkwZTZmMTQiLCJpYXQiOjE3MDk4OTM0MDksImV4cCI6MTcxMTEwMzAwOX0.HZkeQ2N6C9nMLUq1ZoUdGC9k-Za4JnzyHVzNQGXD0Pw"
    }
})
.then(res => res.json())
.then(phones => {
    console.log(phones)
    for(let phone of phones){
        let card = createClone()

        let img = card.querySelector('#img')
        let name = card.querySelector('#name')
        let price = card.querySelector('#price')
        let editBtn = card.querySelector('#edit-btn')
        let infoBtn = card.querySelector('#info-btn')

        img.src = phone.imageUrl
        name.innerText = phone.name
        price.innerText = phone.price + '€'
        editBtn.href = `edit-product.html?id=${phone._id}`
        infoBtn.href = `info.html?id=${phone._id}`

        document.querySelector('.row').append(card)
    };
})

function createClone(){
    let template = document.querySelector('#card-template')
    let clone = template.content.cloneNode(true)
    return clone
}