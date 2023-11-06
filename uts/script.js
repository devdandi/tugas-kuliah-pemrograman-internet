let carts = []
let products = [
    {
        id: 1,
        name: 'Baju',
        price: 10000,
        img: "https://th.bing.com/th/id/OIP.zy85RCWhERHVl8xZBl_36AHaKs?w=184&h=265&c=7&r=0&o=5&pid=1.7",
        stocks: 10
    },
    {
        id: 2,
        name: 'Celana',
        price: 400000,
        img: "https://th.bing.com/th/id/OIP.TgFIraNlWRj4mL2BP9QgyAHaHZ?w=183&h=182&c=7&r=0&o=5&pid=1.7",
        stocks: 10
    },
    {
        id: 3,
        name: 'Sepatu',
        price: 120000,
        img: "https://th.bing.com/th/id/OIP.aBHnPfcaajJXHWIwBj34tAHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7",
        stocks: 1
    }
]


const initializeProducts = () => {
    const product_elements = document.getElementById('products')

    products.map(product => {
        
        product_elements.insertAdjacentHTML(
            "beforeend",
            `<div class="product-view">
                <img class="image" src="${product.img}">
                <h5>${product.name}</h5>
                <div class="product-pricing">
                    <h5>Rp. ${product.price}</h5>
                    <h5>Stock ${product.stocks}</h5>
                </div>
                <button onclick="addToCart(${product.id})" class="btn-cart">Add to cart</button>
            </div>`
        )
    })
}
initializeProducts()


const addToCart = (productId) => {

    if(!products.find(product => product.id === productId)) {
        alert('Product not found')
        return
    }
    
    let product = products.find(product => product.id === productId)
    product['total_product'] = 1
    carts.push(
        product
    )
    alert(`${product.name} berhasil ditambahkan.`)
    
    
    renderCarts()
}


const renderCarts = () => {
    const cart_elements = document.getElementById('carts')
    while (cart_elements.firstChild) {
        cart_elements.removeChild(cart_elements.lastChild);
      }

    carts.map(cart => {
        cart_elements.insertAdjacentHTML(
            "beforeend",
            `<div class="cart-view">
                <h5>${cart.name}</h5>
                <h5>Rp. ${cart.price} x${cart.total_product}</h5>
                <h5>Total: Rp. ${cart.price * cart.total_product}</h5>
                <button onclick="deleteCart(${cart.id})">Hapus</button>
            </div>`
        )
    })
    sumGrandTotal()
}


const sumGrandTotal = () => {
    const cash = document.getElementById('cash')
    let grandtotal = 0

    carts.map(cart => {
        grandtotal += (cart.price * cart.total_product)
    })

    const grandtotal_element = document.getElementById('grandtotal')
    grandtotal_element.innerText = `Grand Total: Rp. ${grandtotal}`
}
const processPayment = () => {
    const cash = document.getElementById('cash')
    let grandtotal = 0

    carts.map(cart => {
        grandtotal += (cart.price * cart.total_product)
    })

    const grandtotal_element = document.getElementById('grandtotal')
    grandtotal_element.innerText = `Grant Total: Rp. ${grandtotal}`

    if (cash.value < grandtotal) {
        alert('Uang tidak cukup')
        cash.value = 0
        return
    }
    
}

const deleteCart = (productId) => {
    carts = carts.filter(cart => cart.id !== productId)
    renderCarts()
}