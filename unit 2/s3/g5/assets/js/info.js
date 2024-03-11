let url = new URLSearchParams(location.search)
let id = url.get('id')

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method:'GET',
    headers:{
        'Content-type':'application/json',
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTcyMTJkN2IxMTAwMTkwZTZmMTQiLCJpYXQiOjE3MDk4OTM0MDksImV4cCI6MTcxMTEwMzAwOX0.HZkeQ2N6C9nMLUq1ZoUdGC9k-Za4JnzyHVzNQGXD0Pw"
    }
})
.then(res => res.json())
.then(phone => {
    let name = document.querySelector('#name')
    let brand = document.querySelector('#brand')
    let price = document.querySelector('#price')
    let imageUrl = document.querySelector('#img-url')
    let description = document.querySelector('#description')

    name.innerText = phone.name
    brand.innerText = phone.brand
    price.innerText = phone.price + '€'
    imageUrl.src = phone.imageUrl
    description.innerText = phone.description
})