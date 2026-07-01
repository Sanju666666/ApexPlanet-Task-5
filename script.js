// Product Data

const products = [

{
name:"Laptop",
price:55000
},

{
name:"Mobile",
price:20000
},

{
name:"Headphones",
price:2500
},

{
name:"Smart Watch",
price:4000
},

{
name:"Keyboard",
price:1200
},

{
name:"Mouse",
price:800
}

];

let cart = [];

displayProducts();

function displayProducts(){

    let search = document.getElementById("search").value.toLowerCase();

    let container = document.getElementById("productContainer");

    container.innerHTML = "";

    let filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    filtered.forEach(product=>{

        container.innerHTML += `

        <div class="product">

            <h3>${product.name}</h3>

            <p>₹ ${product.price}</p>

            <button onclick="addToCart('${product.name}',${product.price})">

                Add to Cart

            </button>

        </div>

        `;

    });

}

function addToCart(name,price){

    cart.push({name,price});

    updateCart();

}

function updateCart(){

    let list = document.getElementById("cartList");

    let total = 0;

    list.innerHTML = "";

    cart.forEach(item=>{

        total += item.price;

        list.innerHTML += `

        <li>

        ${item.name} - ₹ ${item.price}

        </li>

        `;

    });

    document.getElementById("total").innerText = total;

}