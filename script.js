
const products = [
    {
        id: 1,
        name: "Jacket",
        img: "img/product (1).png",
        desc: "Stay cozy and stylish in our trendy Jacket. Whether you're braving the cold or making a fashion statement, this jacket is the perfect choice. Crafted for comfort and designed for flair, it's a must-have in your wardrobe.",
        price: 9.99,
    },
    {
        id: 2,
        name: "Socks",
        img: "img/product (2).png",
        desc: "Step into the world of comfort with our premium Socks. Soft, snug, and durable, these socks are a treat for your feet. Perfect for long days or lazy evenings, they offer unmatched relaxation for your soles.",
        price: 19.99,
    },
    {
        id: 3,
        name: "Trousers",
        img: "img/product (3).png",
        desc: "Elevate your style with our classic Trousers. Tailored to perfection, these trousers are the epitome of sophistication. Whether you're heading to the office or a special event, these trousers ensure you look sharp and elegant.",
        price: 29.99,
    },
    {
        id: 4,
        name: "Skirt",
        img: "img/product (4).png",
        desc: "Embrace grace with our versatile Skirt. Effortlessly chic, this skirt adds a touch of sophistication to any outfit. Whether you're twirling on the dance floor or attending a formal dinner, this skirt makes a statement.",
        price: 39.99,
    },
    {
        id: 5,
        name: "Boots",
        img: "img/product (5).png",
        desc: "Make a bold statement with our chic Boots. Designed for the fashion-forward, these boots exude confidence and style. From city streets to glamorous events, these boots are your ticket to turning heads.",
        price: 49.99,
    },
    {
        id: 6,
        name: "Bandana",
        img: "img/product (6).png",
        desc: "Accessorize with flair using our stylish Bandana. Versatile and vibrant, this bandana adds a pop of color to your ensemble. Whether worn around your neck, head, or wrist, it's the perfect accessory for trendsetters.",
        price: 59.99,
    },
    {
        id: 7,
        name: "Cap",
        img: "img/product (7).png",
        desc: "Stay shaded in style with our comfortable Cap. Effortlessly cool, this cap offers both sun protection and a fashion statement. Adjustable and breathable, it's the ideal companion for outdoor adventures.",
        price: 69.99,
    },
    {
        id: 8,
        name: "Hat",
        img: "img/product (8).png",
        desc: "Elevate your look with our fashionable Hat. Designed for the discerning individual, this hat combines sophistication with a touch of mystery. Top off your outfits with this hat and make a lasting impression.",
        price: 79.99,
    },
];



setInterval(function() {
    const timer = document.getElementById("timer")
    var now = new Date().getTime();
    var t = endDate - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor(t % (1000 * 60) / 1000 )
    timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
})



function openCart() {
    if (document.getElementById("cart-container").classList.contains("d-none")) {

        document.getElementById("cart-container").classList.remove("d-none");
    } else {
    document.getElementById("cart-container").classList.remove("d-none");
    }
}
    
function closeCart() {
    document.getElementById("cart-container").classList.add("d-none");
}

let cartItems = [];


function addToCart(id) {
    if (cartItems.find((item) => item.id == id)) {
        cartItems = cartItems.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                };
            }
            return item;
        });
    } else{
        cartItems.push({...products[id-1], quantity: 1});
    }
    renderCart();
}
function removeItemCart(id){
    const cardItem = cartItems.find((item) => item.id == id)
    if (cardItem.quantity > 1) {
        cartItems = cartItems.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            }
            return item;
        });
    } else{
        cartItems = cartItems.filter((item) => item.id != id)
    }
    renderCart()
}
var endDate = new Date("Dec 16, 2023 10:37:25").getTime();



function renderCart() {
    const cartItemsContainer = document.getElementById("cart-content-items");
    cartItemsContainer.innerHTML = "";
    cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-2 col-lg-2 col-xl-2">
              <img
                src="${item.img}"
                class="img-fluid rounded-3">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">${item.name}</p>
                <p class="text-muted mb-0 text-small">${item.quantity}x</p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 ">
              <h5 class="mb-0">$${item.price}</h5>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
                <div class="d-flex justify-content-end">
                    <button  class="close" onclick="removeItemCart(${item.id})" >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>

          </div>
        </div>
        </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}



function autoChangeSlide() {
    const slides = document.querySelector("[data-carousel-my]").querySelector("[data-slides-my]")

    const activeSlide = slides.querySelector(".active")

    let newIndex = ([...slides.children].indexOf(activeSlide) + 1 ) % slides.children.length

        
    slides.children[newIndex].classList.add("active");
    activeSlide.classList.remove("active");
}

setInterval(autoChangeSlide, 5000); 

const buttons = document.querySelectorAll("[data-carousel-my-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselMyButton == "next" ? 1 : -1;
        const slides = button.closest("[data-carousel-my]").querySelector("[data-slides-my]")

        const activeSlide = slides.querySelector(".active")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0 ){
            newIndex = slides.children.length - 1 
        } else {
            newIndex = newIndex % slides.children.length
        }
        
        slides.children[newIndex].classList.add("active");
        activeSlide.classList.remove("active");
        console.log(newIndex)
    });
});



document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (name.length == 0 || email.length == 0 || password.length == 0 || confirmPassword.length == 0) {
        alert("All fileds must be filled out");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }
    if (confirmPassword != password) {
        alert("Confirm Password must be equal Password");
        return false;
    }

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    return true;    
});



//  0 1 2 3
// [1,2,3,4]
// 3 % 4 = 3 
// 3 % 3 = 0  