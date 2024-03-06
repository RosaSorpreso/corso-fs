fetch('https://striveschool-api.herokuapp.com/books')
        .then(res => res.json())
        .then(books => {
            books.forEach(el => {
                let rowDiv = document.querySelector('#div-row')
                //div col
                let col = document.createElement('div')
                col.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3')
                rowDiv.append(col)

                //card
                let card = document.createElement('div')
                card.classList.add('card', 'my-2')
                col.append(card)

                //card img
                let img = document.createElement('img')
                img.classList.add('card-img-top')
                img.src = el.img
                card.append(img)

                //card body
                let body = document.createElement('div')
                body.classList.add('card-body')
                card.append(body)

                //body elements
                let title = document.createElement('h5')
                title.classList.add('card-title')
                title.innerText = el.title
                body.append(title)

                let price = document.createElement('p')
                price.classList.add('card-text')
                price.innerText = `Price: ${el.price}$`
                body.append(price)

                let category = document.createElement('p')
                category.classList.add('card-text')
                category.innerText = `Category: ${el.category}`
                body.append(category)

                //button to remove col
                let deleteBtn = document.createElement('button')
                deleteBtn.classList.add('btn', 'btn-primary')
                deleteBtn.innerText = 'Remove'
                body.append(deleteBtn)

                //button to add product to cart
                let addBtn = document.createElement('button')
                addBtn.classList.add('btn', 'btn-success', 'mx-1')
                addBtn.innerText = 'Buy'
                body.append(addBtn)

                // function to remove col
                deleteBtn.addEventListener('click', () => col.remove())

                //function to add product to cart and to add it to the local storage
                addBtn.addEventListener('click', () => {
                    let cart = document.querySelector('#cart-list')
                    let product = document.createElement('li')
                    product.innerText = `${el.title}, ${el.price}$`
                    cart.append(product)
                    localStorage.setItem('product', el.title)
                    let removeBtn = document.createElement('button')
                    removeBtn.classList.add('btn', 'btn-secondary', 'mx-1')
                    removeBtn.innerText = 'Remove'
                    product.append(removeBtn)
                    //function to remove the product from the cart and to remove it from the local storage 
                    removeBtn.addEventListener('click', () => {
                        product.remove()
                        localStorage.removeItem('product')
                    })
                })
            });
        })