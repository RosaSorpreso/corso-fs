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

    name.value = phone.name
    brand.value = phone.brand
    price.value = phone.price
    imageUrl.value = phone.imageUrl
    description.value = phone.description
})

let saveBtn = document.querySelector('#save-btn')
saveBtn.addEventListener('click', () => {
    let name = document.querySelector('#name').value
    let brand = document.querySelector('#brand').value
    let price = document.querySelector('#price').value
    let imageUrl = document.querySelector('#img-url').value
    let description = document.querySelector('#description').value

    let phone = {
        name,
        description,
        brand,
        imageUrl,
        price
        
    }

    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTcyMTJkN2IxMTAwMTkwZTZmMTQiLCJpYXQiOjE3MDk4OTM0MDksImV4cCI6MTcxMTEwMzAwOX0.HZkeQ2N6C9nMLUq1ZoUdGC9k-Za4JnzyHVzNQGXD0Pw"
                },
                body:JSON.stringify(phone)
            })
            .then(res => res.json())
            .then(res => {
                location.href = 'index.html'
            })
})

let deleteBtn = document.querySelector('#delete-btn')
deleteBtn.addEventListener('click', () => {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTcyMTJkN2IxMTAwMTkwZTZmMTQiLCJpYXQiOjE3MDk4OTM0MDksImV4cCI6MTcxMTEwMzAwOX0.HZkeQ2N6C9nMLUq1ZoUdGC9k-Za4JnzyHVzNQGXD0Pw"
                }
            })
            .then(res => res.json())
            .then(phoneDeleted => {
                location.href = 'index.html'
            })
})