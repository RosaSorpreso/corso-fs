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

    fetch('https://striveschool-api.herokuapp.com/api/product/',{
                method:'POST',
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