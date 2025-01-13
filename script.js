// Menu Data
const menu = [
    {
        category: "Café",
        items: [
            { name: "Espresso", price: 50 },
            { name: "Café au lait", price: 50 },
            { name: "Lipton", price: 50 },
            { name: "Lipton au lait", price: 50 },
            { name: "Café nos nos", price: 50 },
            { name: "Cappuccino", price: 70 },
            { name: "Etay", price: 50 },
            { name: "Chocolat chaud", price: 70 },
            { name: "Lethé lethé", price: 70 },
            { name: "Double espresso", price: 80 },
            { name: "Café laté", price: 80 },
        ],
    },
    {
        category: "Café Glacé",
        items: [
            { name: "Iced Coffee Caramel", price: 150 },
            { name: "Iced Coffee Maker", price: 150 },
            { name: "Frappuccino Caramel", price: 150 },
        ],
    },
    {
        category: "Jus",
        items: [
            { name: "Jus d'orange", price: 100 },
            { name: "Jus de pastèque", price: 100 },
            { name: "Jus de pêche", price: 100 },
            { name: "Jus de mangue", price: 100 },
            { name: "Jus de kiwi", price: 100 },
            { name: "Jus cocktail", price: 130 },
            { name: "Jus Hot Food", price: 150 },
        ],
    },
    {
        category: "Mojito",
        items: [
            { name: "Mojito Classic", price: 100 },
            { name: "Mojito Menthe", price: 100 },
            { name: "Mojito Pêche", price: 130 },
            { name: "Mojito Fruit Rouge", price: 150 },
            { name: "Mojito Hot Food", price: 150 },
        ],
    },
    {
        category: "Dessert",
        items: [
            { name: "Crêpe au Nutella", price: 100 },
            { name: "Salade de fruit", price: 120 },
            { name: "Crêpe complet", price: 160 },
        ],
    },
    {
        category: "Coupe Glace",
        items: [
            { name: "Coupe Tropical", price: 150 },
            { name: "Coupe Exotique", price: 150 },
            { name: "Coupe Chocolaté", price: 150 },
            { name: "Coupe Auxctrix", price: 180 },
        ],
    },
    {
        category: "Milk-Shake",
        items: [
            { name: "Milk-Shake Fraise", price: 120 },
            { name: "Milk-Shake Chocolat", price: 120 },
            { name: "Milk-Shake Vanille", price: 120 },
            { name: "Milk-Shake Lotus", price: 120 },
            { name: "Milk-Shake Banane", price: 120 },
            { name: "Milk-Shake Avocat", price: 120 },
            { name: "Milk-Shake Nutella Banane", price: 150 },
        ],
    },
    {
        category: "Pizza",
        items: [
            { name: "Pizza Magharita", price: 150 },
            { name: "Pizza Ton", price: 150 },
            { name: "Pizza Végétarienne", price: 150 },
            { name: "Pizza Viande", price: 180 },
            { name: "Pizza Poulet", price: 180 },
            { name: "Pizza Crispy", price: 180 },
            { name: "Pizza Maghloubia", price: 180 },
            { name: "Pizza Baguette", price: 250 },
            { name: "Pizza Penly", price: 250 },
            { name: "Pizza Shawarma Viande", price: 260 },
            { name: "Pizza Shawarma Poulet", price: 260 },
            { name: "Pizza Fruits de Mer", price: 300 },
        ],
    },
    {
        category: "Fruits de Mer",
        items: [
            { name: "Poisson Grillé", price: 350 },
            { name: "Poissons Sautés", price: 300 },
            { name: "Filet du Capitaine", price: 230 },
            { name: "Tiof Grillé", price: 350 },
            { name: "Dorade", price: 350 },
            { name: "Crevette Sautées", price: 200 },
            { name: "Crevette Panée", price: 200 },
            { name: "Crevette Pili Pili", price: 180 },
            { name: "Calamars Sautés", price: 180 },
            { name: "Calamars Panées", price: 180 },
        ],
    },
    {
        category: "Pâtes",
        items: [
            { name: "Spaghetti Bolognaise", price: 200 },
            { name: "Spaghetti Sauce Blanche", price: 200 },
            { name: "Noddle au Crevettes", price: 200 },
            { name: "Noddle au Poulet", price: 150 },
        ],
    },
    {
        category: "Soupes",
        items: [
            { name: "Soupe de Légumes", price: 130 },
            { name: "Soupe de Poulet", price: 180 },
            { name: "Soupe de Poisson", price: 150 },
        ],
    },
    {
        category: "Hamburgers",
        items: [
            { name: "Hamburger", price: 120 },
            { name: "Chicken Burger", price: 150 },
            { name: "Big Burger", price: 150 },
            { name: "Cheeseburger", price: 150 },
            { name: "Egg Burger", price: 150 },
            { name: "Big Chicken Burger", price: 200 },
        ],
    },
    {
        category: "Salade",
        items: [
            { name: "Salade César", price: 150 },
            { name: "Salade Mixte", price: 200 },
        ],
    },
    {
        category: "Tacos",
        items: [
            { name: "Tacos Poulet", price: 150 },
            { name: "Tacos Viande", price: 150 },
            { name: "Tacos Crispy", price: 180 },
        ],
    },
    {
        category: "Kebab",
        items: [
            { name: "Kebab Viande", price: 50 },
            { name: "Kebab Poulet", price: 50 },
            { name: "Kebab Spécial", price: 100 },
            { name: "Shawarma Poulet", price: 100 },
            { name: "Shawarma Viande", price: 120 },
            { name: "Shawarma Mixte", price: 120 },
            { name: "Shawarma Hot Food", price: 150 },
        ],
    },
    {
        category: "Panini",
        items: [
            { name: "Panini Poulet", price: 100 },
            { name: "Panini Viande", price: 100 },
            { name: "Club Sandwich", price: 120 },
            { name: "Sandwich Viande", price: 80 },
            { name: "Sandwich Poulet", price: 100 },
        ],
    },
];

// DOM Elements
const menuContainer = document.getElementById("menu-container");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const orderBtn = document.getElementById("order-btn");
const userName = document.getElementById("user-name");
const userPhone = document.getElementById("user-phone");
const userLocation = document.getElementById("user-location");

let cart = [];

// Display Menu
function displayMenu() {
    menu.forEach(category => {
        const categorySection = document.createElement("div");
        categorySection.className = "col-12 mb-4";
        categorySection.innerHTML = `<h3>${category.category}</h3>`;
        category.items.forEach(item => {
            const menuItem = document.createElement("div");
            menuItem.className = "d-flex justify-content-between align-items-center mb-2";
            menuItem.innerHTML = `
                <span>${item.name} - ${item.price} MRU</span>
                <button class="btn btn-primary btn-sm" onclick="addToCart('${item.name}', ${item.price})">Add</button>
            `;
            categorySection.appendChild(menuItem);
        });
        menuContainer.appendChild(categorySection);
    });
}

// Add Item to Cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

// Update Cart
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>${item.price * item.quantity} MRU</span>
        `;
        cartItems.appendChild(cartItem);
    });
    cartTotal.innerText = total + " MRU";
}

// Send Order via WhatsApp
orderBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    if (!userName.value || !userPhone.value || !userLocation.value) {
        alert("Please fill out all your details!");
        return;
    }

    const orderMessage = cart
        .map(item => `${item.name} x${item.quantity} - ${item.price * item.quantity} MRU`)
        .join("%0A");
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const userDetails = `Name: ${userName.value}%0APhone: ${userPhone.value}%0ALocation: ${userLocation.value}`;

    const url = `https://wa.me/22236707370?text=Order:%0A${orderMessage}%0ATotal: ${total} MRU%0A%0A${userDetails}`;
    window.open(url, "_blank");
});
// Initialize Menu
displayMenu();
